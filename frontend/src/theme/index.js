const colors = {
  primary: {
    light: '#757ce8',
    main: '#3f50b5',
    dark: '#002884',
    contrastText: '#fff'
  },
  secondary: {
    light: '#ff7961',
    main: '#f44336',
    dark: '#ba000d',
    contrastText: '#000'
  }
}

export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  colors,
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  text: {
    heading: '\'Kulim Park\', sans-serif'
  },
  fonts: {
    heading: '\'Kulim Park\', sans-serif',
    subheadline: 'inherit',
    body: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  variants: {

  },
  text: {
  },
  buttons: {
    primary: {
      color: colors.primary.contrastText,
      bg: colors.primary.main
    },
    secondary: {
      color: colors.secondary.contrastText,
      bg: colors.secondary.main
    },
    ctaPrimary: {
      padding: '14px 32px',
      color: colors.primary.contrastText,
      background: colors.primary.main,
      marginRight: 8
    },
    ctaSecondary: {
      padding: '14px 32px',
      color: colors.primary.main,
      border: `1px solid ${colors.primary.main}`,
      background: 'none',
      marginRight: 8
    }
  }
}
