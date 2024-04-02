'use client';

import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import { useSmallScreen } from '../../hooks/useSmallScreen';

import image1 from '@/public/images/portfolio/3-IMG_6011.jpg';
import image2 from '@/public/images/portfolio/5-IMG_6014.jpg';
import image3 from '@/public/images/portfolio/8-IMG_6017.jpg';
import image4 from '@/public/images/portfolio/10-IMG_6021.jpg';
import image5 from '@/public/images/portfolio/12-IMG_6025.jpg';
import image6 from '@/public/images/portfolio/14-IMG_6030.jpg';
import image7 from '@/public/images/portfolio/16-IMG_6035.jpg';
import image8 from '@/public/images/portfolio/19-IMG_6046.jpg';
import image9 from '@/public/images/portfolio/30-IMG_6075.jpg';
import image10 from '@/public/images/portfolio/35-IMG_6091.jpg';
import image11 from '@/public/images/portfolio/42-IMG_6121.jpg';
import image12 from '@/public/images/portfolio/45-IMG_6125.jpg';
import image13 from '@/public/images/portfolio/50-IMG_6139.jpg';
import image14 from '@/public/images/portfolio/62-IMG_6168.jpg';
import image15 from '@/public/images/portfolio/71-IMG_6245.jpg';
import image16 from '@/public/images/portfolio/72-IMG_6246.jpg';
import image17 from '@/public/images/portfolio/78-IMG_6185.jpg';
import image18 from '@/public/images/portfolio/80-IMG_6193.jpg';
import image19 from '@/public/images/portfolio/82-IMG_6196.jpg';
import image20 from '@/public/images/portfolio/89-IMG_6208.jpg';
import image21 from '@/public/images/portfolio/93-IMG_6215.jpg';
import image22 from '@/public/images/portfolio/97-IMG_6222.jpg';
import image23 from '@/public/images/portfolio/100-IMG_6228.jpg';
import image24 from '@/public/images/portfolio/102-IMG_6232.jpg';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
];

export default function ImageGallery() {
    const small = useSmallScreen();

    return (
        <>
            <ImageList sx={{ width: '100%' }} cols={small ? 2 : 3}>
                {images.map((image, index) => (
                    <ImageListItem key={`image-${index}`}>
                        <Image
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                            }}
                            placeholder="blur"
                            sizes="33vw, 50vw, 100vw"
                            src={image}
                            alt="home interior"
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}
