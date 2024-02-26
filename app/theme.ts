'use client';

import { Cinzel, Outfit } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { COLORS } from '@/constants/colors.constants';

const outfit = Outfit({ subsets: ['latin'] });

const cinzel = Cinzel({ weight: ['400'], subsets: ['latin'] });

let theme = createTheme({
    typography: {
        fontFamily: outfit.style.fontFamily,
    },
    palette: {
        background: { default: COLORS.granularLimestone },
        primary: { main: COLORS.smokeyGray },
        secondary: { main: COLORS.antiqueBrown },
        text: { primary: COLORS.smokeyGray },
    },
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
    fontSize: '2rem',
    fontFamily: cinzel.style.fontFamily,
    [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
    },
};

export default theme;
