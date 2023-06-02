const CTA = () => {
  return (
    <div className="cta">
      <a href={"/CV.pdf"} download rel="noopener noreferrer" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
