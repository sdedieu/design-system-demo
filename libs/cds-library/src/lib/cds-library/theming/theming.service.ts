import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ContrastCalculatorService } from './contrast-calculator.service';

export enum CdsCustomizableTokens {
  Primary = 'primary',
  Accent = 'accent',
  TextColorForegroundPrimary = 'primary-0',
  TextColorForegroundAccent = 'accent-0',
}

export interface CdsTokenUpdate {
  token: CdsCustomizableTokens;
  value: string;
}

export interface CdsColorMetaData {
  color: string;
  score: number;
}

@Injectable({
  providedIn: 'root',
})
export class CdsThemeService {
  private readonly _REQUIRE_PALETTE_VARIATIONS = [
    CdsCustomizableTokens.Primary,
    CdsCustomizableTokens.Accent,
  ];

  private readonly _DEFAULT_TOKENS_VALUES: {
    [key in CdsCustomizableTokens]?: string;
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private contrastCalculator: ContrastCalculatorService,
  ) {
    this._DEFAULT_TOKENS_VALUES = {
      [CdsCustomizableTokens.Primary]: this.getCssVariableValueByName(
        '--primary-5',
      ),
      [CdsCustomizableTokens.Accent]: this.getCssVariableValueByName(
        '--accent-5',
      ),
      [CdsCustomizableTokens.TextColorForegroundPrimary]: this.getCssVariableValueByName(
        '--primary-0',
      ),
      [CdsCustomizableTokens.TextColorForegroundAccent]: this.getCssVariableValueByName(
        '--accent-0',
      ),
    };
  }

  changeTokens(updates: CdsTokenUpdate[]): CdsTokenUpdate[] {
    const injectedDesignToken: CdsTokenUpdate[] = [];

    for (const update of updates) {
      if (Object.values(CdsCustomizableTokens).includes(update.token)) {
        const tokensToUpdates = this.computeTokensToUpdates(
          update.token,
          update.value,
        );

        for (const tokensToUpdate of tokensToUpdates) {
          this.injectDesignTokens(tokensToUpdate);
          injectedDesignToken.push(tokensToUpdate);
        }
      } else {
        console.error(
          `CDS warning: you are trying to change ${update.token} that is not a valid token.`,
        );
      }
    }

    return injectedDesignToken;
  }

  private injectDesignTokens(tokensToUpdate: CdsTokenUpdate) {
    this.document.documentElement.style.setProperty(
      '--' + tokensToUpdate.token,
      tokensToUpdate.value,
    );
  }

  resetDefaultDesignTokens() {
    const updates: CdsTokenUpdate[] = [];

    Object.values(CdsCustomizableTokens).forEach(token => {
      updates.push({
        token,
        value: this._DEFAULT_TOKENS_VALUES[token],
      });
    });

    this.changeTokens(updates);
  }

  private computeTokensToUpdates(
    token: CdsCustomizableTokens,
    value: string,
  ): CdsTokenUpdate[] {
    const tokensToUpdates: CdsTokenUpdate[] = [];

    if (this._REQUIRE_PALETTE_VARIATIONS.includes(token)) {
      const colorVariants = this.getColorVariants(value);

      for (let i = 1; i <= 9; i++) {
        const tokenToUpdate = {
          token: (token + '-' + i) as CdsCustomizableTokens,
          value: colorVariants['palette' + i],
        };

        tokensToUpdates.push(tokenToUpdate);
      }

      // LEGACY INJECTION TO SUPPORT SATELLITE APPS. TO REMOVE WHEN EVERYONE ON CDS-15
      for (let i = 1; i <= 3; i++) {
        let legacyToken: string;
        let legacyColorVariant: string;

        switch (i) {
          case 1:
            if (token === CdsCustomizableTokens.Primary) {
              legacyToken = 'cds-pr1';
            } else if (token === CdsCustomizableTokens.Accent) {
              legacyToken = 'cds-ac1';
            }
            legacyColorVariant = colorVariants['palette7'];
            break;
          case 2:
            if (token === CdsCustomizableTokens.Primary) {
              legacyToken = 'cds-pr2';
            } else if (token === CdsCustomizableTokens.Accent) {
              legacyToken = 'cds-ac2';
            }
            legacyColorVariant = colorVariants['palette5'];
            break;
          case 3:
            if (token === CdsCustomizableTokens.Primary) {
              legacyToken = 'cds-pr3';
            } else if (token === CdsCustomizableTokens.Accent) {
              legacyToken = 'cds-ac3';
            }
            legacyColorVariant = colorVariants['palette2'];
            break;
          default:
        }

        const tokenToUpdate = {
          token: legacyToken as CdsCustomizableTokens,
          value: legacyColorVariant,
        };

        tokensToUpdates.push(tokenToUpdate);
      }
    } else {
      tokensToUpdates.push({
        token,
        value,
      });
    }

    return tokensToUpdates;
  }

  getForegroundColorsForBackground(
    color: string,
  ): {
    best: CdsColorMetaData;
    all: CdsColorMetaData[];
  } {
    const acceptedForegroundColor = ['#000000', '#ffffff'];

    const foregroundColors = {
      best: {
        color: '',
        score: 0,
      },
      all: [],
    };

    for (const foregroundColor of acceptedForegroundColor) {
      const textColorScore = this.contrastCalculator.calculateContrastRatio(
        color,
        foregroundColor,
      );

      const currentForegroundColor = {
        color: foregroundColor,
        score: textColorScore,
      };

      foregroundColors.all.push(currentForegroundColor);

      if (foregroundColors.best.score < currentForegroundColor.score) {
        foregroundColors.best = currentForegroundColor;
      }
    }

    return foregroundColors;
  }

  getColorVariants(
    base: string,
  ): {
    palette1: string;
    palette2: string;
    palette3: string;
    palette4: string;
    palette5: string;
    palette6: string;
    palette7: string;
    palette8: string;
    palette9: string;
  } {
    return {
      palette1: this.lightenColor(base, 90),
      palette2: this.lightenColor(base, 80),
      palette3: this.lightenColor(base, 60),
      palette4: this.lightenColor(base, 40),
      palette5: base,
      palette6: this.darkenColor(base, 20),
      palette7: this.darkenColor(base, 40),
      palette8: this.darkenColor(base, 60),
      palette9: this.darkenColor(base, 80),
    };
  }

  lightenColor(color: string, adjustmentPercentage: number): string {
    const rgbObject = this.hexToRgb(color);

    // Compute new value and apply %
    const R = Math.max(
      0,
      Math.min(
        255,
        Math.round(
          rgbObject.r + (255 - rgbObject.r) * (adjustmentPercentage / 100),
        ),
      ),
    );
    const G = Math.max(
      0,
      Math.min(
        255,
        Math.round(
          rgbObject.g + (255 - rgbObject.g) * (adjustmentPercentage / 100),
        ),
      ),
    );
    const B = Math.max(
      0,
      Math.min(
        255,
        Math.round(
          rgbObject.b + (255 - rgbObject.b) * (adjustmentPercentage / 100),
        ),
      ),
    );

    return this.rgbToHex(R, G, B);
  }

  darkenColor(color: string, adjustmentPercentage: number): string {
    const rgbObject = this.hexToRgb(color);

    const R = Math.max(
      0,
      Math.min(
        255,
        Math.round(rgbObject.r - rgbObject.r * (adjustmentPercentage / 100)),
      ),
    );
    const G = Math.max(
      0,
      Math.min(
        255,
        Math.round(rgbObject.g - rgbObject.g * (adjustmentPercentage / 100)),
      ),
    );
    const B = Math.max(
      0,
      Math.min(
        255,
        Math.round(rgbObject.b - rgbObject.b * (adjustmentPercentage / 100)),
      ),
    );

    return this.rgbToHex(R, G, B);
  }

  hexToRgb(hex: string): { r: number; g: number; b: number } {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    return { r, g, b };
  }

  rgbToHex(r: number, g: number, b: number) {
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');

    return `#${rHex}${gHex}${bHex}`;
  }

  getCssVariableValueByName(name: string): string {
    return getComputedStyle(document.body).getPropertyValue(name);
  }
}
