const typography = {
  fontFamily: 'Roboto',
  fontSize: 18,
  lineHeight: '145%',
};

// A custom theme for this app
const theme = {
  text: {
    header: '#91D4CF',
  },
  palette: {
    main: {
      base: '#15173D',
      saturated: '#020650',
      lowlight: '#e4e5f6',
    },
    highlight: {
      base: '#D1AD70',
      saturated: '#fdb844',
      lowlight: '#fcfaf6',
    },
    brand: {
      base: '#87CCB0',
      saturated: '#59fab9',
      lowlight: '#daefe6',
    },
    alternate: {
      base: '#91D4CF',
      saturated: '#68fdf2',
      lowlight: '#f4fbfa',
    },
    type: 'light',
    primary: {
      light: '#64d8cb',
      main: '#26a69a',
      dark: '#00766c',
      contrastText: '#f5f5f5',
    },
    secondary: {
      light: '#718792',
      main: '#455a64',
      dark: '#1c313a',
      contrastText: '#e0f7fa',
    },
    error: {
      main: '#e0f7fa',
    },
  },
  typography,
};

export default theme;
