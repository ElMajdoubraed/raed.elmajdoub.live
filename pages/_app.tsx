import '@/styles/globals.css'
import '@/components/navbar/navbar.css'
import '@/components/header/header.css'
import '@/components/about/about.css'
import '@/components/experience/experience.css'
import '@/components/services/services.css'
import '@/components/portfolio/portfolio.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
