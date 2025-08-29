import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ececec',
    },
  },
  typography: {
    subtitle1: {
      fontSize: 20,
    },
    tempMax: {
      fontSize: 20,
      color: 'red',
    },
    tempMin: {
      fontSize: 20,
      color: 'blue',
    },
  },
});

export const AppTheme = (props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {props.children}
  </ThemeProvider>
);
