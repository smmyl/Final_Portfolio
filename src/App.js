import './App.css';

const App = () => {

  return (
    <div className='page' id='whole-page'>
        <div className='header'>
          <div>
            <h1 className='title'>Sammy Liao</h1>
          </div>
          <div className='icon' id='hamburger-btn'>
            <img src='https://cdn-icons-png.flaticon.com/512/3075/3075977.png' id='hamburger' alt="hamburger menu icon" />
          </div>
          <div className='icon' id='hamburger-btn2'>
            <img src='https://cdn-icons-png.flaticon.com/512/4074/4074170.png' id='hamburger-2' alt="close menu icon" />
          </div>
          <div className='icon-2' id='night-btn'>
            <img src='https://cdn-icons-png.flaticon.com/512/4489/4489231.png' id='night-mode' alt="night mode icon" />
          </div>
          <div className='icon-2' id='light-btn'>
            <img src='https://cdn-icons-png.flaticon.com/512/4623/4623236.png' id='light-mode' alt="light mode icon" />
          </div>
        </div>
        <div id='navigation-bar'>
          <ul>
            <li className='nav' id='line-break'></li>
            <li className='nav' id='home'>Home</li>
            <li className='nav' id='resume'>Resume</li>
            <li className='nav' id='skills'>Skills</li>
            <li className='nav' id='projects'>Projects</li>
            <li className='nav' id='line-break2'></li>
          </ul>
        </div>
        <div id='home-page'>
          <div id='home-top-div'>
            <div className='home-div' id='home-picture'>
              <img src='https://i.imgur.com/FQZ41KN.jpg' id='profile-pic' alt="profile" />
            </div>
            <div className='home-div' id='home-links'>
              <a href='https://www.facebook.com/sammy.liao.5/'><img src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_2_glyph_svg-512.png' className='icon-links' alt="facebook icon" /></a>
              <a href='https://www.linkedin.com/in/sammyliao/'><img src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-512.png' className='icon-links' alt="linkedin icon" /></a>
              <a href='https://github.com/smmyl'><img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png' className='icon-links' alt="github icon" /></a>
              <a href='mailto: sammy.liaop@gmail.com'><img src='https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/mail-512.png' className='icon-links' alt="email icon" /></a>
            </div>
          </div>
          <div className='home-page-line'></div>
          <div id='home-bot-div'>
            <div className='home-div' id='home-description'>
              <h2>Hello!</h2>
              <p>
                I am an aspiring software-engineer currently enrolled in General Assembly.<br /><br />
                In 2015, I started off as a mechanical engineering student at Wentworth Institute of Technology. Although I liked the subject, I disliked how my creativity was bounded by the limits of physics. Due to my change of heart and uncertainty, I decided to step away for some clarity. <br /><br />
                During this break, I decided to work in customer service - something I would never regret. Taking the role of an assistant manager, I learned how to work better under pressure. I took away core skills such as communication, efficiency, and time-management.<br /><br />
                My time away taught me that my passion for creating things never dissapeared. As a result, I began to speak with advisors and counselors who collectively recommended me to try software-engineering. As the world of technology only grows more complex and complicated, the bounds of creativity are nonexistent. Using the skills I've gained throughout my journey, I hope to create something that can assist or make someones's life easier in any way.
              </p>
            </div>
          </div>
        </div>
        <div className='page' id='resume-page'>
          <h3 className='resumeh3'>BOSTON, MA | (617)-834-0553 | Sammy.liaop@gmail.com</h3>
          <h2 className='resumeh2'>SUMMARY</h2>
          <div className='resumep'>
            <p>
              Results-driven individual seeking to learn new skill sets to apply to future endeavors. Successful in demanding
              environments and exceptional ability to quickly grasp new concepts. Able to work under stressful
              environments as well as staying motivated throughout the process.
            </p>
          </div>
          <h2 className='resumeh2'>CORE COMPETENCIES</h2>
          <div className='resumep'>
            <p>• Communications • Problem-solving • Professionalism</p>
          </div>
          <h2 className='resumeh2'>EDUCATION</h2>
          <div className='resumep'>
            <p>
              • General Assembly 02/2023 - Current<br />
              • Wentworth Institute of Technology Boston, MA 09/2015 – 01/2018<br />
              • Boston Latin Academy Boston, MA 09/2010 – 06/2015
            </p>
          </div>
          <h2 className='resumeh2'>WORK EXPERIENCE</h2>
          <div className='resumep'>
            <p>
              JP Group Boston, MA Professional Wait Staff 07/2020 – Current<br />
              • Resolve conflicts in quick and efficient manner<br />
              • Communicate with people professionally<br />
              • Operate efficiently in a fast and stressful environment<br /><br />
              Shabu-zen Boston, MA Assistant Manager 06/2018 – 06/2020<br />
              • Manage inventory<br />
              • Insure a efficient and smooth work environment<br />
              • Provide utmost hospitality and service
            </p>
          </div>
        </div>
        <div className='page' id='skills-page'>
          <h1>Technical Skills</h1>
          <h2 className='pageskills'>HTML</h2>
          <div className='bar-border'>
            <div className='bar' id='bar-HTML'>90%</div>
          </div>
          <h2 className='pageskills'>CSS</h2>
          <div className='bar-border'>
            <div className='bar' id='bar-CSS'>85%</div>
          </div>
          <h2 className='pageskills'>JS</h2>
          <div className='bar-border'>
            <div className='bar' id='bar-JS'>85%</div>
          </div>
          <h2 className='pageskills'>React</h2>
          <div className='bar-border'>
            <div className='bar' id='bar-react'>80%</div>
          </div>
          <h2 className='pageskills'>jQuery</h2>
          <div className='bar-border'>
            <div className='bar' id='bar-jQ'>70%</div>
          </div>
          <h2 className='pageskills'>Python</h2>
          <div className='bar-border'>
            <div className='bar' id='bar-p'>40%</div>
          </div>
          <h1>Related Skills</h1>
          <h2 className='pageskills'>Communications</h2>
          <div className='bar-border'>
            <div className='bar' id='bar-c'>80%</div>
          </div>
          <h2 className='pageskills'>Problem Solving</h2>
          <div className='bar-border'>
            <div className='bar' id='bar-s'>90%</div>
          </div>
          <h2 className='pageskills'>Teamwork</h2>
          <div className='bar-border'>
            <div className='bar' id='bar-t'>100%</div>
          </div>
        </div>
        <div className='page' id='projects-page'>
          <img src='https://cdn-icons-png.flaticon.com/512/2985/2985162.png' id='carousel-btn' alt="left carousel arrow" />
          <div className='carousel' id='carousel-1'>
            <h1>Portfolio Project</h1>
            <a href='https://stirring-longma-340ff5.netlify.app/'><img src='https://i.imgur.com/TivFJOj.png' className='project-pic' alt="portfolio project thumbnail" /></a>
          </div>
          <div className='carousel' id='carousel-2'>
            <h1>HomeCare-Services</h1>
            <a href='https://stirring-longma-340ff5.netlify.app/'><img src='https://i.imgur.com/8FtvJB5.png' className='project-pic' alt="homecare project thumbnail" /></a>
          </div>
          <div className='carousel' id='carousel-3'>
            <h1>Ecommerce Site</h1>
            <a href='https://stirring-longma-340ff5.netlify.app/'><img src='https://i.imgur.com/hfsWBeS.png' className='project-pic' alt="ecommerce project thumbnail" /></a>
          </div>
          <div className='carousel' id='carousel-4'>
            <h1>EZPlanner</h1>
            <a href='https://stirring-longma-340ff5.netlify.app/'><img src='https://i.imgur.com/8GgBOjE.png' className='project-pic' alt="ezplanner project thumbnail" /></a>
          </div>
          <img src='https://cdn-icons-png.flaticon.com/512/1549/1549454.png' id='carousel-btn2' alt="right carousel arrow" />
        </div>
        <div className='footer'>
          <p>© SammyLiao.com 2023 | All Rights Reserved</p>
        </div>
      </div>
  );
}

export default App;
