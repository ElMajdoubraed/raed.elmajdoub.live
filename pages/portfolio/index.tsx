import Portfolio from "@/components/portfolio/portfolio";
import Head from "next/head";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Raed Elmajdoub | Portfolio</title>
        <meta
          name="description"
          content="Full Stack JavaScript/TypeScript and AWS DevOps developer - Portfolio"
        />
        <meta name="keywords" content="Raed Elmajdoub, Portfolio" />
      </Head>
      <Portfolio />
    </>
  );
}
