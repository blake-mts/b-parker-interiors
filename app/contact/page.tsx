import contactImage from '@/public/images/Contact Us Image.jpg';
import { Box } from '@mui/material';
import Image from 'next/image';
import PageContainer from '../components/PageContainer';
import { ContactFormProvider } from './ContactForm.context';
import EmailForm from './components/ContactForm';

export default function Contact() {
    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{ position: 'absolute', height: '100%', width: '100%' }}
                >
                    <Image
                        priority
                        src={contactImage}
                        alt="contact image"
                        sizes="100vw"
                        fill
                    />
                </Box>
                <PageContainer
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        flexGrow: 1,
                        alignItems: 'center',
                    }}
                >
                    <ContactFormProvider>
                        <EmailForm />
                    </ContactFormProvider>
                </PageContainer>
            </Box>
        </>
    );
}
