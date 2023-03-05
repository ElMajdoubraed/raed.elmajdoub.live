import '@/styles/globals.css'
import '@/components/home/home.css'
import '@/components/navbar/navbar.css'
import '@/components/header/header.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
