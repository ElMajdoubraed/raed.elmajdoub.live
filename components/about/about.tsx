import profile from "../../assets/profile_image.png";
import { motion } from "framer-motion";
import Image from "next/image";
export default function About() {
  return (
    <motion.section
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1.2,
      }}
      id="about"
    >
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="me">
            <picture>
              <source type="image/webp" />
              <Image
                className="image-next"
                alt="Raed elmajdoub portfolio"
                fill
                src={profile}
              ></Image>
            </picture>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="about__content"
        >
          <p>
            As a Full Stack JavaScript/TypeScript and AWS DevOps developer, I
            specialize in building scalable applications using React, Node.js,
            and AWS services. With expertise in front-end and back-end
            development, I deliver seamless user experiences and optimize
            performance. My passion for problem-solving and staying up-to-date
            with industry trends helps me provide the best solutions to my
            clients. As a freelancer, I have the flexibility to work on projects
            that align with my skills and interests, while providing top-notch
            quality work to my clients.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
