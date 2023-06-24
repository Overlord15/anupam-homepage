import { Badge, Box, Container, Flex, Image, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/Navbar'
import Nextlink from 'next/link'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import dynamic from 'next/dynamic';
import Footer from '../../components/Footer'
import Section from '../../components/Section'
import Head from 'next/head'

const anupam_homepage = () => {
    return (
        <>
            <Head>
                <title>
                    Anupam Kumar Khamrai - Works | anupam-homepage
                </title>
                <link rel="apple-touch-icon" sizes="180x180" href="https://anupam-homepage.vercel.app/favicon.png" />
                <link rel="shortcut icon" href="https://anupam-homepage.vercel.app/favicon.png" />
                <meta name="description" content="Anupam Khamrai Homepage is my own work and as well as my portfolio website created using Next JS and Chakra UI. 😊" />
                <meta name="keywords" content="Anupam, Khamrai, Homepage, Next, JS, Chakra, UI, portfolio" />
                <meta name="author" content="Anupam Kumar Khamrai" />

                <meta property="og:url" content="https://anupam-homepage.vercel.app/work/anupam-homepage" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Anupam Kumar Khamrai - Works | anupam-homepage" />
                <meta property="og:description" content="Anupam Khamrai Homepage is my own work and as well as my portfolio website created using Next JS and Chakra UI. 😊" />
                <meta property="og:image" content="https://anupam-homepage.vercel.app/favicon.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Anupam Kumar Khamrai - Works | anupam-homepage" />
                <meta name="twitter:description" content="Anupam Khamrai Homepage is my own work and as well as my portfolio website created using Next JS and Chakra UI. 😊" />
                <meta name="twitter:image" content="https://anupam-homepage.vercel.app/favicon.png" />
                <meta name="twitter:site" content="@anupam-homepage" />
                <meta name="twitter:creator" content="@1Khamrai" />
            </Head>
            <Container pt="100">
                <Section delay={0.2}>
                    <Text>
                        <Text pb={15} fontSize={20} fontWeight={600} display="inline-flex" mr="2">
                            <Nextlink href="../work"><Text _hover={{ textDecoration: "underline" }} color="pink.300">Works</Text></Nextlink>
                            <ChevronRightIcon boxSize={25} pt="2" /> Anupam Khamrai Homepage
                        </Text>
                        <Badge variant={"subtle"} borderRadius={5} py='2px' px='5px' fontSize={12} colorScheme={"pink"} mb="1">2023</Badge>
                    </Text>
                </Section>
                <Section delay={0.4}>
                    <Text mb="4" textAlign="justify" maxW="inherit">&nbsp;&nbsp;&nbsp;Anupam-Homepage is a portfolio website designed using Next.js and Chakra UI. This website showcases the professional skills and experience of Anupam in a visually appealing and user-friendly manner. With Next.js, the site is built with high performance and optimized for fast loading.
                    </Text>
                </Section>
                <Section delay={0.6}>
                    <Box>
                        <List>
                            <ListItem mb="4">
                                <Badge mr="2" mb="2" colorScheme={"whatsapp"} borderRadius={3} px="1.5" py="1">STACK</Badge><span>NextJS 13, Chakra-UI, React, Mongo DB, NodeJS, Express.</span>
                            </ListItem>
                            <ListItem>
                                <Badge mr="2" mb="2" colorScheme={"whatsapp"} borderRadius={3} px="1.5" py="1">PLATFORM</Badge><span>Web.</span>
                            </ListItem>
                        </List>
                    </Box>
                </Section>
                <Section delay={0.8}>
                    <Image border="2px" borderRadius={15} src="/anupam-khamrai-homepage.png" alt="anupam-khamrai-homepage" mt="5" />
                </Section>
            </Container>
        </>
    )
}

export default dynamic(() => Promise.resolve(anupam_homepage), { ssr: false })