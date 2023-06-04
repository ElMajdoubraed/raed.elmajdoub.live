const EmailTemplate = `
<div style="background-color: #010b13; color: white; padding: 2rem">
  <div style="margin: auto; width: 50%">
    <h1 style="color: #d3af37">Thank you for getting in touch!</h1>
    <div style="margin-bottom: 4rem">
      <p style="font-size: large; margin-bottom: 4rem">
        We appreciate you contacting us. We will get back to you shortly.
      </p>
      <div>
        <img
          style="margin-bottom: 4rem; color: #d3af37"
          src="https://raed.elmajdoub.live/favicon.ico"
          width="80"
          height="80"
        />
      </div>
      <a
        style="
          margin-bottom: 4rem;
          text-decoration: none;
          padding: 0.75rem 1.2rem;
          background: #d3af37;
          color: #010b13;
          cursor: pointer;
          border: 1px solid #d3af37;
          border-radius: 0.4rem;
        "
        href="https://raed.elmajdoub.live"
        target="_blank"
        >Back to Website
      </a>
    </div>
    <div style="margin-bottom: 2rem">
      <div style="margin-top: 2rem">
        <b>Have a great day!</b>
      </div>
      <small style="color: #d3af37">Raed Elmajdoub</small>
    </div>
  </div>
</div>
`;

const EmailSubject = "Thank you for getting in touch!";

export { EmailSubject, EmailTemplate };
