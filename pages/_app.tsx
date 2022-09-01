import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { ChakraProvider } from '@chakra-ui/react'
import { Dict } from '@chakra-ui/utils'
import Font from '../components/Font'

const styles = {
  global: (props: StyleFunctionProps | Dict<any>) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const fonts = {
  body: `'M PLUS Rounded 1c', sans-serif;`,
  div: "'M PLUS Rounded 1c'",
  heading: "'M PLUS Rounded 1c'",
  nav: "'M PLUS Rounded 1c'",
  p: "'M PLUS Rounded 1c'",
  a: "'M PLUS Rounded 1c'",
  Text: "'M PLUS Rounded 1c'"
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, fonts })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
