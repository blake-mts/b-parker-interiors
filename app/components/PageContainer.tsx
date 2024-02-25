import { Container, ContainerProps } from '@mui/material';

export default function PageContainer({
    children,
    sx,
    ...rest
}: ContainerProps) {
    return (
        <Container {...rest} sx={{ mt: 4, ...sx }}>
            {children}
        </Container>
    );
}
