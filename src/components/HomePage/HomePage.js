import { HomePageStyle } from './HomePage.style';
import Typewriter from 'typewriter-effect';

export default function HomePage() {
  return (
    <>
      <HomePageStyle>
        <div className="title-container">
          <h1>Hi, I'm Lucas</h1>
          <div className="typewritter">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1500)
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
          </div>
        </div>
      </HomePageStyle>
    </>
  );
}
