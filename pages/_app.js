import Layout from '@/pages/components/Layout'
import theme from '@/utils/theme'
import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material'


export default function App({ Component, pageProps }) {
  return <>

    <ThemeProvider theme={theme}>
      <Layout><Component {...pageProps} /></Layout>
    </ThemeProvider>
  </>
}
