import { ContactPageStyle } from './ContactPage.style';

export default function ContactPage({ pageRef }) {
  return (
    <>
      <ContactPageStyle ref={pageRef}>
        <div className="title-container">
          <h1>Contact Me</h1>
        </div>
      </ContactPageStyle>
    </>
  );
}
