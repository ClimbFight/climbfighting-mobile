const addPx = (size) => `${size}px`

const fontSizes = {
    xxs: addPx(10),
    xs: addPx(11),
    small: addPx(13),
    base: addPx(14),
    lg: addPx(16),
    xl: addPx(18),
    xxl: addPx(24),
    xxxl: addPx(32),
}

const paddings = {
    xs: addPx(6),
    small: addPx(8),
    base: addPx(10),
    lg: addPx(12),
    xl: addPx(14),
    xxl: addPx(16),
    xxxl: addPx(18),
    xxxxl: addPx(24),
}

const margins = {
    xs: addPx(4),
    small: addPx(8),
    base: addPx(12),
    lg: addPx(14),
    xl: addPx(16),
    xxl: addPx(20),
    xxxl: addPx(24),
    xxxxl: addPx(32),
}

const colors = {
    '--grey-1': '#343a40',
    '--grey-2': '#495057',
    '--grey-3': '#868e96',
    '--grey-4': '#adb5bd',
    '--grey-5': '#ced4da',
    '--white-2': '#f1f3f5',
    '--white-1': '#f8f9fa',
    '--white': '#ffffff',
    '--marine': '#07cfcc',
    '--pale-marine': '#ccfffe',
    '--red': '#ff4523',
}

const fonts = {
    ko_light: `
      font-family: AppleSDGothicNeoL;
      font-weight: 300;
  `,
    ko_medium: `
      font-family: AppleSDGothicNeoM;
      font-weight: 500;
  `,
    ko_bold: `
      font-family: AppleSDGothicNeoB;
      font-weight: 700;
  `,
    ko_extrabold: `
      font-family: AppleSDGothicNeoEB;
      font-weight: 800;
  `,
}

const theme = {
    fontSizes,
    colors,
    fonts,
    paddings,
    margins,
}

export default theme
