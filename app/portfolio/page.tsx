import { ImageDataBuilder } from '@/utils/ImageDataBuilder';
import Heading from '../../components/Heading';
import PageContainer from '../../components/PageContainer';
import ImageGallery from './ImageGallery';
import { PAGE, PAGES } from '@/constants/pages.constants';

const portfolioImageDataBuilder = new ImageDataBuilder(PAGE.portfolio);

export default async function Portfolio() {
    const imageData = await portfolioImageDataBuilder.getData();

    return (
        <PageContainer maxWidth="xl">
            <Heading>{PAGES.portfolio.title}</Heading>
            <ImageGallery imageData={imageData} />
        </PageContainer>
    );
}
