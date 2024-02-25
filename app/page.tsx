import { Box } from '@mui/material';
import BackgroundImage from './components/BackgroundImage';
import Brand from './components/Brand';
import { PublicUtils } from '@/utils/PublicUtils';

export default async function Home() {
    const data = await PublicUtils.getImagePaths('slideshow');

    return (
        <Box
            style={{
                flexGrow: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <BackgroundImage imageFilePaths={data} />
            <Brand />
        </Box>
    );
}
