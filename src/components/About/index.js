import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react';
import { faJava, faJs, faLinux, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const strArray=['A', 'b', 'o', 'u', 't', ' ', 'm','e']
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass}
            strArray={strArray} idx={15}/>
                </h1>
                <p>
                 I have 18 months of experience in the IT industry, and I am currently working at Accenture as a software engineer. 
                 I started working at Accenture after completing my graduation. 
                 My work primarily involves the deployment of cloud services, URLs, databases, and infrastructure instances using MyWizard, which is integrated with Splunk.
          </p>
          <p align="LEFT">
          As for my personal skills, I have a strong interest in programming, despite not having an educational background in computer science. I have learned a lot about computer science, including programming languages like Python and Java, and I enjoy solving problems on platforms like LeetCode.
          </p>
          <p>
          Additionally, I am currently learning web development, which I find enjoyable and have found that I enjoy designing websites. 
          I have also obtained certifications for these skills that I added to my <a className='refer' href="https://www.linkedin.com/in/sumanth-aitham-95561014a/">Linkedin </a>account.
          </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#306998' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faNodeJs} color='#3C873A' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color='#61DBFB' />                 
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJava} color='white' />                 
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faLinux} color='#333333' />                 
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJs} color='#F0DB4F' />                 
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;