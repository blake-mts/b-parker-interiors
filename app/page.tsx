import { Box } from '@mui/material';
import BackgroundImage from './components/BackgroundImage';
import Brand from './components/Brand';

export default function Home() {
    return (
        <main>
            <Box sx={{ position: 'relative' }}>
                <BackgroundImage />
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        height: '100vh',
                        width: '100vw',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Brand />
                </Box>
            </Box>
        </main>
    );
}
