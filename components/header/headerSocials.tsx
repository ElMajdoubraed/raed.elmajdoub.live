import  { BsLinkedin } from "react-icons/bs"
import { SiUpwork } from "react-icons/si" 
import { AiFillGithub } from "react-icons/ai"
export default function HeaderSocials() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/raed-elmajdoub-681774205/" target="_blank" rel="noreferrer">
                <BsLinkedin/>
            </a>
            <a href="https://github.com/ElMajdoubraed" target="_blank" rel="noreferrer">
                <AiFillGithub/>
            </a>
            <a href="https://www.upwork.com/freelancers/~0154ec2d40368dcaad" target="_blank" rel="noreferrer">
                <SiUpwork/>
            </a>
        </div>
    )
}