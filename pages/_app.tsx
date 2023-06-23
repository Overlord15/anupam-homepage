import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { ChakraProvider } from '@chakra-ui/react'
import { Dict } from '@chakra-ui/utils'
import Font from '../components/Font'
import Layout from '../components/layout/Layout'

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



const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Font />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
