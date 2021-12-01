import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/devis.css'

const MailDevis = (props) => {
    const { state } = useLocation()
    console.log('props.location.state :>> ', state);


    return (
        <>
            <div className="avion-effet-hublot"></div>
            <div className='container-devis'>
                <div className="clouds-devis"></div>
                <div className="clouds-devis-2"></div>
                <div className="container-devis-message">
                    <Link to='/'>
                        <button className="btn-devis-envoyé">retour à la page d'acceuil</button>
                    </Link>
                    <h1>Demande de devis confirmé.</h1>
                    <p>Vous recevrez un email à l'adresse suivante: <strong>{state}</strong></p>
                    <p>Merci pour votre confiance.</p>
                </div>
                <div className="avion-effet-hublot-2"></div>
            </div>
        </>
    );
};

export default MailDevis;