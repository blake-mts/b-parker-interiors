import { CENTER, FILL } from '@/constants/styles.constants';
import { Box } from '@mui/material';
import Image from 'next/image';
import homeLogo from '@/public/images/Home Page Logo.png';
import { RESPONSIVE_IMAGE } from '@/constants/image.constants';

export default function Brand() {
    return (
        <Box sx={{ ...FILL, ...CENTER, position: 'absolute', px: 4 }}>
            <Image
                priority
                alt="home logo"
                src={homeLogo}
                style={{ ...RESPONSIVE_IMAGE, maxWidth: 638 }}
            />
        </Box>
    );
}
