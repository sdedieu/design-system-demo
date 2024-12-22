import { TestBed } from '@angular/core/testing';
import { ContrastCalculatorService } from './contrast-calculator.service';
import { CdsCustomizableTokens, CdsThemeService } from './theming.service';

describe('CdsThemeService', () => {
  const documentMock = {
    documentElement: {
      style: {
        setProperty: jest.fn(),
      },
    },
  };

  const service = new CdsThemeService(
    documentMock as any,
    new ContrastCalculatorService(),
  );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  describe('changeTokens', () => {
    it('should change the value of array given tokens', () => {
      const injectedTokens = service.changeTokens([
        {
          token: CdsCustomizableTokens.TextColorForegroundPrimary,
          value: '#000000',
        },
        {
          token: CdsCustomizableTokens.TextColorForegroundAccent,
          value: '#FFFFFF',
        },
      ]);

      expect(injectedTokens).toEqual([
        {
          token: CdsCustomizableTokens.TextColorForegroundPrimary,
          value: '#000000',
        },
        {
          token: CdsCustomizableTokens.TextColorForegroundAccent,
          value: '#FFFFFF',
        },
      ]);
    });

    it('should raise an error if the given token is not a valid token and only return injected tokens', () => {
      console.error = jest.fn();

      const injectedTokens = service.changeTokens([
        {
          token: CdsCustomizableTokens.TextColorForegroundPrimary,
          value: '#000000',
        },
        {
          token: 'invalid-token' as CdsCustomizableTokens,
          value: '',
        },
      ]);

      expect(console.error).toHaveBeenCalled();

      expect(injectedTokens).toEqual([
        {
          token: CdsCustomizableTokens.TextColorForegroundPrimary,
          value: '#000000',
        },
      ]);
    });

    it('should compute variation for token that require palette variations', () => {
      const injectedTokens = service.changeTokens([
        {
          token: CdsCustomizableTokens.Primary,
          value: '#9E0E40',
        },
        {
          token: CdsCustomizableTokens.Accent,
          value: '#01d758',
        },
      ]);

      expect(injectedTokens).toEqual([
        {
          token: 'primary-1',
          value: '#f5e7ec',
        },
        {
          token: 'primary-2',
          value: '#eccfd9',
        },
        {
          token: 'primary-3',
          value: '#d89fb3',
        },
        {
          token: 'primary-4',
          value: '#c56e8c',
        },
        {
          token: 'primary-5',
          value: '#9E0E40',
        },
        {
          token: 'primary-6',
          value: '#7e0b33',
        },
        {
          token: 'primary-7',
          value: '#5f0826',
        },
        {
          token: 'primary-8',
          value: '#3f061a',
        },
        {
          token: 'primary-9',
          value: '#20030d',
        },
        {
          token: 'cds-pr1',
          value: '#5f0826',
        },
        {
          token: 'cds-pr2',
          value: '#9E0E40',
        },
        {
          token: 'cds-pr3',
          value: '#eccfd9',
        },
        {
          token: 'accent-1',
          value: '#e6fbee',
        },
        {
          token: 'accent-2',
          value: '#ccf7de',
        },
        {
          token: 'accent-3',
          value: '#99efbc',
        },
        {
          token: 'accent-4',
          value: '#67e79b',
        },
        {
          token: 'accent-5',
          value: '#01d758',
        },
        {
          token: 'accent-6',
          value: '#01ac46',
        },
        {
          token: 'accent-7',
          value: '#018135',
        },
        {
          token: 'accent-8',
          value: '#005623',
        },
        {
          token: 'accent-9',
          value: '#002b12',
        },
        {
          token: 'cds-ac1',
          value: '#018135',
        },
        {
          token: 'cds-ac2',
          value: '#01d758',
        },
        {
          token: 'cds-ac3',
          value: '#ccf7de',
        },
      ]);
    });

    it('should return an object with the base color, a darker color, and a lighter color', () => {
      const baseColor = '#6f0a2d';

      const colorVariants = service.getColorVariants(baseColor);

      expect(colorVariants).toEqual({
        palette1: '#f1e7ea',
        palette2: '#e2ced5',
        palette3: '#c59dab',
        palette4: '#a96c81',
        palette5: '#6f0a2d',
        palette6: '#590824',
        palette7: '#43061b',
        palette8: '#2c0412',
        palette9: '#160209',
      });
    });

    it('should return a lighter color in hexadecimal format', () => {
      const color = '#000000';
      const adjustmentPercentage = 50;
      const expectedResult = '#808080';

      expect(service.lightenColor(color, adjustmentPercentage)).toBe(
        expectedResult,
      );
    });

    it('should return a darker color in hexadecimal format', () => {
      const color = '#ffffff';
      const adjustmentPercentage = 50;
      const expectedResult = '#808080';

      expect(service.darkenColor(color, adjustmentPercentage)).toBe(
        expectedResult,
      );
    });

    it('should not return a color value greater than 255 in any of its RGB components', () => {
      const color = '#000000';
      const adjustmentPercentage = 200;

      const resultLigther = service.lightenColor(color, adjustmentPercentage);

      Object.values(service.hexToRgb(resultLigther)).forEach(value => {
        expect(value).toBeLessThanOrEqual(255);
      });

      const resultDarker = service.darkenColor(color, adjustmentPercentage);

      Object.values(service.hexToRgb(resultDarker)).forEach(value => {
        expect(value).toBeLessThanOrEqual(255);
      });
    });

    it('should not return a color value less than 0 in any of its RGB components', () => {
      const color = '#ffffff';
      const adjustmentPercentage = -200;

      const resultLigther = service.lightenColor(color, adjustmentPercentage);

      Object.values(service.hexToRgb(resultLigther)).forEach(value => {
        expect(value).toBeGreaterThanOrEqual(0);
      });

      const resultDarker = service.darkenColor(color, adjustmentPercentage);

      Object.values(service.hexToRgb(resultDarker)).forEach(value => {
        expect(value).toBeGreaterThanOrEqual(0);
      });
    });

    it('should convert hexadecimal to RGB', () => {
      const hex = '#000000';
      const expectedResult = { r: 0, g: 0, b: 0 };

      const result = service.hexToRgb(hex);

      expect(result).toEqual(expectedResult);
    });

    it('should convert RGB to hexadecimal', () => {
      const r = 0;
      const g = 0;
      const b = 0;
      const expectedResult = '#000000';

      const result = service.rgbToHex(r, g, b);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('getForegroundColorsForBackground', () => {
    it('should return the best and all foreground colors with their respective scores', () => {
      // Act
      const result = service.getForegroundColorsForBackground('#1d3766'); // Call the function with a background color

      // Assert
      expect(result).toEqual({
        best: {
          color: '#ffffff',
          score: expect.any(Number),
        },
        all: [
          {
            color: '#000000',
            score: expect.any(Number),
          },
          {
            color: '#ffffff',
            score: expect.any(Number),
          },
        ],
      });
    });
  });
});
