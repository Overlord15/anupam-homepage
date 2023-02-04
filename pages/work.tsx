import React from 'react'
import { Container, Box, Image, useMediaQuery, Text, Center, Heading, Link } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Nextlink from 'next/link'
import Bge from '../components/badge'
import Section from '../components/Section'

const Work = () => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
  const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
  return (
    <>
      <Head>

      </Head>

      <Navbar />

      <Container pt="100">

        <Text pb={15} fontSize={20} fontWeight={600}>Works</Text>

        {isLargerThan650 &&
          <p>
            <Center>

              <Nextlink passHref scroll={false} href="/work/anupam-homepage">
                <Link href="/work/anupam-homepage" _hover={{textDecoration: "none"}}>
                  <Box maxW='350px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src="anupam-khamrai-homepage.png" alt="Rear view of modern home with pool" />
                    <Box p='4'>
                      <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
                        {''}<Text color="pink.500">Anupam Homepage</Text> Portfolio Website.
                      </Box>
                      <Heading color="teal.300" fontWeight="400" fontSize="17<px">Frameworks and languages</Heading>
                      <Box pt="2" alignItems='baseline'>
                        <Bge mt={1} ml={0}>Next js 13</Bge><Bge mt={1} ml={1}>chakra ui</Bge><Bge mt={1} ml={1}>javascript</Bge><Bge ml={1} mt={1}>react</Bge>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </Nextlink>

            </Center>
          </p>
        }

      </Container>
    </>
  )
}

export default Work