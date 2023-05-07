import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const strArray=['C','o','n','t','a','c','t',' ','m','e']
    const refForm =useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(
            'service_3pntfpm',
            'template_1g1660o',
            refForm.current,
            'OtQfWZcwG9NZ8cjqj')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
                
            )}
    return (
        <>
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
            strArray={strArray} idx={15}/>
                </h1>
                <p>
                Please feel free to contact me if you are looking for someone to work on your frontend or backend projects, or if you need assistance with competitive programming. While I am not a complete expert in all areas, I am happy to help in any way that I can, and I am always eager to learn from others.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li >
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" type="text" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Sumanth Aitham,
                <br />
                India
                <br />
                Vidya nagar 7-61, Chennai road <br />
                Sri Kalahasti <br/>
                <span>sumanthch738@gmail.com</span>
               
            </div>
        <div className='map-wrap'>
            <MapContainer center={[13.744570373691616, 79.7127977273287]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[13.744570373691616, 79.7127977273287]}>
              <Popup>Sumanth lives here, come over for a cup of coffee </Popup>
            </Marker>
          </MapContainer>
        </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact;