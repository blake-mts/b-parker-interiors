'use client';

import { PortfolioImageData } from '@/utils/PortfolioUtils';
import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import { useSmallScreen } from '../hooks/useSmallScreen';

interface ImageGalleryProps {
    imageData: PortfolioImageData[];
}

export default function ImageGallery({ imageData }: ImageGalleryProps) {
    const small = useSmallScreen();

    return (
        <ImageList sx={{ width: '100%' }} cols={small ? 2 : 3}>
            {imageData.map((image) => (
                <ImageListItem key={image.path}>
                    <Image
                        quality={small ? 25 : 50}
                        style={{ width: '100%', height: 'auto' }}
                        placeholder="blur"
                        blurDataURL={image.base64}
                        width={image.width}
                        height={image.height}
                        src={image.path}
                        alt={image.path}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
