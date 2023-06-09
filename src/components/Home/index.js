import LogoTitle  from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import {useEffect, useState}  from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['u','m','a','n','t','h']
  const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']
  
  

  
  return (
    <>
    <div className="container home-page">
    <Loader type="pacman" />
        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray} idx={15}/>
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray} idx={18}/>
            </h1>
            <h2>Splunk / Python Expert / leetcoder / AI enthusiast </h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home;