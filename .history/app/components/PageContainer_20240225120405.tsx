import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function PageContainer({ children }: PropsWithChildren) {
    return <Container sx={{ mt: 3 }}>{children}</Container>;
}
