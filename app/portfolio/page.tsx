import Heading from '../components/Heading';
import PageContainer from '../components/PageContainer';
import ImageGallery from './ImageGallery';
import { PAGES } from '@/constants/pages.constants';

export default function Portfolio() {
    return (
        <PageContainer maxWidth="xl">
            <Heading>{PAGES.portfolio.title}</Heading>
            <ImageGallery />
        </PageContainer>
    );
}
