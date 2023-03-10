//import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import profile from '../../assets/profile.png'
import Image from "next/image"
export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <h1 className="hidden">Raed elmajdoub</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="me">
            <Image className="image-next" alt="Raed elmajdoub" fill src={profile}></Image>
          </div>
        </div>

        <div className="about__content">
          <p>
          As a Full Stack JavaScript/TypeScript and AWS DevOps developer, I specialize in building scalable applications using React, Node.js, and AWS services. With expertise in front-end and back-end development,
          I deliver seamless user experiences and optimize performance. 
          My passion for problem-solving and staying up-to-date with industry trends helps me provide the best solutions to my clients.
          As a freelancer, I have the flexibility to work on projects that align with my skills and interests,
           while providing top-notch quality work to my clients.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
