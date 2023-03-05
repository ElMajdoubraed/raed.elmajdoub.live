import  { BsLinkedin } from "react-icons/bs"
import { SiUpwork } from "react-icons/si" 
export default function HeaderSocials() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <BsLinkedin/>
            </a>
            <a href="https://www.github.com/" target="_blank" rel="noreferrer"></a>
            <a href="https://www.upwork.com/" target="_blank" rel="noreferrer">
                <SiUpwork/>
            </a>
        </div>
    )
}