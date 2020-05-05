import { red } from '@material-ui/core/colors';

const typography = {
    fontFamily: 'Roboto',
}

// A custom theme for this app
const theme = {
    palette: {
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
            main: red.A400,
        },
    },
    overrides: {
        MuiLink: {
            root: {
                '&:hover': {
                    opacity: '.75'
                }
            }
        },
        MuiPaper: {
            elevation4: {
                boxShadow: 'none',
            }
        }
    },
    typography,
};

console.log(theme)

export default theme;