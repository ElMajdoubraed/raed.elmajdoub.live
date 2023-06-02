import { motion } from "framer-motion";
export default function NotFound() {
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
      id="notFound"
    >
      <h5>Page Not Found</h5>
      <h2>4.0.4</h2>
      <h1 className="hidden">Raed elmajdoub - Not Found</h1>

      <div className="container about__container">
        <div className="about__me">
          <div
            className="me"
            style={{
              textAlign: "center",
            }}
          >
            <h5>Page Not Found</h5>
            <h2>4.0.4</h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="about__content"
        >
          <p>Unfortunately, we could not find the page you requested.</p>

          <a href="/" className="btn btn-primary">
            Home
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
