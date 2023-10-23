import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import img1 from '../../assets/images/AgoraPedia img 1.png'
import background from '../../assets/images/spectrum-background.webp'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    return(
        <>
        <div className='projects-cont'>
            <div className='proj-card'>
                <div className='card-face'>
                    <img className='mine' src={img1}/>
                    <ul>
                    <li>
                        <a
                        target="_blank" 
                        rel='noreferrer' 
                        href='https://github.com/AgoraNgelale/AgoraPedia'
                        >
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </li>
                    <li>
                        <a
                        target="_blank" 
                        rel='noreferrer' 
                        href='https://agora-pedia-client.vercel.app/'
                        >
                            <FontAwesomeIcon icon={faExternalLink}/>
                        </a>
                    </li>
                </ul>
                </div>
                <ul className='proj-info'>
                    <li>
                        <p className='description'>
                            AgoraPedia is a fullstack, fully responsive 
                            social media web app.
                        </p>
                    </li>
                    <li>
                        <p className='frameworks'>
                        Frameworks and Tools: MongoDB, Express.js, React.js, Node.js
                        </p>
                    </li>
                    <li>
                        <p className='instructions'>
                        This project is being hosted on a free server. Login might take some time to process.
                        For easy login use name: lebron@gmail.com and password: lebron to surf via a dumy account.
                        You could also create your own.
                        </p>
                    </li>
                </ul>
            </div>
            
        </div>
        <img className= 'background' src={background}/>
         <Loader type='pacman'/>
        </>             
    )
}


export default Projects