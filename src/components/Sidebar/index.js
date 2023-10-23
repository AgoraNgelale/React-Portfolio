import './index.scss'
import { Link,NavLink } from 'react-router-dom'
import LogoS from "../../assets/images/My-logo.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faBook } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () =>{
    return(
       <div className='nav-bar'>
            <Link className= 'logo' to ='/'>
                <img src ={LogoS} alt="logo"/>
                
            </Link>
            <nav>
                {/**Home Icon */}
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>

                {/**User (about) Icon */}
                <NavLink exact="true" activeclassname="active" className ="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>

                {/** Envelope (contact) Icon */}
                <NavLink exact="true" activeclassname="active" className= "contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" className= "projects-link" to="/projects">
                    <FontAwesomeIcon icon={faBook} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul>
                {/**LinkedIn link */}
                <li>
                    <a 
                      target="_blank" 
                      rel='noreferrer' 
                      href='https://www.linkedin.com/in/obariagora-agora-ngelale-261386246'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                {/**Github link */}
                <li>
                    <a 
                      target="_blank" 
                      rel='noreferrer' 
                      href='https://github.com/AgoraNgelale'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
       </div>
    )
   
}


export default Sidebar