import { COLORS } from '@/constants/colors.constants';
import { theme } from '@/theme/theme';
import { Box, CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Metadata } from 'next';
import Navigation from './components/Navigation';
import Head from 'next/head';

import './globals.css';

const meta = {
    title: 'B. Parker Interiors',
    description: 'Residential Build and Design Firm',
    image: {
        height: '854',
        width: '1280',
        type: 'image/jpeg',
        description: 'summary_large_image',
        path: '/opengraph-image.jpg',
    },
    url: 'https://www.bparkerinteriors.com',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:url" content={meta.url} />
                <meta property="og:image:type" content={meta.image.type} />
                <meta property="og:image:width" content={meta.image.width} />
                <meta property="og:image:height" content={meta.image.height} />
                <meta property="og:image" content={meta.image.path} />
                <meta name="twitter:image:type" content={meta.image.type} />
                <meta name="twitter:image:width" content={meta.image.width} />
                <meta name="twitter:image:height" content={meta.image.height} />
                <meta name="twitter:image" content={meta.image.path} />
                <meta name="twitter:card" content={meta.image.description} />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
            </Head>
            <body>
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
    description: 'Residential Build and Design Firm',
    openGraph: {
        title: 'B. Parker Interiors',
        description: 'Residential Build and Design Firm',
        url: 'https://www.bparkerinteriors.com/',
    },
    metadataBase: new URL('https://www.bparkerinteriors.com/'),
};
