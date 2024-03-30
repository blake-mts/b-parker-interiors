import { Box } from '@mui/material';
import BackgroundImage from './BackgroundImage';
import Brand from './Brand';
import { ImageDataBuilder } from '@/utils/ImageDataBuilder';
import { PAGE } from '@/constants/pages.constants';

const homeImageDataBuilder = new ImageDataBuilder(PAGE.home);

export default async function Home() {
    const data = await homeImageDataBuilder.getData();

    return (
        <Box
            style={{
                flexGrow: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <BackgroundImage images={data} />
            <Brand />
        </Box>
    );
}
