import Head from 'next/head'
// import Nextlink from 'next/link'
import { Button, Text, Center, Box, Container, Flex, Heading, Link, Spacer, useMediaQuery, useColorModeValue, Image } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import styled from '@emotion/styled'
import Section from '../components/Section'
import Navbar from '../components/Navbar'
import BackToTopButton from '../components/scrollbtn';
import { M_PLUS_Rounded_1c } from '@next/font/google'

const mplus = M_PLUS_Rounded_1c({
    subsets: ['latin'],
    weight: '400',
})

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  font-weight: bold;
  padding-bottom: 10px;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

export default function Home() {
    
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
            </Head>
            <Navbar />
            <Container pt="100">
                <Section delay={0.1}>
                    <Box fontSize="15px" fontWeight="semibold" border="lg" mb="6" p="3" textAlign="center" borderRadius="8px" bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.200')} style={{ backdropFilter: 'blur(10px)' }}>
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
                                    <Image border="2px" mt="8" mr="5" borderRadius='full' boxSize='130px' src='/anupam.png' alt='Anupam Kumar' ml="6" />
                                </Flex>
                            </p>
                        }
                    </div>
                    <div>
                        {isLargerThan6502 &&
                            <p>
                                <Center>
                                    <Heading textAlign="center" className={mplus.className}>
                                        Anupam Kumar Khamrai
                                    </Heading>
                                </Center>
                                <Center>
                                    <p><Text fontWeight="semibold" pt="3" fontSize="inherit" textAlign="center">( Developer / Photographer / Digital Content Creator )</Text></p>
                                </Center>
                                <Center mt="8">
                                    <Image border="2px" borderRadius='full' boxSize='150px' src='/anupam.png' objectFit="cover" alt='Anupam Kumar' />
                                </Center>
                            </p>
                        }
                    </div>
                </Section>
                <Section delay={0.3}>
                    <Flex mt="6">
                        <Text pl="2" style={{ fontSize: 20, fontWeight: "bold", lineHeight: 1, marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                            Work
                        </Text>
                    </Flex>
                    <Text fontWeight={400} fontSize="16px" ml="2" mr="2" mt="3" textAlign="justify">
                        &nbsp;&nbsp;Arpita is a State Aided College Teacher Grade 2 in Raja Narendra Lal Khan Women&apos;s College Autonomous and a budding young researcher in the Microbiology and Biochemistry field. She has also received a number of national and international recognitions based on her research activities along with her publications. She knows a number of laboratory techniques including statistical analysis and computer framework. She also has a knack for exploring new lab techniques along with offline activities like photography, detective story reading and crafting.
                    </Text>
                </Section>
                <Section delay={0.5}>
                    <Flex mt="8">
                        <Text pl="2" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif", fontSize: 20, fontWeight: "bold", lineHeight: 1, marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                            Bio
                        </Text>
                    </Flex>
                    <Box ml="2" pb="3" mt="3">
                        <BioSection>
                            <BioYear>1996</BioYear>
                            Born in West Bengal ( পশ্চিম মেদিনীপুর ), India.
                        </BioSection>
                        <BioSection>
                            <BioYear>2013</BioYear>
                            Completed secondary education from S.E RAILWAY GIRLS HIGHER SECONDARY SCHOOL ( এসই রেলওয়ে বালিকা উচ্চ মাধ্যমিক বিদ্যালয় ).
                        </BioSection>
                        <BioSection>
                            <BioYear>2016</BioYear>
                            Completed BACHELOR IN PHYSIOLOGY from RAJA NARENDRALAL KHAN WOMENS COLLEGE ( রাজা নরেন্দ্রলাল খান মহিলা কলেজ ).
                        </BioSection>
                        <BioSection>
                            <BioYear>2018</BioYear>
                            Completed MASTERS IN HUMAN PHYSIOLOGY WITH COMMUNITY HEALTH from VIDYASAGAR UNIVERSITY ( বিদ্যাসাগর বিশ্ববিদ্যালয় ).
                        </BioSection>
                        <BioSection>
                            <BioYear>2019 to present</BioYear>
                            Studying and reseraching as Research Scholar in Physiology at RAJA NARENDRALAL KHAN WOMENS COLLEGE ( রাজা নরেন্দ্রলাল খান মহিলা কলেজ ).
                        </BioSection>
                    </Box>
                </Section>
                <Section delay={0.7}>
                    <Flex>
                        <Text pl="2" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif", fontSize: 20, fontWeight: "bold", lineHeight: 1, marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                            I ♥
                        </Text>
                    </Flex>
                    <Text pl="2" mt="3" fontWeight="semibold">
                        &nbsp;&nbsp;&nbsp;Art, Music, Drawing, Crafting,{' '}<Link textDecoration="none" color="pink.300" _hover={{ textDecoration: "underline", color: "pink.300", textUnderlineOffset: 3 }}>Photography</Link>, Making vlog videos, Cooking.
                    </Text>
                </Section>
                <Section delay={0.9}>
                    <Flex mt="8" mb="1">
                        <Text pl="2" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif", fontSize: 20, fontWeight: "bold", lineHeight: 1, marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                            On the web
                        </Text>
                    </Flex>
                    <Flex flexDirection="column" alignItems="baseline">
                        <Button variant="ghost" color="teal.300" ><FaTwitter /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://twitter.com/rani_arpita' isExternal>@rani_arpita</Link></Button>
                        <Button variant="ghost" color="teal.300" ><FaFacebook /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://www.facebook.com/ark.a.arpita.anupam' isExternal>@ArpitaKhamraiKhan</Link></Button>
                        <Button variant="ghost" color="teal.300" ><FaInstagram /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://www.instagram.com/mrs_rani_ariprava/' isExternal>@mrs_rani_ariprava</Link></Button>
                    </Flex>
                </Section>
                <Section delay={1.1}>
                    <Section delay={1.2}>
                        <Center>
                            <Button mt="7" bg={isDark ? "teal.300" : "purple.300"} color={isDark ? "black" : "white"} >
                                <Link href='/doc/ArpitaRaniKhamraiCV.pdf' download textAlign="center" textDecoration="none" _hover={{ textDecoration: "none", }}>Download My CV</Link>
                            </Button>
                        </Center>
                    </Section>
                </Section>
                <div>
                    {isLargerThan650 &&
                        <p>
                            <Box maxW="100%" h="30px" pb="1" pt="8" mb="6"><Text textAlign="center" fontSize="15px" fontWeight="medium" fontFamily="'M PLUS Rounded 1c', sans-serif">© 2022 Arpita Rani Khamrai Khan. All Rights Reserved.</Text></Box>
                        </p>
                    }
                </div>
                <div>
                    {isLargerThan6502 &&
                        <p>
                            <Box maxW="100%" h="30px" pb="10" pt="8" mb="6"><Text textAlign="center" fontSize="15px" fontWeight="medium" fontFamily="'M PLUS Rounded 1c', sans-serif">© 2022 Arpita Rani Khamrai Khan. All Rights Reserved.</Text></Box>
                        </p>
                    }
                </div>
            </Container>
            <BackToTopButton />
        </>
    )
}