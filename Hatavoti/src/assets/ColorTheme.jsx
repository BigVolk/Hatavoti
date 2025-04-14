import { createTheme } from '@mui/material/styles';

const ColorTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#139e3f',
    },
    secondary: {
      main: '#f3ff00',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
    },
  },
  typography: {
    fontFamily: 'Assistant',
    fontWeightLight: 300,
  },
})

export default ColorTheme