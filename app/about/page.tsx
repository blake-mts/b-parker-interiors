import { PAGES } from '@/constants/pages.constants';
import image1 from '@/public/images/home/Home Page 3.jpg';
import image2 from '@/public/images/TeamPhoto.jpg';
import { Link, Typography } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import Heading from '../components/Heading';
import PageContainer from '../components/PageContainer';
import ImageContainer from './ImageContainer';
import Sections from '../components/Sections';

export default function About() {
    return (
        <PageContainer>
            <Heading>{PAGES.about.title}</Heading>
            <Typography sx={{ mb: 2 }}>
                B. Parker Interiors is a full-service residential build and
                design firm that assists clients in custom home building,
                remodels, and decorating a functional beautiful space with
                furniture, fabrics, and accessories.
            </Typography>
            <Typography>
                <Link
                    href={PAGES.contact.route}
                    component={NextLink}
                    sx={{ fontWeight: 500 }}
                >
                    Contact Us
                </Link>
                &nbsp;to request a consultation!
            </Typography>
            <ImageContainer>
                <Image
                    placeholder="blur"
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: 500,
                        objectFit: 'cover',
                        objectPosition: 'bottom',
                    }}
                    alt="home interior"
                    src={image1}
                />
            </ImageContainer>
            <Typography variant="h2" sx={{ mb: 2 }}>
                Services
            </Typography>
            <Typography sx={{ mb: 4 }}>
                At B. Parker Interiors we believe in meeting our clients
                wherever they might be in the creative process. The benefits of
                being a build and design team are unlimted, but the real benefit
                comes from being able to provide our clients with the service
                they need. Whether you need a builder, a designer, and/or a
                facilitator, we are committed to finding what works best for you
                and your budget.
            </Typography>
            <Sections
                data={[
                    {
                        title: <>NEW CONSTRUCTION</>,
                        body: (
                            <>
                                Starting from the ground up, we will assist you
                                every step of the way. Full collaboration and
                                effective communication between the architect,
                                designer, and builder ensures an enjoyable
                                experience for the duration of the build.
                            </>
                        ),
                    },
                    {
                        title: <>REMODELS</>,
                        body: (
                            <>
                                We are flexible when it comes to your remodel,
                                and we want you to save money where we can. Our
                                service for remodel depends on where you might
                                be in the process, what you are hoping to
                                create, and the provided budget.
                            </>
                        ),
                    },
                    {
                        title: <>FURNITURE AND ACCESSORIES</>,
                        body: (
                            <>
                                Completely custom-designed furniture to meet the
                                needs of your family and compliment your
                                beautiful home.Our exclusive designer lines
                                allow us to curate a one-of-a-kind look at a
                                designer discount rate.
                            </>
                        ),
                    },
                ]}
            />
            <ImageContainer>
                <Image
                    placeholder="blur"
                    src={image2}
                    sizes="100vw"
                    alt="team photo"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        objectPosition: 'center 70%',
                        maxHeight: 800,
                    }}
                />
            </ImageContainer>
            <Sections
                data={[
                    {
                        title: <>HOW IT STARTED</>,
                        body: (
                            <>
                                We both found ourselves in completely different
                                careers when we decided to be honest with each
                                other about our passion for bringing homes to
                                life!
                            </>
                        ),
                    },
                    {
                        title: <>HOW IT&apos;S GOING</>,
                        body: (
                            <>
                                We feel so lucky to be doing what we love! With
                                each project we embrace the challenge every home
                                brings with creativity and experience
                            </>
                        ),
                    },
                ]}
            />
            <Typography>We would love to work with you!</Typography>
        </PageContainer>
    );
}
