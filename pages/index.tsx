import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Header from '@/components/header/header'
import About from '@/components/about/about'
import Experience from '@/components/experience/experience'
import Services from '@/components/services/services'
import Portfolio from '@/components/portfolio/portfolio'
import Testimonials from '@/components/testimonials/testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Head>
        <title>Raed elmajdoub prortfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet dns-prefetch"/>
        <script type="text/javascript" src="https://app.getbeamer.com/js/beamer-embed.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      <>
        <Header/>
        <Navbar/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
      </>
    </>
  )
}
