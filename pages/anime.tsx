import React from 'react'
import Navbar from '../components/Navbar'
import { Container } from '@chakra-ui/react'

const anime = () => {
    let img = [
        { id: '1', src: 'https://anupam-homepage.vercel.app/1.jpg', title: '1one' }
    ]
    return (
        <>
            <Navbar />
            <Container pt="20">
                <div>
                    {
                        img.map((index) => <img src={index.src} alt={index.title} key={index.id}></img>)
                    }
                </div>
            </Container>
        </>
    )
}

export default anime