import { FADE_IN_TIME } from '@/constants/image.constants';
import { FILL } from '@/constants/styles.constants';
import { Box, Fade } from '@mui/material';
import Image from 'next/image';

interface SingleImageProps {
    filePath: string;
    index: number;
    onLoad: () => void;
    loaded: boolean;
    currentImageIndex: number;
}

export default function SingleImage({
    filePath,
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
            key={`image-${filePath}`}
            sx={{
                ...FILL,
                position: 'absolute',
                opacity: '.5',
            }}
        >
            <Fade timeout={FADE_IN_TIME} in={fadeIn()}>
                <Image
                    onLoad={onLoad}
                    fill
                    priority
                    style={{
                        objectFit: 'cover',
                        position: 'absolute',
                    }}
                    src={filePath}
                    alt="home interior"
                    sizes="100%"
                />
            </Fade>
        </Box>
    );
}
