import { PortfolioUtils } from '@/utils/PortfolioUtils';
import Heading from '../components/Heading';
import PageContainer from '../components/PageContainer';

export default async function Portfolio() {
    const imageData = await PortfolioUtils.getData();

    return (
        <PageContainer maxWidth="xl">
            <Heading>Portfolio</Heading>
        </PageContainer>
    );
}
