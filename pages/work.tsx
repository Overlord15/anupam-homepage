import React from 'react'
import { Container, Box, Image, Badge, Text, Center, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Nextlink from 'next/link'
import Bge from '../components/badge'

const Work = () => {
  return (
    <>
      <Head>

      </Head>

      <Navbar />

      <Container pt="100">

        <Center>

          <Nextlink passHref scroll={false} href="/work/anupam-homepage">
            <Box maxW='250px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Image src="https://bit.ly/2Z4KKcF" alt="Rear view of modern home with pool" />
              <Box p='4'>
                <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
                  {''}<Text color="pink.500">Anupam Homepage</Text> Portfolio Website.
                </Box>
                <Heading color="teal.300" fontWeight="400" fontSize="17<px">Frameworks and languages</Heading>
                <Box pt="2" alignItems='baseline'>
                  <Bge mt={1} ml={0}>Next js 13</Bge><Bge mt={1} ml={1}>chakra ui</Bge><Bge mt={1} ml={0}>javascript</Bge><Bge ml={1} mt={1}>react</Bge>
                </Box>
              </Box>
            </Box>
          </Nextlink>

        </Center>

      </Container>
    </>
  )
}

export default Work