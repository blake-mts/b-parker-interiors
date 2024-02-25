import { FADE_IN_TIME } from '@/constants/image.constants';
import { Box, Fade } from '@mui/material';
import BackgroundImage from './components/BackgroundImage';
import Brand from './components/Brand';
import { PublicUtils } from '@/utils/PublicUtils';

export default async function Home() {
    const data = await PublicUtils.getImagePaths('slideshow');

    return (
        <Fade style={{ flexGrow: 1 }} in timeout={FADE_IN_TIME}>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <BackgroundImage imageFilePaths={data} />
                <Brand />
            </Box>
        </Fade>
    );
}
