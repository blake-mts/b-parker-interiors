'use client';

import { REMOVE_IMAGE_WHITESPACE } from '@/constants/image.constants';
import { FILL } from '@/constants/styles.constants';
import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import SingleImage from './SingleImage';
import { ImageData } from '@/utils/ImageDataBuilder';
import { theme } from '@/theme/ThemeUtils';

interface BackgroundImageProps {
    images: ImageData[];
}

export default function BackgroundImage({ images }: BackgroundImageProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const loadCounter = useRef(0);

    const lastIndex = images.length - 1;

    useEffect(() => {
        if (loaded) {
            const interval = setInterval(() => {
                setCurrentImageIndex((state) =>
                    state === lastIndex ? 0 : state + 1
                );
            }, 10000);

            return () => clearInterval(interval);
        }
    }, [loaded, lastIndex]);

    const onLoad = () => {
        loadCounter.current++;
        if (loadCounter.current === lastIndex + 1) {
            setLoaded(true);
        }
    };

    return (
        <Box
            sx={{
                ...REMOVE_IMAGE_WHITESPACE,
                ...FILL,
                position: 'absolute',
                backgroundColor: theme.palette.common.black,
            }}
        >
            {images.map((image, index) => (
                <SingleImage
                    key={image.path}
                    image={image}
                    index={index}
                    onLoad={onLoad}
                    loaded={loaded}
                    currentImageIndex={currentImageIndex}
                />
            ))}
        </Box>
    );
}
