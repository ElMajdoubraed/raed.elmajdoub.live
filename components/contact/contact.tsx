import { BsWhatsapp } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import axios from "axios";
import { useRef } from "react";
export default function Contact() {
  let name = useRef<HTMLInputElement>(null);
  let email = useRef<HTMLInputElement>(null);
  let message = useRef<HTMLTextAreaElement>(null);
  const sendEmailDraft = async (e: any) => {
    e.preventDefault();
    await axios({
      method:"post",
      headers: {
        "Content-Type" : "application/json",
        "Access-Control-Allow-Headers" : "*",
        "Access-Control-Allow-Methods" : "*",
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Allow-Origin" : "*",
        "X-Requested-With" : "*"
    },
      data:{
        username: name.current?.value,
        email: email.current?.value,
        message: message.current?.value
      },
      url:'https://k9gdbxlpb8.execute-api.us-east-1.amazonaws.com/send'
    }).then((response) =>{ console.log(response.data);}) 
  }

  const sendEmail = async (e: any) => {
    e.preventDefault();
    const log = JSON.stringify({
      username: name.current?.value,
      email: email.current?.value,
      message: message.current?.value
    })

    console.log("log", log);
    fetch('https://k9gdbxlpb8.execute-api.us-east-1.amazonaws.com/send', {
      //mode: 'no-cors',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: name.current?.value,
        email: email.current?.value,
        message: message.current?.value
      })
    }) 
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }

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

        <form onSubmit={(e: any)=> sendEmail(e)}>
          <input ref={name} type="text" name="name" id="name" placeholder="Your Full Name" required />
          <input ref={email} type="email" name="email" id="email" placeholder="Your email" required />
          <textarea ref={message} rows={7} name="message" id="message" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </section>
  )
}
