import './App.css';
import {
  FaPhoneAlt, FaUserAlt, FaSlidersH, FaToolbox, FaChevronDown,
  FaPhoneVolume, FaGithub, FaLinkedin, FaRegAddressCard
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import PageBreak from './components/PageBreak'
import BasicTextBlock from './components/BasicTextBlock'
import TextAndIcon from './components/TextAndIcon'
import Skill from './components/Skill'
import Experience from './components/Experience'
import {
  Animator, ScrollContainer, ScrollPage,
  Sticky, batch, Fade, MoveOut
} from 'react-scroll-motion'

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
          <BasicTextBlock icon={<FaPhoneAlt className="icon" />} name='Info' >
            <TextAndIcon icon={<FaPhoneVolume className="contact-icon" />}>(612)-930-7069</TextAndIcon>
            <TextAndIcon icon={<MdEmail className="contact-icon" />}>andrewtrudeau3@gmail.com</TextAndIcon>
            <TextAndIcon icon={<FaLinkedin className="contact-icon" />}>Andrew Trudeau</TextAndIcon>
            <TextAndIcon icon={<FaGithub className="contact-icon" />}>andrewtrudeau</TextAndIcon>
            <TextAndIcon icon={<FaRegAddressCard className="contact-icon" />}>2023 Chicory way Chanhassen, 55317, MN</TextAndIcon>
          </BasicTextBlock>

          <BasicTextBlock icon={<FaUserAlt className="icon" />} name='About Me' >
            I am a programmer who loves to learn from and contribute to projects of all types.
            <span className='bold'>I plan to effectively play my part as a developer in a team environment</span>:
            I am supportive and work well with all types of people. I love
            <span className='bold'>organization</span> and <span className='bold'>smooth workflows</span>;
            I can't stand messes or confusion (I like clarity inside and outside of programming).
            I see the importance in planning and staying on track as well as showing up for myself and others.
            <br />
            I have tried many different styles of programming languages and have participated in
            and am familiar with some workflow methods like <span className='bold'>agile software development.</span>
            I am excited about being around like-minded passionate individuals to learn from each other.
            <h3>Some Projects I Have Made</h3>
            <ul>
              <li>Drone package delivery simulation using flying and grounded drones. This was a 3-person-group effort (UMN)</li>
              <li>VR game displaying 3D-virtual-reality-application-design principals in the form of a puzzle game. (UMN)</li>
              <li>Heroku mounted MERN App for sharing artwork using authentication with accounts. (UMN Web Dev Bootcamp)</li>
              <li>Various Physics simulations utilizing state-of-the-art path finding, fluid dynamics, and inverse kinematics algorithms (UMN)</li>
            </ul>
          </BasicTextBlock>

          <BasicTextBlock icon={<FaSlidersH className="icon" />} name='Skills' >
            <Skill skillName='HTML' skillLevel={4} />
            <Skill skillName='CSS' skillLevel={4} />
            <Skill skillName='JavaScript' skillLevel={3} />
            <Skill skillName='React JS' skillLevel={3} />
            <Skill skillName='Node JS' skillLevel={4} />
            <Skill skillName='Java' skillLevel={4} />
            <Skill skillName='C#' skillLevel={3} />
            <Skill skillName='C' skillLevel={3} />
            <Skill skillName='C++' skillLevel={4} />
            <Skill skillName='Python' skillLevel={4} />
            <Skill skillName='Haskell' skillLevel={2} />
            <Skill skillName='MERN Stack' skillLevel={4} />
            <h2>IDEs/Tools</h2>
            <Skill skillName='Eclipse' skillLevel={4} />
            <Skill skillName='NetBeans' skillLevel={1} />
            <Skill skillName='VSCode' skillLevel={4} />
            <Skill skillName='Visual Studio' skillLevel={2} />
            <Skill skillName='Github' skillLevel={5} />
            <Skill skillName='Notepad++' skillLevel={3} />
            <Skill skillName='Chrome DEV Tools' skillLevel={3} />
            <Skill skillName='SQL' skillLevel={4} />
            <Skill skillName='ASP.NET' skillLevel={1} />
            <Skill skillName='MongoDB' skillLevel={4} />
            <Skill skillName='ASP.NET' skillLevel={1} />
          </BasicTextBlock>
          <BasicTextBlock icon={<FaToolbox className="icon" />} name='Experience' >
            <h2>Education</h2>
            <Experience occupation="U of M Web Development Boot Camp" dateRange="AUG 2021 - DEC 2021">
              This course filled in the blanks when it came to introducing me to web development:
              My university experience only had so much information to give on this subject,
              I decided to take an extra bootcamp while completing my bachelors a semester early and
              maintaining a part time job 25-30 hrs/week. <span className='bold'>I scored over 100% in the course: GPA 4</span>
            </Experience>
            <Experience occupation="University of Minnesota" dateRange="SEPT 2020 - DEC 2021">
              This is where I gained most of computer science knowledge. I took a wide variety of courses from virtual
              reality to operating systems. I achieved a Bachelors in Computer Science. <span className='bold'>GPA 3.5</span>
            </Experience>
            <Experience occupation="Eden Prairie Highschool" dateRange="SEPT 2014 - JUNE 2018">
              Eden Prairie Highschool is a demanding and high-achieving school where I participated in many
              AP level courses to get ahead on college. <span className='bold'>GPA 3.6</span>
            </Experience>
            <Experience occupation="Normandale Community College" dateRange="SEPT 2018 - JULY 2020">
              To save money, I went to Normandale to complete my general credits to prepare me for the University of Minnesota.
              I achieved an Associated in Liberal Arts and Computer Science. <span className='bold'>GPA 3.7</span>
            </Experience>
            <h2>Work</h2>
            <Experience occupation="Kowalski's Hot Food Chef" dateRange="AUG 2018 - DEC 2021">
              The first real job I had where I had the privilege of working with a team,
              setting and achieving deadlines, and cooking delicious food for the community.
              <span className='bold'> I've prepared and managed thousands of dollars of high
                quality food over the span of a couple years.</span>
            </Experience>
          </BasicTextBlock>
        </div>
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
