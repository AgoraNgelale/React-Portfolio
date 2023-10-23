import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import emailjs from'@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

     const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
        .sendForm(
            'service_t1w9e4c',
            'template_3fnqicv',
            refForm.current,
            'qT6iBSFU7mXw3P1jR',
        )
        .then(
            ()=>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            ()=>{
                alert('Failed to send the message, please try again')
            }
        )
     }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in internship opportunities in any Dev related roles.
                        If my portfolio could earn me an opportunity with you, feel free to contact me 
                        below:
                    </p>
                    <div className='contact-form'>
                        <form ref = {refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='from_name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message'name='message' required/>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value={"SEND"}/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Agora Ngelale,
                    <br/>
                    Irvine, CA
                    <br/>
                    29612<br/>
                    <span>agorangelale@icloud.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[33.64859855276158, -117.83534397264019]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[33.64859855276158, -117.83534397264019]}>
                            <Popup>Agora lives here</Popup>

                        </Marker>
                    </MapContainer>

                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact