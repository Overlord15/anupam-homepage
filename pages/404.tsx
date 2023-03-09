import Nextlink from 'next/link'
import { Container, Text, Link, IconButton, Center, Image } from '@chakra-ui/react'
import React from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import { ImHome3 } from 'react-icons/im'

const Notfound = () => {
    return (
        <>
            <Navbar />
            <Container maxH="80" pt="100" justifyContent={"center"} alignItems={"center"}>
                <Text textAlign={"center"} >Requested Page Not Found. Click on the below home button to return.</Text>
                <Center><Image borderRadius="15" py="20" src="/404.gif" alt="404" /></Center>
                <Nextlink href="/">
                    <Center><IconButton px="10" py="5" variant={"outline"} colorScheme={"teal"} aria-label='Home Link' icon={<ImHome3 />} /></Center>
                </Nextlink>
            </Container>
        </>
    )
}

export default dynamic(() => Promise.resolve(Notfound), { ssr: false })