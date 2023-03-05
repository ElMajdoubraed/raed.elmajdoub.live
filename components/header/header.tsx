import CTA from "./CTA";
import HeaderSocials from "./headerSocials"

export default function Header() {
    return (
     <header id="header">
        <div className="container header__container">
            <div className="header__logo">
                    <h5>Hello I'm</h5>
                    <h1>Raed Elmajdoub</h1>
                    <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img src={""} alt="Raed elmajdoub picture" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </div>
     </header>
    )
  }
  