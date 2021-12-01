import React from 'react'
import "../css/aboutUs.css"
import Footer from '../component/Footer'

import airline1 from "../images/about-image/Air-france.png"
import airline2 from "../images/about-image/american.jpg"
import airline3 from "../images/about-image/British.jpg"
import airline4 from "../images/about-image/emirates.png"
import airline5 from "../images/about-image/Lufthansa-Logo.png"
import airline6 from "../images/about-image/qatar-airlines.png"
import airline7 from "../images/about-image/flydubai.png"
import airline8 from "../images/about-image/malaysia.png"
import airline9 from "../images/about-image/suise.jpg"
import airline10 from "../images/about-image/maurice.png"
import plane_about from "../images/about-image/planeabout.jpg"


export default function About() {
    return (
        <div className="about-full-block">

            <div>
                <img className="plane-about" src={plane_about} alt="" srcset="" />
                <div className="about-title-main">
                    <h1>À propos de nous</h1>
                    <p className="team-title" >Notre équipe</p>
                </div>
            </div>

            <div className="row equip-sky">
                <div className="column">
                    <div className="card">
                        <div className="container-about">
                            <h2>Theesan</h2>
                            <p className="title">Founder & Développeur Fullstack</p>
                            <p className="our-names">Theesan Jeyasegar</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="container-about">
                            <h2>Sofiane</h2>
                            <p className="title">Développeur Fullstack</p>
                            <p className="our-names">Sofiane Sghiouar</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="container-about">
                            <h2>Amir</h2>
                            <p className="title">Développeur Fullstack</p>
                            <p className="our-names">Amir Ahmadi</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>


                <div className="last-block">
                    <div className="column">
                        <div className="card">
                            <div className="container-about">
                                <h2>Amir</h2>
                                <p className="title">Développeur Front-end</p>
                                <p className="our-names">Ishran Mohammad</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="container-about">
                                <h2>Ishran</h2>
                                <p className="title">Développeur Front-end </p>
                                <p className="our-names">Amir Kharmaz</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="block-airlines">
                <img className="airlines" src={airline1} alt="" srcset="" />
                <img className="airlines" src={airline2} alt="" srcset="" />
                <img className="airlines" src={airline3} alt="" srcset="" />
                <img className="airlines" src={airline4} alt="" srcset="" />
                <img className="airlines" src={airline5} alt="" srcset="" />
                <img className="airlines" src={airline6} alt="" srcset="" />
                <img className="airlines" src={airline7} alt="" srcset="" />
                <img className="airlines" src={airline8} alt="" srcset="" />
                <img className="airlines" src={airline9} alt="" srcset="" />
                <img className="airlines" src={airline10} alt="" srcset="" />

            </div>


            {/* footer */}
            <Footer />
        </div>

    )
}
