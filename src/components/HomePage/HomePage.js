import { HomePageStyle } from './HomePage.style';
import Typewriter from 'typewriter-effect';

function TypewritterContainer() {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(1300)
          .typeString('Web Developer')
          .pauseFor(300)
          .deleteAll()
          .typeString('Data Scientist')
          .pauseFor(300)
          .deleteAll()
          .typeString('Mechatronic Engineer')
          .pauseFor(300)
          .deleteAll()
          .typeString('Professor')
          .pauseFor(300)
          .deleteAll()
          .start();
      }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <HomePageStyle>
        <div className="title-container">
          <h1>Hello World, I'm Lucas</h1>
          <div className="typewritter">
            <TypewritterContainer />
          </div>
        </div>
      </HomePageStyle>
    </>
  );
}
