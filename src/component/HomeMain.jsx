import React from 'react'
import bookingFlight from '../images/mini-photo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import imageOne from '../images/destination_photo/paris.jpg'
import imageTwo from '../images/destination_photo/ny.jpg'
import imageThird from '../images/destination_photo/rome.jpg'
import { Link } from "react-router-dom";
// import homeimg from '../images/destination_photo/planeh.jpg'
import back from '../video/hdback.mp4'
import Typical from 'react-typical'
import flight from '../images/aire.jpg'
import flight2 from '../images/confort.jpg'
import Footer from "../component/Footer"
import '../css/home.css'

export default function HomeMain() {
    return (
        <>

            {/* Le premier block */}
            <div className="col-12">
                {/* <img src={homeimg} alt="" className="img-plane" /> */}
                <video className="img-plane " loop muted autoPlay>
                    <source src={back} />
                </video>
                <h1 style={{ position: "absolute", top: "55%", left: "37%", color: "white", zIndex: "0" }}><strong>Welcome to</strong>  {' '}
                    <Typical loop={Infinity} wrapper="b" steps={[
                        'travel', 1000, 'SKY JET', 1000, 'New world', 1000
                    ]} />
                </h1>
            </div>


            {/* 2em Carousel les photos des destinations */}
            <div className="home-class">
                <h1 className='home-title'>Trouvez votre destination</h1>
                <div className="line-title"></div>
            </div>
            <div className="carousel">
                <Link className="nav-link" to="/Destination">

                    <Carousel>
                        <Carousel.Item interval={2500}>
                            <img
                                className="d-block"
                                src={imageOne}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className="paris">PARIS</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2500}>
                            <img
                                className="d-block"
                                src={imageTwo}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3 className="newyork">NEW-YORK</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2500} >
                            <img
                                className="d-block"
                                src={imageThird}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3 className="rome" >ROME</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Link>
            </div>

            {/* 3em Reserver un vol */}
            <div className="home-class">
                <h1 className='home-title'>Réservez votre vol</h1>
                <div className="line-title"></div>
            </div>

            <div className="all-block">
                <img
                    className="booking-flight"
                    src={bookingFlight}
                    alt="Third slide"
                />

                <div className="grey-container"></div>
                <div style={{ color: "white" }} className="text-descri">
                    <h2 style={{ color: "white", fontWeight: "bolder" }}> PARTOUT DANS LE MONDE</h2>
                    <p style={{ color: "white" }}> Luxury Plane propose des options d’affrètement de jet privé entre tous les aéroports mondiaux</p>
                    <br />
                    <h2 style={{ color: "white", fontWeight: "bolder" }}> SÛRETÉ ET SÉCURITÉ</h2>
                    <p style={{ color: "white" }}> Un engagement sans compromis pour la sécurité est ce qui distingue véritablement Luxury Plane. La sérénité de nos clients imprègne chaque décision au sein de notre organisation..</p>
                    <br />
                    <h2 style={{ color: "white", fontWeight: "bolder" }}>AVIONS MODERNES</h2>
                    <p style={{ color: "white" }}>Notre affrètement de jet privé est équipé pour satisfaire toutes vos demande – que vous ayez besoin d’une suite d’affaires entièrement équipée ou d’un lieu reposant loin de la maison.</p>
                    <br />
                    <h2 style={{ color: "white", fontWeight: "bolder" }}> RAPIDE ET ABORDABLE</h2>
                    <p style={{ color: "white" }}>Les prix de l’aviation privée dépendent d’un certain nombre de facteurs, notamment la disponibilité des avions et les frais d’atterrissage à l’aéroport. Vous seriez surpris d’apprendre qu’un vol privé pourrait vous coûter moins cher que prévu.</p>

                </div>
            </div>
            <Link className="nav-link" to="/Reserch">
                <button className="btn-booking">Réservez votre vol</button>
            </Link>

            {/* fin 3em reserver un vol */}




            {/* 4 em block Nos avions  */}

            <div className="home-class">
                <h1 className='home-title'>Vos avions</h1>
                <div className="line-title"></div>
            </div>

            <div className="img-cont">
                <div className="first-block">
                    <h3><strong>Sécurite</strong></h3>
                    <p className="text-first" style={{ color: "white" }} >Tous les avions sont entretenus pour respecter et dépasser les normes de sécurité européennes fixées par l’Agence Européenne de la Sécurité Aérienne (EASA).</p>
                    <Link style={{ position: "relative", top: "1rem" }} className="link" to="/Avions">
                        En savoir +
                    </Link>
                </div>

                <div className="second-block">
                    <img className="flight-one" src={flight} alt=" tof d'un avion" />
                    <div className="text-snd">
                        <h3><strong>Confort</strong></h3>
                        <p style={{ position: "relative", top: "2rem", color: "white" }} className="text-second"> Voler devrait être un plaisir et nous rendrons votre expérience de vol aussi luxueuse et confortable que possibles</p>
                        <Link style={{ position: "relative", top: "2rem" }} className="link" to="/Avions">
                            En savoir +
                        </Link>
                    </div>
                    <img className="flight-two" src={flight2} alt="tof d'un avion" />
                </div>
            </div>

            {/* fin 4em block Nos avions */}


            {/* dernier block de footer  */}

            <Footer />


        </>
    )
}
