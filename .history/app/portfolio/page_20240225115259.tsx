import { Container } from '@mui/material';
import Heading from '../components/Heading';
import { getPortfolioImageData } from '@/utils/PublicUtils';
import { PortfolioUtils } from '@/utils/PortfolioUtils';

export default async function Portfolio() {
    const imageData = await PortfolioUtils.getData();

    return (
        <Container maxWidth="xl">
            <Heading>Portfolio</Heading>
        </Container>
    );
}
