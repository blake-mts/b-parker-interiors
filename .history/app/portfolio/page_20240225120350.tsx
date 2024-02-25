import { Container } from '@mui/material';
import Heading from '../components/Heading';
import { PortfolioUtils } from '@/utils/PortfolioUtils';
import PageContainer from '../components/PageContainer';

export default async function Portfolio() {
    const imageData = await PortfolioUtils.getData();

    return (
        <PageContainer maxWidth="xl">
            <Heading>Portfolio</Heading>
        </PageContainer>
    );
}
