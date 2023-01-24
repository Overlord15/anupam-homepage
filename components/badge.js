import React from "react"
import { Badge } from '@chakra-ui/react'

const Bge = ({ children, ml, mt }) => (
    <Badge ml={ml} mt={mt} borderRadius='5' py='1' px='2' colorScheme='blue'>
        {children}
    </Badge>
)



export default Bge