import Head from 'next/head'
// import Nextlink from 'next/link'
import { Button, Text, Center, Box, Container, Flex, Heading, Link, Spacer, useMediaQuery, useColorModeValue, Image } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import styled from '@emotion/styled'
import Section from '../components/Section'
import Navbar from '../components/Navbar'
import BackToTopButton from '../components/scrollbtn';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  font-weight: 400;
//   font-family: 'M PLUS Rounded 1c', sans-serif;
  padding-bottom: 10px;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
  font-weight: 400;
`

const Home = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
    return (
        <>
            <Head>
                <title>Anupam Kumar Khamrai - Homepage</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
                <link rel="shortcut icon" href="/favicon.png" />
                <meta name="description" content="Greeting there ! My name is Anupam Kumar Khamrai. I am a indie developer. Welcome to my portfolio website ! ❤️" />
                <meta name="keywords" content="anupam, kumar, khamrai, portfolio, indie, developer" />
                <meta name="author" content="Anupam Kumar Khamrai"/>
            </Head>
            <Navbar />
            <Container pt="100">
                <Section delay={0.1}>
                    <Box fontSize="15px" fontWeight="semibold" border="lg" mb="12" p="3" textAlign="center" borderRadius="8px" bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.200')} style={{ backdropFilter: 'blur(10px)' }}>
                        Hello there, I&apos;m Anupam an Indie Developer based in India.
                    </Box>
                    <div>
                        {isLargerThan650 &&
                            <p>
                                <Flex>
                                    <Box ml="2" pt="5">
                                        <Heading fontFamily="'M PLUS Rounded 1c', sans-serif;">
                                            Anupam Kumar Khamrai
                                        </Heading>
                                        <p><Text fontWeight="semibold" pt="3" fontSize="15px">( Developer / Photographer / Digital Content Creator )</Text></p>
                                    </Box>
                                    <Spacer></Spacer>
                                    <Image border="2px" mt="8" mr="5" borderRadius='full' boxSize='130px' src='anupam.png' alt='Anupam Kumar Khamrai Image Social' ml="6" />
                                </Flex>
                            </p>
                        }
                    </div>
                    <div>
                        {isLargerThan6502 &&
                            <p>
                                <Center>
                                    <Heading textAlign="center">
                                        Anupam Kumar Khamrai
                                    </Heading>
                                </Center>
                                <Center>
                                    <p><Text fontWeight="semibold" pt="3" fontSize="inherit" textAlign="center">( Developer / Photographer / Digital Content Creator )</Text></p>
                                </Center>
                                <Center mt="8">
                                    <Image border="2px" borderRadius='full' boxSize='150px' src='anupam.png' objectFit="cover" loading='eager' alt='Anupam Kumar Khamrai Image Social' />
                                </Center>
                            </p>
                        }
                    </div>
                </Section>
                <Section delay={0.3}>
                    <Flex mt="12">
                        <Text pl="2" style={{ fontSize: 20, fontWeight: "bold", lineHeight: 1, marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                            Work
                        </Text>
                    </Flex>
                    <Text fontWeight={400} fontSize="16px" ml="2" mr="2" mt="3" textAlign="justify">
                        &nbsp;&nbsp;My name is Anupam, a BCA student with an interest in web development and automation. I love bringing ideas to life and experimenting with new tools to create efficient applications. Photography and video editing are also passions of mine. I enjoy capturing unique images and telling stories through my edited videos. I am also an anime enthusiast and enjoy watching different genres of anime and manga.
                    </Text>
                </Section>
                <Section delay={0.5}>
                    <Flex mt="12">
                        <Text pl="2" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif", fontSize: 20, fontWeight: "bold", lineHeight: 1, marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                            Bio
                        </Text>
                    </Flex>
                    <Box ml="2" pb="3" mt="3">
                        <BioSection>
                            <BioYear>2003</BioYear>
                            Born in Kharagpur ( খড়গপুর ), India.
                        </BioSection>
                        <BioSection>
                            <BioYear>2020</BioYear>
                            Completed secondary education from Kharagpur Atulmoni Polytechnic High School (খড়গপুর অতুলমনি পলিটেকনিক হাই স্কুল).
                        </BioSection>
                        <BioSection>
                            <BioYear>2020 to present</BioYear>
                            Pursuing BCA at Midnapore College Autonomous ( মেদিনীপুর কলেজ অটোনমাস ) and freelancing.
                        </BioSection>
                    </Box>
                </Section>
                <Section delay={0.7}>
                    <Flex>
                        <Text pl="2" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif", fontSize: 20, fontWeight: "bold", lineHeight: 1, marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                            <Flex>I <Text textColor="pink.300">&nbsp;♥</Text></Flex>
                        </Text>
                    </Flex>
                    <Text pl="2" mt="3" fontWeight="semibold">
                        &nbsp;&nbsp;&nbsp;Art, Music, Drawing, Crafting,{' '}<Link textDecoration="none" color="pink.300" _hover={{ textDecoration: "underline", color: "pink.300", textUnderlineOffset: 3 }}>Photography</Link>.
                    </Text>
                </Section>
                <Section delay={0.9}>
                    <Flex mt="12" mb="2">
                        <Text pl="2" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif", fontSize: 20, fontWeight: "bold", lineHeight: 1, marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                            On the web
                        </Text>
                    </Flex>
                    <Flex flexDirection="column" alignItems="baseline">
                        <Button variant="ghost" color="teal.300" ><FaTwitter /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://twitter.com/1Khamrai' isExternal>@1Khamrai</Link></Button>
                        <Button variant="ghost" color="teal.300" ><FaFacebook /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://www.facebook.com/anupam.khamrai.3' isExternal>@AnupamKhamrai</Link></Button>
                        <Button variant="ghost" color="teal.300" ><FaInstagram /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://www.instagram.com/otaku_anupam_k/' isExternal>@otaku_anupam_k</Link></Button>
                    </Flex>
                </Section>
                {/* <Section delay={1.1}>
                    <Section delay={1.2}>
                        <Center>
                            <Button mt="7" bg={isDark ? "teal.300" : "purple.300"} color={isDark ? "black" : "white"} >
                                <Link href='/doc/ArpitaRaniKhamraiCV.pdf' download textAlign="center" textDecoration="none" _hover={{ textDecoration: "none", }}>Download My CV</Link>
                            </Button>
                        </Center>
                    </Section>
                </Section> */}
                <Footer />
            </Container>
            {/* <BackToTopButton /> */}
        </>
    )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })
