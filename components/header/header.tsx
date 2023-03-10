import CTA from "./CTA";
import HeaderSocials from "./headerSocials"
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { AiOutlineDownCircle } from 'react-icons/ai'
export default function Header() {
    const [text, count] = useTypewriter({
        words: [
            'Raed Elmajdoub',
            'Fullstack Developer',
        ],
        loop:true,
        delaySpeed: 1500
    })
    return (
     <header id="header">
        <div className="container header__container">
            <div className="header__logo">
                    <h5 className="mt__header">Hello I'm</h5>
                    <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                        <span>{text}</span>
                        <Cursor cursorColor='#d3af37' />
                    </h1>
            </div>
                    <h1 className="hidden">Raed Elmajdoub</h1>
                    <h1 className="hidden">ElMajdoub.live</h1>
                    <h5 className="text-light">Fullstack JS/TS, DEVOPS</h5>
                <CTA/>
                <HeaderSocials/>

                <a href="#contact" className="scroll__down">
                    <AiOutlineDownCircle/>
                </a>
        </div>
     </header>
    )
  }
  