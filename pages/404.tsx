import Nextlink from 'next/link'
import { Container, Text, Link, IconButton, Center, Image } from '@chakra-ui/react'
import React from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import { ImHome3 } from 'react-icons/im'
import Head from 'next/head'

const Notfound = () => {
    return (
        <>
            <Head>
                <title>Anupam Kumar Khamrai - 404</title>
                <link rel="apple-touch-icon" sizes="180x180" href="https://anupam-homepage.vercel.app/favicon.png" />
                <link rel="shortcut icon" href="https://anupam-homepage.vercel.app/favicon.png" />
                <meta name="description" content="Here are some of my works. Check them out ! ❤️" />
                <meta name="keywords" content="anupam, kumar, khamrai, portfolio, indie, developer, nextjs, 13, chakraui, works" />
                <meta name="author" content="Anupam Kumar Khamrai" />

                <meta property="og:url" content="https://anupam-homepage.vercel.app/work/anupam-homepage" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Anupam Kumar Khamrai - Works" />
                <meta property="og:description" content="Here are some of my works. Check them out ! ❤️" />
                <meta property="og:image" content="https://anupam-homepage.vercel.apphttps://anupam-homepage.vercel.app/favicon.png.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Anupam Kumar Khamrai - Works" />
                <meta name="twitter:description" content="Here are some of my works. Check them out ! ❤️" />
                <meta name="twitter:image" content="https://anupam-homepage.vercel.app/favicon.png" />
                <meta name="twitter:site" content="@anupam-homepage" />
                <meta name="twitter:creator" content="@1Khamrai" />
            </Head>
            <Navbar />
            <Container maxH="80" pt="100" justifyContent={"center"} alignItems={"center"}>
                <Text textAlign={"center"} >Requested Page Not Found. Click on the below home button to return.</Text>
                <Image style={{ borderRadius: "15px" }} borderRadius="full" py="20" src="/404.gif" alt="404" />
                <Nextlink href="/">
                    <Center><IconButton px="10" py="5" variant={"outline"} colorScheme={"teal"} aria-label='Home Link' icon={<ImHome3 />} /></Center>
                </Nextlink>
            </Container>
        </>
    )
}

export default dynamic(() => Promise.resolve(Notfound), { ssr: false })