import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FormEvent, useRef } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef<any>();
  let name = useRef<HTMLInputElement>(null);
  let email = useRef<HTMLInputElement>(null);
  let message = useRef<HTMLTextAreaElement>(null);
  const sendEmail = async (e: any) => {
    const trying: string = (await localStorage.getItem("try")) || "";
    const utc = await localStorage.getItem("today");
    var today = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    if (trying && trying.length > 3) {
      if (utc === today) {
        return alert("You have sent too many messages, please try again later");
      } else {
        localStorage.setItem("try", "1");
        localStorage.setItem("today", today);
        e.preventDefault();
        //send email here
        e.target.reset();
      }
    } else {
      localStorage.setItem("try", trying + 1);
      localStorage.setItem("today", today);
      e.preventDefault();
      //send email here
      e.target.reset();
    }
  };

  return (
    <motion.section
      id="contact"
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
    >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="container contact__container"
      >
        <div className="contact__options">
          <article
            onClick={() => {
              location.href = "mailto:raed@elmajdoub.live";
            }}
            className="contact__option"
          >
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>raed@elmajdoub.live</h5>
            <a href="mailto:raed@elmajdoub.live" target="_blank">
              Send a message
            </a>
          </article>
          {/*
            <article className="contact__option">
            <RiMessengerLine className="contact__option__icon"/>
            <h4>Messenger</h4>
            <h5>Raed elmajdoub</h5>
            <a href="https://m.me/raedelmajdoub" target="_blank">Send a message</a>
            </article>
            */}
          <article
            onClick={() => {
              location.href = "https://wa.me/+21629497446";
            }}
            className="contact__option"
          >
            <BsWhatsapp className="contact__option__icon" />
            <h4>Whatsapp</h4>
            <h5>+216 29.497.446</h5>
            <a href="https://wa.me/+21629497446" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={(e: FormEvent) => sendEmail(e)}>
          <input
            ref={name}
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            required
          />
          <input
            ref={email}
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
          />
          <textarea
            ref={message}
            rows={7}
            name="message"
            id="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
}
