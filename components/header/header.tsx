import CTA from "./CTA";
import HeaderSocials from "./headerSocials";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AiOutlineDownCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import Animation from "./Animation";
export default function Header() {
  const [text, count] = useTypewriter({
    words: ["Raed Elmajdoub", "Fullstack Developer"],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <motion.header
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1.2,
      }}
      id="header"
    >
      <motion.div
        className="container header__container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="header__logo">
          <h5 className="mt__header">Hello I'm</h5>
          <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
            <span>{text}</span>
            <Cursor cursorColor="#d3af37" />
          </h1>
        </div>
        <h1 className="hidden">Raed Elmajdoub</h1>
        <h1 className="hidden">ElMajdoub.live</h1>
        <h5 className="text-light">Fullstack JS/TS, DEVOPS</h5>
        <CTA />
        <Animation />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          <AiOutlineDownCircle />
        </a>
      </motion.div>
    </motion.header>
  );
}
