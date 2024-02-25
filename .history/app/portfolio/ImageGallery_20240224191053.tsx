import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';

interface ImageGalleryProps {
    images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    return (
        <ImageList cols={3}>
            {images.map((image) => (
                <ImageListItem key={image}>
                    <Image
                        width={5464}
                        height={8192}
                        src={image}
                        alt={image}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
