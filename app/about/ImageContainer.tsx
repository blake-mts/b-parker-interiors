'use client';

import { REMOVE_IMAGE_WHITESPACE } from '@/constants/image.constants';
import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useSmallScreen } from '../../hooks/useSmallScreen';

export default function ImageContainer({ children }: PropsWithChildren) {
    const small = useSmallScreen();
    return (
        <Box
            sx={{
                border: 1,
                boxShadow: 1,
                my: small ? 4 : 8,
                ...REMOVE_IMAGE_WHITESPACE,
            }}
        >
            {children}
        </Box>
    );
}
