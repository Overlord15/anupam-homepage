import React from 'react'
import { Container, Box, Image, useMediaQuery, Text, Center, Heading, Link } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Nextlink from 'next/link'
import Bge from '../components/badge'
import Section from '../components/Section'
import Footer from '../components/Footer'

const Work = () => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
  const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
  return (
    <>
      <Head>
        <title>Anupam Kumar Khamrai - Works</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <Navbar />

      <Container pt="100">
        <Section delay={0.2}>
          <Text pb={15} fontSize={20} fontWeight={600}>Works</Text>
        </Section>
        <Section delay={0.4}>
          {isLargerThan650 &&
            <p>
              <Center>

                <Nextlink passHref scroll={false} href="/work/anupam-homepage">
                  <Link href="/work/anupam-homepage" _hover={{ textDecoration: "none" }}>
                    <Box maxW='350px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                      <Image src="anupam-khamrai-homepage.png" alt="Anupam Homepage" loading='eager' />
                      <Box p='4'>
                        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
                          {''}<Text color="pink.500">Anupam Homepage</Text> Portfolio Website.
                        </Box>
                        <Heading color="teal.300" fontWeight="400" fontSize="17<px">Frameworks and languages</Heading>
                        <Box pt="2" alignItems='baseline'>
                          <Bge mt={1} mr={1}>Next js 13</Bge><Bge mt={1} mr={1}>chakra ui</Bge><Bge mt={1} mr={1}>javascript</Bge><Bge mr={1} mt={1}>react</Bge>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Nextlink>

              </Center>
            </p>
          }

          {isLargerThan6502 &&
            <p>
              <Center>

                <Nextlink passHref scroll={false} href="/work/anupam-homepage">
                  <Link href="/work/anupam-homepage" _hover={{ textDecoration: "none" }}>
                    <Box maxW='350px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                      <Image src="anupam-khamrai-homepage.png" alt="Anupam Homepage" loading='eager' />
                      <Box p='4'>
                        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
                          {''}<Text color="pink.500">Anupam Homepage</Text> Portfolio Website.
                        </Box>
                        <Heading color="teal.300" fontWeight="400" fontSize="17<px">Frameworks and languages</Heading>
                        <Box pt="2" alignItems='baseline'>
                          <Bge mt={1} mr={1}>Next js 13</Bge><Bge mt={1} mr={1}>chakra ui</Bge><Bge mt={1} mr={1}>javascript</Bge><Bge mr={1} mt={1}>react</Bge>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Nextlink>

              </Center>
            </p>
          }
        </Section>
        <Footer />
      </Container>
    </>
  )
}

export default Work