import { BsLinkedin } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/raed-elmajdoub-681774205/"
        className="header__socials__link"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/ElMajdoubraed"
        className="header__socials__link"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~0154ec2d40368dcaad"
        className="header__socials__link"
        target="_blank"
        rel="noreferrer"
      >
        <SiUpwork />
      </a>
      <a
        href="mailto:raed.elmajdoub@gmail.com"
        className="header__socials__link"
        target="_blank"
        rel="noreferrer"
      >
        <IoMdMail />
      </a>
    </div>
  );
}
