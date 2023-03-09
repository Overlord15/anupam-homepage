import React from 'react'
import Navbar from '../components/Navbar'
import { Container } from '@chakra-ui/react'

const anime = () => {
    let img = [
        { src: '../../public/KingsOfAvalon/1.jpg' }
    ]
    return (
        <>
            <Navbar />
            <Container pt="20">
                <div>
                    {
                        img.map((index) => <img src={index.src}></img>)
                    }
                </div>
            </Container>
        </>
    )
}

export default anime