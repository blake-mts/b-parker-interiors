import { Container, ContainerProps } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function PageContainer({ children, ...rest }: ContainerProps) {
    return (
        <Container {...rest} sx={{ mt: 4 }}>
            {children}
        </Container>
    );
}
