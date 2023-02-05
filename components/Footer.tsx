import { Box, useMediaQuery, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import React from 'react'


const Footer = () => {
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
    return (
        <>
            <div>
                {isLargerThan650 &&
                    <p>
                        <Box maxW="100%" h="30px" pb="1" pt="8" mb="12"><Text textAlign="center" fontSize="14px" fontWeight="600" color={"#5D5D5F"}>© 2023 Anupam Kumar Khamrai. All Rights Reserved.</Text></Box>
                    </p>
                }
            </div>
            <div>
                {isLargerThan6502 &&
                    <p>
                        <Box maxW="100%" h="30px" pb="10" pt="8" mb="6"><Text textAlign="center" fontSize="14px" fontWeight="600" color={"#5D5D5F"}>© 2023 Anupam Kumar Khamrai. All Rights Reserved.</Text></Box>
                    </p>
                }
            </div>
        </>
    )
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false })