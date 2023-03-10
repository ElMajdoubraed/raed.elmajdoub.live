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
            title="Raed Elmajdoub | elmajdoub.live"
            description="As a Full Stack JavaScript/TypeScript and AWS DevOps developer, I specialize in building scalable applications using React, Node.js, and AWS services. With expertise in front-end and back-end development,
            I deliver seamless user experiences and optimize performance. 
            My passion for problem-solving and staying up-to-date with industry trends helps me provide the best solutions to my clients.
            As a freelancer, I have the flexibility to work on projects that align with my skills and interests,
             while providing top-notch quality work to my clients."
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
