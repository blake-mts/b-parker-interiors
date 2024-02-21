'use client';

import {
    FADE_IN_TIME,
    REMOVE_IMAGE_WHITESPACE,
} from '@/constants/image.constants';
import { Box, Fade } from '@mui/material';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FILL } from '@/constants/styles.constants';

interface BackgroundImageProps {
    imageFilePaths: string[];
}

export default function BackgroundImage({
    imageFilePaths,
}: BackgroundImageProps) {
    const imagesLastIndex = imageFilePaths.length - 1;

    const [image, setImage] = useState({
        in: 0,
        out: imagesLastIndex,
        container: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setImage((state) => ({
                in: state.in === imagesLastIndex ? 0 : state.in + 1,
                out: state.in,
                container: 1 - state.container,
            }));
        }, 10000);

        return () => clearInterval(interval);
    }, [setImage, imagesLastIndex]);

    return (
        <Box sx={{ ...REMOVE_IMAGE_WHITESPACE, position: 'absolute', ...FILL }}>
            {[0, 1].map((toggle) => (
                <Box
                    key={`image-${toggle}`}
                    sx={{
                        position: 'absolute',
                        opacity: '.5',
                        ...FILL,
                    }}
                >
                    <Fade
                        timeout={FADE_IN_TIME}
                        in={toggle === image.container}
                    >
                        <Image
                            fill
                            priority
                            style={{
                                objectFit: 'cover',
                            }}
                            src={
                                toggle === image.container
                                    ? imageFilePaths[image.in]
                                    : imageFilePaths[image.out]
                            }
                            alt="home interior"
                            sizes="100%"
                        />
                    </Fade>
                </Box>
            ))}
        </Box>
    );
}
