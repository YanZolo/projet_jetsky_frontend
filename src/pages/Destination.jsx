import React, { useEffect } from 'react';
import '../css/destination.css';
import $ from 'jquery';
// import { Controller, Scene } from "react-scrollmagic";
import { Power3, gsap, TimelineLite } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imag1 from '../images/destination/ArcParis.jpg';
import imag2 from '../images/destination/NewYorkk.jpg';
import imag3 from '../images/destination/rome.webp';
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(ScrollTrigger);


export default function Destination() {

    // let sektion = useRef(null);
    // let projetInfo = useRef(null);
    // let imag = useRef(null);
    // const projetInfo = useRef(null);
    // const smallTitle = useRef(null);
    let tl = new TimelineLite({ delay: 0.5 });

    useEffect(() => {
        // tl.from(".box", 1.2, { x: 30, scale: 1.5 }, { skewX: 0, xPercent: 100, transformOrigin: "0 % 100 %", ease: Power3.easeOut })
        // tl.from(".projet-info", 2, { y: 1230, scale: 1.5 }, { skewX: 0, xPercent: 100, transformOrigin: "0 % 100 %", ease: Power3.easeOut })
        // tl.from("h4", 1.2, { y: 300, scale: 1.5 }, { skewX: 0, xPercent: 10, transformOrigin: "0 % 100 %", ease: Power3.easeIn })
        // let tl = gsap.TweenMax;
        $('section').each(function () {
            let imag = $(this).find(".box")
            let projetInfo = $(this).find(".projet-info")
            let projetText = $(this).find("h4")
            // TweenMax.to(sektion, 1, { css: { visibility: 'visible' } })

            tl.from(imag, 1.2, { x: 30, scale: 1.5 }, { skewX: 0, xPercent: 100, transformOrigin: "0 % 100 %", ease: Power3.easeOut })
            tl.from(projetInfo, 2, { y: 1230, scale: 1.5 }, { skewX: 0, xPercent: 100, transformOrigin: "0 % 100 %", ease: Power3.easeOut })
            tl.from(projetText, 1.2, { y: 300, scale: 1.5 }, { skewX: 0, xPercent: 10, transformOrigin: "0 % 100 %", ease: Power3.easeIn })
            // console.log(sektion);
            // console.log(imag);
            // tl.from(smallTitle.current, { autoAlpha: 0, y: 3 }, ".=0.8")
        })
        gsap.from('.saction', {
            duration: 1.2,
            yPercent: 100,
            opacity: 0,
            ease: "ease-in",
            scrollTrigger: {
                trigger: '.box',
                start: "top top",
                // end: "top 90%",
                scrub: true,
                // markers: true,
                // toggleActions: "restart complete reverse pause"
            }
        })
        gsap.from('.saction3', {
            duration: 1.2,
            yPercent: 100,
            opacity: 0,
            ease: "ease-in",
            scrollTrigger: {
                trigger: '.box',
                start: "bottom",
                // end: "top 90%",
                scrub: 2,
                // toggleActions: "restart complete reverse pause"
            }
        })
    })


    return (
        <>
            <div className="p-4 mt-4">
                <h1 className="text-center" style={{ color: "white" }}>Choisissez votre destination</h1>
            </div>
            {/* section 1 */}
            <section className="mt-3 section">
                <div className="grillCSS Projet projet-left">
                    <div className="box">
                        <img className="destina-image" src={imag1} alt="left" />
                        <div className="overlay"></div>
                    </div>

                    <div className="projet-info">
                        <p className="small-title"><strong>PARIS</strong></p>
                        <h6 className="AKairports">Tour Eiffel, Cathédrale Notre-Dame, Centre Pompidou, Musée du Louvres, Paris est une des villes les plus touristiques du monde avec près de 20 millions de visiteurs par an.</h6>
                        <p href="/Destination" className="projet-link">Les aéroports :
                            <ul className="AKairports">
                                <li>Roissy Charles-De-Gaulle </li>
                                <li>Aéroport de Paris-Orly</li>
                                <li>Aéroport de Paris-Le Bourget</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </section>
            {/* section 2 */}
            {/* ref={el => sektion = el}  */}
            <section className="mt-5 section saction">
                <div className="grillCSS Projet projet-right">
                    <div className="box">
                        <img className="destina-image" src={imag2} alt="right" />
                        <div className="overlay"></div>
                    </div>

                    <div className="projet-info">
                        <p className="small-title"><strong>NEW-YORK</strong> </p>
                        <h6 className="AKairports">C'est la capitale du style américain, là où se trouvent l'Empire State Building, Times Square, Central Park et la statue de liberté</h6>
                        <p href="/Destination" className="projet-link"> Les aéroports :
                            <ul className="AKairports">
                                <li>JFK International Airport </li>
                                <li> LaGuardia Airport </li>
                                <li>Newark Liberty International Airport</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </section>
            {/* section 3 */}
            <section className="mt-5 mb-5 section saction3">
                <div className="grillCSS Projet projet-left">
                    <div className="box box3">
                        <img className="destina-image" src={imag3} alt="down" />
                        <div className="overlay"></div>
                    </div>

                    <div className="projet-info">
                        <p className="small-title"><strong>ROME</strong></p>
                        <h6 className="AKairports">De par son histoire très ancienne, Rome est une ville très riche en monuments et musées, et son centre est classé depuis 1980 au patrimoine mondial de l'humanité. C'est ainsi la deuxième ville la plus visitée au monde</h6>
                        <p href="/Destination" className="projet-link">
                            Les aéroports :
                            <ul className="AKairports">
                                <li >Rome-Fiumicino</li>
                                <li> Rome-Ciampino</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
