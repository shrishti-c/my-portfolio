import React from "react";
import Footerlink from "../Footerlink/Footerlink";
import Header from "../Header/Header";
import "./About.css";
import aboutvector from './../../assets/about_vector.png'
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';


const About = () =>
{
    return(
        <div className='section-container about-container'>
        <Header
            Heading='About Me.'
            Details='The Passionate Learner || Technologically competent || Problem solver || Adaptable'
        />

        <div className='about-main'>
            <div className='about-main-left'>
                {/* Sub section 1 */}
                <div className="education">
                <h3 className='about-sub-head'>Educational Background</h3>
                <p className='about-details'>
                    <ul>
                        <li><span className="sub-head"> B.Tech(CSE) (2019-2023)</span>
                              <ul>
                                  <li>Lovely Professional University || 8.65 C.G.P.A</li>
                                  
                              </ul>
                        </li>
                        <br/>
                        <li><span className="sub-head"> Intermediate (2017-2019)</span>
                              <ul>
                                  <li>Chauhan Public School || 92%</li>
                                                              </ul>
                        </li>
                      <br/>
                        <li><span className="sub-head"> High School (2016-2017)</span>
                              <ul>
                                  <li>D.A.V Public School || 10.0 C.G.P.A</li>
                                                               </ul>
                        </li>
                            <br/> 
                    </ul>
                </p>
            </div>
                {/* Sub section 2 */}
                <div className="work">
                <h3 className='about-sub-head'>Open Source and Work Experience
</h3>
                <p className='about-details'>
                   <ul>
                       <li> <span className="sub-head">Content Writer (Jan 2021 - March 2021)</span><br/>
                       <ul>
                          <li>Conducted thorough research on industry‐related topics.</li>
                          <li>Generated consistent and clear ideas for new content type.</li>
                           <li>Assisted the marketing team</li>
                          <li>Developed content for advertising campaigns</li>
                        </ul>
                        </li>
                        <br/>
                        <li> <span className="sub-head">Campus Ambassador (Feb 2021 - May 2021)</span><br/>
                       <ul>
                          <li>Spread awareness about service among the students’ community.</li>
                          <li>Nurtured a student community with the knowledge of their technology or services Organized various event.</li>
                           <li>Assisted the marketing team</li>
                          <li>Conducted how‐to sessions and initiate marketing and promotional activities, including social media promotion</li>
                        </ul>
                        </li>
                        <br/>
                        <li> <span className="sub-head">Gssoc Contributor (March 2021 - May 2021) </span><br/>
                       <ul>
                       <li>Worked diligently on 4 projects</li>
                        <li>One ofthe project gotselected byNGO‐ MathsGee and currently
                            being used all over Africa.</li>
                        <li>Awarded with the title of ”Top Performer”</li>
                        </ul>
                        </li>
                          <br/>
                        <li> <span className="sub-head">Open Source Mentor (June 2021 - August 2021)</span><br/>
                       <ul>
                          <li>Guided 50+ students during the program.</li>
                        <li>Resolved 100+ queries.</li>

                        </ul>
                        </li>
                   </ul>
                </p>

               </div>
            </div>

            <div className='about-main-right'>
                <img
                    src={aboutAnime}
                    alt='animation'
                    className='about-anime'
                />
            </div>
        </div>

        <Footerlink
            phrase='Check out my '
            link='projects!'
            toadress='/projects'
        />
        {/* Vector Frame! */}
        <div className='vector-frame'>
            <img src={aboutVector} className='about-vector' alt='about' />
        </div>
    </div>
);
};

export default About;
