import CTA from "./CTA";
import profile from '../../assets/profile.png'
import HeaderSocials from "./headerSocials"
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { AiOutlineDownCircle } from 'react-icons/ai'
import Image from "next/image";
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
                    <h5>Hello I'm</h5>
                    <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                        <span>{text}</span>
                        <Cursor cursorColor='#d3af37' />
                    </h1>
                    <h1 className="hidden">Raed elmajdoub</h1>
                    <h1 className="hidden">ElMajdoub.live</h1>
                    <h5 className="text-light">Fullstack JS/TS, DEVOPS</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <Image className="image-next" alt="Raed elmajdoub" fill src={profile}></Image>
                </div>

                <a href="#contact" className="scroll__down">
                    <AiOutlineDownCircle/>
                </a>
            </div>
        </div>
     </header>
    )
  }
  