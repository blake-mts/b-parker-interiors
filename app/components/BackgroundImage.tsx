'use client';

import {
    FADE_IN_TIME,
    REMOVE_IMAGE_WHITESPACE,
} from '@/constants/image.constants';
import { Box, Fade } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { FILL } from '@/constants/styles.constants';
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
        <Box sx={{ ...REMOVE_IMAGE_WHITESPACE, position: 'absolute', ...FILL }}>
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
