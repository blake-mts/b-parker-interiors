'use client';

import { Container, ContainerProps } from '@mui/material';
import { useSmallScreen } from '../../hooks/useSmallScreen';

export default function PageContainer({
    children,
    sx,
    ...rest
}: ContainerProps) {
    const small = useSmallScreen();
    return (
        <Container {...rest} sx={{ my: small ? 4 : 8, minHeight: 0, ...sx }}>
            {children}
        </Container>
    );
}
