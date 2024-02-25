import { Container, ContainerProps } from '@mui/material';

export default function PageContainer({
    children,
    sx,
    ...rest
}: ContainerProps) {
    return (
        <Container {...rest} sx={{ ...sx, mt: 4 }}>
            {children}
        </Container>
    );
}
