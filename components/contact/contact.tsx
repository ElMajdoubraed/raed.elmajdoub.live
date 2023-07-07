import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import moment from "moment";
export default function Contact() {
  const form = useRef<any>();
  let name = useRef<HTMLInputElement>(null);
  let email = useRef<HTMLInputElement>(null);
  let message = useRef<HTMLTextAreaElement>(null);
  const source = process.env.NEXT_PUBLIC_SOURCE;
  const code = process.env.NEXT_PUBLIC_CODE;
  const sendEmail = async (e: any) => {
    const trying: string = (await localStorage.getItem("try")) || "";
    const utc = await localStorage.getItem("today");
    const today = moment().format("MMM Do YY");
    if (trying && trying.length > 3) {
      if (utc === today) {
        return alert("You have sent too many messages, please try again later");
      } else {
        localStorage.setItem("try", "1");
        localStorage.setItem("today", today);
        if (source) {
          axios
            .post("/api/contact", {
              email: email.current?.value as any,
              name: name.current?.value,
              message: message.current?.value,
              code,
            })
            .then(function (response) {
              alert("Email sent successfully");
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    } else {
      localStorage.setItem("try", trying + 1);
      localStorage.setItem("today", today);
      e.preventDefault();
      if (source) {
        axios
          .post("/api/contact", {
            email: email.current?.value as any,
            name: name.current?.value,
            message: message.current?.value,
            code: "11ASVG5VI0uELSGNZ1NI2J",
          })
          .then(function (response) {
            console.log(response);
            alert("Email sent successfully");
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      e.target.reset();
    }
  };

  return (
    <>
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
                location.href = "mailto:raed.elmajdoub@gmail.com";
              }}
              className="contact__option"
            >
              <MdOutlineEmail className="contact__option__icon" />
              <h4>Email</h4>
              <h5>raed@elmajdoub.live</h5>
              <a
                href="mailto:raed.elmajdoub@gmail.com"
                rel="noopener"
                target="_blank"
              >
                Send a message
              </a>
            </article>
            <article
              onClick={() => {
                location.href = "https://wa.me/+21629497446";
              }}
              className="contact__option"
            >
              <BsWhatsapp className="contact__option__icon" />
              <h4>Whatsapp</h4>
              <h5>+216 29.497.446</h5>
              <a
                href="https://wa.me/+21629497446"
                rel="noopener"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={(e: FormEvent) => sendEmail(e)}>
            <input
              className="input"
              ref={name}
              type="text"
              name="name"
              id="name"
              placeholder="Your Full Name"
              required
            />
            <input
              className="input"
              ref={email}
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              required
            />
            <textarea
              className="textarea"
              ref={message}
              rows={7}
              name="message"
              id="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.section>
    </>
  );
}
