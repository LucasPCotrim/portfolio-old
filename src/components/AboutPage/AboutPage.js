import { AboutPageStyle, AboutSectionStyle } from './AboutPage.style';

export default function AboutPage({ pageRef }) {
  return (
    <>
      <AboutPageStyle ref={pageRef}>
        <div className="title-container">
          <h1>About Me</h1>
        </div>
        <AboutSectionStyle>
          <p>
            My name is Lucas Pereira Cotrim and I'm a full-stack Web Developer
            who is passionate about learning new technologies and using them in
            large-scale projects that impact the world in a positive way.
          </p>
          <br />
          <p>
            I hold an MSc degree in Control and Automation Engineering from
            University of São Paulo and my research areas of interest include
            Data Science, Artificial Intelligence and Reinforcement Learning.
          </p>
        </AboutSectionStyle>
      </AboutPageStyle>
    </>
  );
}
