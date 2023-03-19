import SEO from '@bradgarropy/next-seo'
import '@/styles/globals.css'
import '@/components/navbar/navbar.css'
import '@/components/header/header.css'
import '@/components/about/about.css'
import '@/components/experience/experience.css'
import '@/components/services/services.css'
import '@/components/portfolio/portfolio.css'
import '@/components/testimonials/testimonials.css'
import '@/components/contact/contact.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
          <SEO
            title="Raed Elmajdoub"
            description="As a Full Stack JavaScript/TypeScript and AWS DevOps developer, I specialize in building scalable applications using React, Node.js, and AWS services."
            keywords={["raed elmajdoub", "elmajdoub", "portfolio", "raed", "elmajdoub.live"]}
            icon="/favicon.ico"
            themeColor="#000000"
            colorScheme="light"
            facebook={{
                image: "/facebook.png",
                url: "raed elmajdoub",
                type: "website",
            }}
            twitter={{
                image: "/twitter.png",
                site: "raed elmajdoub",
                card: "summary",
            }}
        />

        <Component {...pageProps} />
  </>
}
