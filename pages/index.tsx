import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Header from '@/components/header/header'
import About from '@/components/about/about'
import Experience from '@/components/experience/experience'
import Services from '@/components/services/services'
import Portfolio from '@/components/portfolio/portfolio'
import Testimonials from '@/components/testimonials/testimonials'
import Contact from '@/components/contact/contact'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
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
        <Contact/>

      </>
    </>
  )
}
