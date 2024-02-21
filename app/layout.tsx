import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Box, CssBaseline } from '@mui/material';
import { Suspense } from 'react';
import Loading from './loading';
import Navigation from './components/Navigation';
import { FILL } from '@/constants/styles.constants';
``;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html style={FILL} lang="en">
            <body style={FILL}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Box
                            sx={{
                                ...FILL,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Navigation />
                            <Suspense fallback={<Loading />}>
                                <main style={{ flexGrow: 1 }}>{children}</main>
                            </Suspense>
                        </Box>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
