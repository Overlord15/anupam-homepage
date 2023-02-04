import Nextlink from 'next/link'
import { Link } from '@chakra-ui/react'
import React from 'react'

const Notfound = () => {
    return (
        <>
        <Nextlink href="/">
            <Link href="/">Requested Page Not Found. Return to homepage.</Link>
        </Nextlink>
        </>
    )
}

export default Notfound