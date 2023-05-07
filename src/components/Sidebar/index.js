import { Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/new.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faYCombinator, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to ='/'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="sumanth"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                target="_blank"
                rel="moreferrer"
                href="https://www.linkedin.com/in/sumanth-aitham-95561014a/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="moreferrer"
                href="https://github.com/SumanthAitham2000">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="moreferrer"
                href="https://www.instagram.com/sumanth_chowdary007/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="moreferrer"
                href="https://leetcode.com/sumanthch738/">
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>)



export default Sidebar;