import { PortfoiloImageData } from '@/utils/PortfolioUtils';
import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';

interface ImageGalleryProps {
    imageData: PortfoiloImageData[];
}

export default function ImageGallery({ imageData }: ImageGalleryProps) {
    return (
        <ImageList cols={3}>
            {imageData.map((image) => (
                <ImageListItem key={image.path}>
                    <Image
                        placeholder="blur"
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
