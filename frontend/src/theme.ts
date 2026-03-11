import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#C06ECC',
    },
    background: {
      default: '#F8F8FA',
    },
  },
  typography: {
    fontFamily: 'inter, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          border: '1px solid #BD68CA',
          transition: '0.3s',
          '&:hover': {
            backgroundColor: '#1976D2',
            BorderColor: '#0D47A1',
          },
        },
      },
    },
  },
});
