import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
    palette: {
        primary: {
          main: '#F7F3F6',
          light: '#0094E0',
          contrastText: '#000000',
        },
        secondary: {
          main: '#F180AC',
          light: '#E1E1E6',
        },
        background: {
            default: '#002137',
        }

    }
})