import { Box, Fade } from '@mui/material';
import BackgroundImage from './components/BackgroundImage';
import Brand from './components/Brand';
import { FADE_IN_TIME } from '@/constants/image.constants';
import path from 'path';
import { readdir } from 'fs/promises';
import { FILL } from '@/constants/styles.constants';

async function getImagePaths() {
    const dir = path.resolve('public/images/slideshow');
    const fileNames = await readdir(dir);
    return fileNames.map((fileName) => `/images/slideshow/${fileName}`);
}

export default async function Home() {
    const data = await getImagePaths();

    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <Fade style={FILL} in timeout={FADE_IN_TIME}>
                <Box sx={{ position: 'relative' }}>
                    <BackgroundImage imageFilePaths={data} />
                    <Brand />
                </Box>
            </Fade>
        </Box>
    );
}
