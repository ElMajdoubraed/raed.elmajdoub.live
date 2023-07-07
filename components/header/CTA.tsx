import styled from "styled-components";

const CtaDiv = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

const CTA = () => {
  return (
    <CtaDiv>
      <a href={"/CV.pdf"} download rel="noopener noreferrer" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </CtaDiv>
  );
};

export default CTA;
