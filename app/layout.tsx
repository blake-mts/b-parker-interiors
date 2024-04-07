import { Box, CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import Navigation from './components/Navigation';
import { theme } from '@/theme/theme';
import './globals.css';
import { COLORS } from '@/constants/colors.constants';
import { Metadata } from 'next';
import Script from 'next/script';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} />
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                flexGrow: 1,
                            }}
                        >
                            <Navigation />
                            <main
                                style={{
                                    flexGrow: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    minHeight: 0,
                                    color: COLORS.smokeyGray,
                                }}
                            >
                                {children}
                            </main>
                        </Box>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: 'B. Parker Interiors',
    description: 'Interiors',
    openGraph: {
        title: 'B. Parker Interiors',
        description: 'Interiors',
        url: 'https://b-parker-interiors-green.vercel.app/',
    },
    metadataBase: new URL('https://b-parker-interiors-green.vercel.app/'),
};
