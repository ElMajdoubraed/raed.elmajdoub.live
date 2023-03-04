import Link from "next/link"
import { GoThreeBars } from 'react-icons/go'
export default function Navbar() {
    return (
      <nav>
        <div className="container nav__container">
            <Link href='#home' className="logo">
                <img src={""} alt="Raed elmajdoub logo"></img>
            </Link>
            <ul className="nav__links">
                <li>
                    <Link href='#home'>Home</Link>
                </li>
                <li>
                    <Link href='#home'>Home</Link>
                </li>
                <li>
                    <Link href='#home'>Home</Link>
                </li>
                <li>
                    <Link href='#home'>Home</Link>
                </li>
                <li>
                    <Link href='#home'>Home</Link>
                </li>
                <li>
                    <Link href='#home'>Home</Link>
                </li>
            </ul>
            <button className="nav__toggle-btn">
                <GoThreeBars/>
            </button>
        </div>
      </nav>
    )
  }
  