import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
        primary: {
          main: '#002137',
          light: '#0094E0',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#F180AC',
          light: '#E1E1E6',
        },
        background: {
            default: '#F7F3F6',
        }

    }
})