import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContrastCalculatorService {
  constructor() {}
  calculateContrastRatio(
    backgroundColorHex: string,
    foregroundColorHex: string,
  ): number {
    const luminance1 = this.luminanceForSRGB(
      this.hexToSRGB(backgroundColorHex),
    );
    const luminance2 = this.luminanceForSRGB(
      this.hexToSRGB(foregroundColorHex),
    );

    return (
      (Math.max(luminance1, luminance2) + 0.05) /
      (Math.min(luminance1, luminance2) + 0.05)
    );
  }

  private hexToSRGB(hex) {
    if (!hex) {
      return null;
    }

    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(_, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16) / 255,
          g: parseInt(result[2], 16) / 255,
          b: parseInt(result[3], 16) / 255,
        }
      : null;
  }

  private luminanceForSRGB({ r, g, b }) {
    const [R, G, B] = [r, g, b].map(function(v) {
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });

    return R * 0.2126 + G * 0.7152 + B * 0.0722;
  }
}
