import { PAGES } from '@/constants/pages.constants';
import Heading from '../components/Heading';
import PageContainer from '../components/PageContainer';

export default function Contact() {
    return (
        <PageContainer>
            <Heading>{PAGES.contact.title}</Heading>
        </PageContainer>
    );
}
