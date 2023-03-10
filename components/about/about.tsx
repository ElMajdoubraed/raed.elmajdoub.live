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
          <div className="about__me__img">
            <Image className="image-next" src={profile} alt="elmajdoub.live" ></Image>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>200 + Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

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
