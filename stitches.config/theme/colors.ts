import {
  mauve,
  slate,
  violet,
  indigo,
  mauveA,
  slateA,
  violetA,
  indigoA,
  blackA,
  mauveDark,
  slateDark,
  violetDark,
  indigoDark,
  mauveDarkA,
  slateDarkA,
  violetDarkA,
  indigoDarkA,
} from '@radix-ui/colors';

const customColors = {
  hiContrast: '$mauve12',
  loContrast: '$mauve1',

  shadow1: `0 4px 8px ${blackA.blackA8}`,
  shadow2: `0 8px 16px ${blackA.blackA8}`,
};

export const colors = {
  ...customColors,

  ...violet,
  ...indigo,
  ...mauve,
  ...slate,

  ...violetA,
  ...indigoA,
  ...mauveA,
  ...slateA,
};

export const darkThemeConfig = {
  colors: {
    ...customColors,

    ...violetDark,
    ...indigoDark,
    ...mauveDark,
    ...slateDark,

    ...violetDarkA,
    ...indigoDarkA,
    ...mauveDarkA,
    ...slateDarkA,
  },
};