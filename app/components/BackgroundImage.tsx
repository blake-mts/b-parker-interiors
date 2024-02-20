'use client';

import { REMOVE_IMAGE_WHITESPACE } from '@/constants/image';
import { Box, Fade } from '@mui/material';
import image1 from '../../public/images/image1.jpg';
import image2 from '../../public/images/image2.jpg';
import image3 from '../../public/images/image3.jpg';
import image4 from '../../public/images/image4.jpg';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [image1, image2, image3, image4];
const imagesLastIndex = images.length - 1;

export default function BackgroundImage() {
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
    }, [setImage]);

    return (
        <Box sx={{ ...REMOVE_IMAGE_WHITESPACE, position: 'relative' }}>
            {[0, 1].map((toggle) => (
                <Box
                    key={`image-${toggle}`}
                    sx={{ position: 'absolute', opacity: '.6' }}
                >
                    <Fade timeout={3000} in={toggle === image.container}>
                        <Image
                            priority
                            style={{
                                height: '100vh',
                                width: '100vw',
                                objectFit: 'cover',
                            }}
                            src={
                                toggle === image.container
                                    ? images[image.in]
                                    : images[image.out]
                            }
                            alt="home interior"
                        />
                    </Fade>
                </Box>
            ))}
        </Box>
    );
}
