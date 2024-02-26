'use client';

import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import { useSmallScreen } from '../hooks/useSmallScreen';
import { ImageData } from '@/utils/ImageDataBuilder';

interface ImageGalleryProps {
    imageData: ImageData[];
}

export default function ImageGallery({ imageData }: ImageGalleryProps) {
    const small = useSmallScreen();

    return (
        <>
            <ImageList sx={{ width: '100%' }} cols={small ? 2 : 3}>
                {imageData.map((image) => (
                    <ImageListItem key={image.path}>
                        <Image
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                            }}
                            placeholder="blur"
                            blurDataURL={image.base64}
                            width={640}
                            height={960}
                            src={image.path}
                            alt="home interior"
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}
