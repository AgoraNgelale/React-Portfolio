import "./index.scss"
import LogoTitle from "../../assets/images/My-logo.png"
import profile from "../../assets/images/linkedin photo.jpg"
import background from "../../assets/images/newport background.jpg"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['g','o','r','a']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
    useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return(
        <>
        <div className="continer home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i, </span>
                     <br/>
                     <span className={`${letterClass} _13`}>I</span>
                     <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}
                    />
                </h1>
                <h2>Frontend Developer / Javascript programmer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <img className="profile-picture" src={profile}/>
            <img className="background" src={background}/>
            <Logo/>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home;