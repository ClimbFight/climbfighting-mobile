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

const interval = {
    xs: addPx(4),
    small: addPx(8),
    base: addPx(10),
    lg: addPx(12),
    xl: addPx(14),
    xxl: addPx(16),
    xxxl: addPx(34),
    xxxxl: addPx(56),
}

const verticalInterval = {
    xs: addPx(4),
    small: addPx(8),
    base: addPx(12),
    medium: addPx(14),
    lg: addPx(16),
    xl: addPx(20),
    xxl: addPx(24),
    xxxl: addPx(28),
    xxxxl: addPx(32),
}

const fontWeight = {
    light: 300,
    normal: 500,
    bold: 700,
    extraBold: 800,
}

const theme = {
    fontSizes,
    fonts,
    paddings,
    margins,
    interval,
    verticalInterval,
    fontWeight,
}

/**
 * @returns {ReturnType<theme>} theme
 */
export default theme
