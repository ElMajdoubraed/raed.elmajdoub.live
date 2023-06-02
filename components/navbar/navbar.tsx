import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("#header");

  const downloadAr = () => {
    console.log("ar");
  };
  return (
    <nav id="nav">
      <a
        onClick={() => setActive("#header")}
        className={active === "#header" ? "active" : ""}
        href="#header"
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActive("#services")}
        className={active === "#services" ? "active" : ""}
        href="#services"
      >
        <RiServiceLine />
      </a>
      <a
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
      <a onClick={() => downloadAr()}>
        <FaLanguage />
      </a>
    </nav>
  );
}
