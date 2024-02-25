import { COLORS } from '@/constants/colors.constants';
import { PortfoiloImageData } from '@/utils/PortfolioUtils';
import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';

interface ImageGalleryProps {
    imageData: PortfoiloImageData[];
}

export default function ImageGallery({ imageData }: ImageGalleryProps) {
    return (
        <ImageList sx={{ width: '100%' }} cols={3}>
            {imageData.map((image) => (
                <ImageListItem
                    sx={{
                        border: 1,
                        boxShadow: 2,
                        borderColor: COLORS.oatmeal,
                    }}
                    key={image.path}
                >
                    <Image
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
