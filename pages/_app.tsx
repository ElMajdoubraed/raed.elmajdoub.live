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
import Script from 'next/script'
import dynamic from 'next/dynamic'

export default function App({ Component, pageProps }: AppProps) {
  const PwaUpdater = dynamic(() => import('../public/PwaUpdater'), { ssr: false });
  return <>
          <SEO
            title="Raed Elmajdoub - FullStack JavaScript/TypeScript"
            description="As a Full Stack JavaScript/TypeScript and AWS DevOps developer, I specialize in building scalable applications using React, Node.js, and AWS services."
            keywords={["raed elmajdoub", "elmajdoub", "portfolio", "raed", "elmajdoub.live", "majdoub", "raed majdoub"]}
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
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9791911760978265"/>
        <Script src='https://cdnjs.cloudflare.com/ajax/libs/script.js/2.0.2/script.min.js'/>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1XSLL064K5"/>
        <Script id='google-analytics' strategy="afterInteractive"
           dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-1XSLL064K5', {
                  page_path: window.location.pathname,
                });
              `,
            }}
        />
        <PwaUpdater/>
        <Component {...pageProps} />
  </>
}
