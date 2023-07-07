import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Header from "@/components/header/header";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Services from "@/components/services/services";
import Portfolio from "@/components/portfolio/portfolio";
//import Testimonials from '@/components/testimonials/testimonials'
import Contact from "@/components/contact/contact";
import Toast from "@/components/templates/toast/toast";
import $ from "jquery";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  var mypages: any = [];
  useEffect(() => {
    // get all your page elements
    $("section").each(function (el) {
      mypages.push({
        pagename: $(this).attr("id"),
        pagetop: $(this).offset()?.top,
      });
    });
    $(window).on("scroll", function () {
      $.each(mypages, function (i, page) {
        //console.log(i, page);
      });
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="google" content="notranslate" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=6.0, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <meta property="og:site_name" content="raed elmajdoub" />
        <meta property="og:locale" content="en" />
        <meta property="og:locale:alternate" content="en" />
        <meta
          property="og:description"
          content="As a Full Stack JavaScript/TypeScript and AWS DevOps developer, I specialize in building scalable applications using React, Node.js, and AWS services."
        />
        <meta property="og:title" content="Raed Elmajdoub" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:width" content="256" />
        <meta property="og:url" content="https://elmajdoub.live" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://avatars.hsoubcdn.com/cd06dde7022c6f09207822d4c27cc128?s=128"
        />
      </Head>
      <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Services />
        <Portfolio />

        {/*
          <Portfolio/>
          <Testimonials/>
        */}

        <Contact />
      </>
    </>
  );
}
