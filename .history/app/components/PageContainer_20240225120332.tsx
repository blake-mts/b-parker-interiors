import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function PageContainer({ children }: PropsWithChildren) {
    return <Container>{children}</Container>;
}
