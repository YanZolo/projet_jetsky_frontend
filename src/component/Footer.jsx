import React from 'react'
import "../css/home.css"
import { Link } from "react-router-dom";
import logo from '../images/logo1.png'

export default function Footer() {
    return (
        <div>
            <div class="footer-dark text-center">
                <footer>
                    <div class="container">
                        <img src={logo} className="logo" alt="" srcset="" />
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">

                                <h3>Services</h3>
                                <ul>
                                    <li><Link to="/Avions">
                                        Avions
                                    </Link></li>
                                    <li><Link to="/Destination">
                                        Destinations
                                    </Link></li>
                                    <li><Link to="/Reserch">
                                        Réservez votre vol
                                    </Link></li>
                                    <li> <Link to="/Aproposdenous">
                                        À propos de nous
                                    </Link></li>


                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li> <Link className="#" to="/Avions">
                                        Avions
                                    </Link></li>
                                    <li><Link className="#" to="/Destination">
                                        Destinations
                                    </Link></li>
                                    <li><Link className="#" to="/Reserch">
                                        Réservez votre vol
                                    </Link></li>
                                </ul>
                            </div>
                            <div class="col-md-6 item text">
                                <h3>SKYJET</h3>
                                <p>Praesent sed lobortis mi</p>
                            </div>
                            <div><p class="copyright">Company Name © 2021</p></div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
