import { Box } from '@mui/material';
import BackgroundImage from './components/BackgroundImage';
import Brand from './Brand';
import { Metadata } from 'next';

export default function Home() {
    return (
        <Box
            style={{
                flexGrow: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <BackgroundImage />
            <Brand />
        </Box>
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
};
