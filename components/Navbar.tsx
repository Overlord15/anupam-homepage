import Head from 'next/head'
import Nextlink from 'next/link'
import { Box, Flex, IconButton, Link, Spacer, useMediaQuery, Menu, MenuButton, MenuList, MenuItem, useColorModeValue, Text, Container } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaGripLines } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { GiRabbit } from 'react-icons/gi'
import ThemeToggleButton from './Theme-toggler-button';


export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
    return (
        <>
            <Head>
                <title>Anupam Khamrai - Homepage</title>
                <link rel="apple-touch-icon" sizes="180x180" href="favicon.png" />
                <link rel="shortcut icon" href="favicon.png" />
            </Head>
            <Box as="nav" position="fixed" zIndex={1} backdropFilter="auto" backdropBlur="8px" w="100%" pt="2" pb="2">
                <Container maxW="container.md" display="flex" alignItems="center" w="100%">

                    <Nextlink href="/" passHref scroll={false}>
                        <Link alignItems="center" fontFamily="'M PLUS Rounded 1c', sans-serif;" display="flex" as="button" cursor="pointer" fontSize="18.5" p="5px" textDecoration="none" href='/' _hover={{ textDecoration: "none" }}>
                            <GiRabbit style={{ rotate: '-30deg', marginRight: '5'}} className="rabbit"/>&nbsp;Anupam Khamrai
                        </Link>
                    </Nextlink>
                    <div>
                        {isLargerThan650 &&
                            <p>
                                <Flex alignItems="center">
                                    <Nextlink href="../work" passHref scroll={false}>
                                        <Link pl="5px" pr="5px" size="sm" ml="7" border="2px" borderColor="transparent" _hover={{ color: "red.500", textDecoration: "underline", }} fontWeight="400">Works</Link>
                                    </Nextlink>
                                    <Nextlink href="../home/post" passHref scroll={false}>
                                        <Link pl="5px" pr="5px" ml="5" mt="10px" size="sm" border="2px" borderColor="transparent" _hover={{ color: "green.500", textDecoration: "underline", }} fontWeight="400" href="../work">Post</Link>
                                    </Nextlink>
                                    <Box ml="5" mr=""><VscGithub /></Box>
                                    <Link ml="6px" href='https://github.com/Overlord15/shironeko-homepage' size="sm" _hover={{ color: "pink.500", textDecoration: "underline", }} fontWeight="400">Source</Link>
                                </Flex>
                            </p>
                        }
                    </div>
                    <Spacer></Spacer>
                    <ThemeToggleButton />
                    <div>
                        {isLargerThan6502 &&
                            <p>
                                <Menu>
                                    <MenuButton as={IconButton} icon={<FaGripLines />} size="sm" mt="2" ml="2" bg={isDark ? "blue.400" : "purple.300"}>
                                    </MenuButton>
                                    <MenuList>
                                        <Nextlink href="../work" passHref>
                                            <MenuItem as='button'><Text fontWeight="600">Works</Text></MenuItem>
                                        </Nextlink>
                                        <Nextlink href="../home/post" passHref>
                                            <MenuItem as='button'><Text fontWeight="600">Post</Text></MenuItem>
                                        </Nextlink>
                                        <MenuItem as='button'><Link justifyContent="center" isExternal href="https://github.com/Overlord15/shironeko-homepage" textDecoration="none"><Text fontWeight="600">Source</Text></Link></MenuItem>
                                    </MenuList>
                                </Menu>
                            </p>}
                    </div>
                </Container>
            </Box>

        </>
    )
}