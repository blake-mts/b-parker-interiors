import { FADE_IN_TIME } from '@/constants/image.constants';
import { FILL } from '@/constants/styles.constants';
import { ImageData } from '@/utils/ImageDataBuilder';
import { Box, Fade } from '@mui/material';
import Image from 'next/image';

interface SingleImageProps {
    image: ImageData;
    index: number;
    onLoad: () => void;
    loaded: boolean;
    currentImageIndex: number;
}

export default function SingleImage({
    image,
    index,
    loaded,
    currentImageIndex,
    onLoad,
}: SingleImageProps) {
    const fadeIn = () => {
        if (index === 0 && !loaded) {
            return true;
        }

        return loaded && index === currentImageIndex;
    };

    return (
        <Box
            sx={{
                ...FILL,
                position: 'absolute',
                opacity: '.5',
            }}
        >
            <Fade timeout={FADE_IN_TIME} in={fadeIn()}>
                <Image
                    onLoad={onLoad}
                    priority
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        height: '100%',
                    }}
                    src={image.path}
                    alt="home interior"
                    width={1000}
                    height={1000}
                />
            </Fade>
        </Box>
    );
}
