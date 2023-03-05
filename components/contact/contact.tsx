import { BsWhatsapp } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
export default function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon"/>
            <h4>Email</h4>
            <h5>raed@elmajdoub.live</h5>
            <a href="mailto:raed@elmajdoub.live" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option__icon"/>
            <h4>Messenger</h4>
            <h5>Raed elmajdoub</h5>
            <a href="https://m.me/profile" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon"/>
            <h4>Whatsapp</h4>
            <h5>+216 29.497.446</h5>
            <a href="https://api.whatsapp.com/send?phone=+21629497446" target="_blank">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" id="name" placeholder="Your Full Name" required />
          <input type="email" name="email" id="email" placeholder="Your email" required />
          <textarea rows={7} name="message" id="message" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </section>
  )
}
