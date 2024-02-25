import { Container } from '@mui/material';
import Heading from '../components/Heading';
import { getPortfolioImageData } from '@/utils/PublicUtils';

export default async function Portfolio() {
    const images = await getPortfolioImageData('portfolio');

    console.log(images);

    return (
        <Container maxWidth="xl">
            <Heading>Portfolio</Heading>
        </Container>
    );
}
