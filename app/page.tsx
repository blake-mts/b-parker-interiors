import { Box } from '@mui/material';
import BackgroundImage from './components/BackgroundImage';
import Brand from './Brand';

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
