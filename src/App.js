import './App.css';
import { FaPhoneAlt, FaUserAlt, FaSlidersH, FaToolbox, FaChevronDown, FaPhoneVolume, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import PageBreak from './components/PageBreak'
import BasicTextBlock from './components/BasicTextBlock'
import TextAndIcon from './components/TextAndIcon'
import Skill from './components/Skill'
import Experience from './components/Experience'
import { Animator, ScrollContainer, ScrollPage, Sticky, batch, Fade, MoveOut } from 'react-scroll-motion'

function App() {
  return (
    <>
      <div className='resume-wrapper'>
        <div className='title-name'>
          <h1 className='title-nam3'>Andrew Trudeau</h1>
        </div>

        <PageBreak />

        <div className='info'>
          <h1>Software & Website Developer</h1>
          <h1 className='hover-right link'>Welcome</h1>
        </div>
        <PageBreak />

        <div className='content-wrapper'>
          <BasicTextBlock icon={<FaPhoneAlt className="icon" />} name='Contact' >
            <TextAndIcon icon={<FaPhoneVolume className="contact-icon" />}>(612)-930-7069</TextAndIcon>
            <TextAndIcon icon={<MdEmail className="contact-icon" />}>andrewtrudeau3@gmail.com</TextAndIcon>
            <TextAndIcon icon={<FaLinkedin className="contact-icon" />}>Andrew Trudeau</TextAndIcon>
            <TextAndIcon icon={<FaGithub className="contact-icon" />}>andrewtrudeau</TextAndIcon>
          </BasicTextBlock>

          <BasicTextBlock icon={<FaUserAlt className="icon" />} name='About Me' >
            I am a programmer who loves to learn from and contribute to projects of all shapes and sizes! I am very open and creative when it comes to ideas. My intention when it comes to working with any group or company is to effectively play my part as a developer in a team environment. I am supportive and work well with all types of people. I love organization and honestly can't stand confusion or messes (inside and outside of programming). I see the importance in planning and staying on track as well as showing up for myself and others.
            <br/>I have tried many different styles of programming languages and have participated in and am familiar with agile workflow. My experiences with a web-development bootcamp and university projects allow me to be caught up with modern development tools. I am excited about being around like-minded passionate individuals to learn from each other.
          </BasicTextBlock>

          <BasicTextBlock icon={<FaSlidersH className="icon" />} name='Skills/Experience Level' >
            <Skill skillName='HTML' skillLevel={4} />
            <Skill skillName='CSS' skillLevel={4} />
            <Skill skillName='JavaScript' skillLevel={3} />
            <Skill skillName='React' skillLevel={3} />
            <Skill skillName='Java' skillLevel={4} />
            <Skill skillName='C#' skillLevel={3} />
            <Skill skillName='C' skillLevel={3} />
            <Skill skillName='C++' skillLevel={4} />
            <Skill skillName='Python' skillLevel={2} />
            <Skill skillName='Haskell' skillLevel={2} />

          </BasicTextBlock>
          <BasicTextBlock icon={<FaToolbox className="icon" />} name='Experience' >
            <h2>Work</h2>
            <Experience occupation="Kowalski's Hot Food Chef" dateRange="AUG 2018 - DEC 2021">
              The first real job I had where I had the privilege of working with a team, setting and achieving deadlines, and cooking delicious food for the community.
            </Experience>
            <h2>Education</h2>
            <Experience occupation="Eden Prairie Highschool" dateRange="SEPT 2014 - JUNE 2018">
              Eden Prairie Highschool is a demanding and high-achieving school where I participated in many AP level courses to get ahead on college.
            </Experience>
            <Experience occupation="Normandale Community College" dateRange="SEPT 2018 - JULY 2020">
              To save money, I went to Normandale to complete my general credits to prepare me for the University of Minnesota. I achieved an Associated in Liberal Arts and Computer Science.
            </Experience>
            <Experience occupation="University of Minnesota" dateRange="SEPT 2020 - DEC 2021">
              This is where I gained most of computer science knowledge. I took a wide variety of courses from VR to operating systems. I achieved a Bachelors in Computer Science (Ski-U-Mah).
            </Experience>
            <Experience occupation="U of M Web Development Boot Camp" dateRange="AUG 2021 - DEC 2021">
              This course filled in the blacks that I was missing when it came to introducing me to web development. The university only has so much information to give on this subject, I decided to take an extra course while completing my bachelors.
            </Experience>
          </BasicTextBlock>
        </div>
        FaGithub
      </div>

      <div className="no-click">
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={batch(Sticky())}>
              <div className='welcome'>

                <div className='text-holder scroll'>
                  Scroll Down
                  <br />
                  <FaChevronDown className="icon" />
                </div>

              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage page={1}>
            <Animator animation={batch(Sticky(), MoveOut(), Fade())}>
              <div className='welcome'>

                <div className='text-holder'>
                  Hey there. 👋
                  <br />
                  My name is Andrew.
                  <br />
                  <Animator animation={batch(Fade())}>
                    💻 I'm a programmer
                    <br />
                    Here is my resume.
                  </Animator>

                </div>

              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>

    </>
  );
}

export default App;
