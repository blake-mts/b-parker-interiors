'use client';

import { REMOVE_IMAGE_WHITESPACE } from '@/constants/image.constants';
import { FILL } from '@/constants/styles.constants';
import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import theme from '../theme';
import SingleImage from './SingleImage';

interface BackgroundImageProps {
    imageFilePaths: string[];
}

export default function BackgroundImage({
    imageFilePaths,
}: BackgroundImageProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const loadCounter = useRef(0);

    const lastIndex = imageFilePaths.length - 1;

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
            {imageFilePaths.map((filePath, index) => (
                <SingleImage
                    key={filePath}
                    filePath={filePath}
                    index={index}
                    onLoad={onLoad}
                    loaded={loaded}
                    currentImageIndex={currentImageIndex}
                />
            ))}
        </Box>
    );
}
