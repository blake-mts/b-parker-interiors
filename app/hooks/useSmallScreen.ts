import { useMediaQuery, useTheme } from '@mui/material';

export function useSmallScreen() {
    const theme = useTheme();
    const mediaQuery = useMediaQuery(theme.breakpoints.down('md'));

    return mediaQuery;
}
