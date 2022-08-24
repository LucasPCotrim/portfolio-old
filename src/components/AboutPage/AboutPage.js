import { AboutPageStyle } from './AboutPage.style';

export default function AboutPage({ pageRef }) {
  console.log('AboutPageRef = ', pageRef);
  return (
    <>
      <AboutPageStyle ref={pageRef}>
        <div className="title-container">
          <h1>About Me</h1>
        </div>
      </AboutPageStyle>
    </>
  );
}
