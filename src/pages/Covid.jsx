import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import covid from '../images/covid/covid19.jpg'
import eco from '../images/covid/volta'

import '../css/covid.css'
import Footer from '../component/Footer';

export default function Covid() {
    return (

        <div>
            <section className="covid-one">
                <img className="ecoimg" src={eco} alt="" />
            </section>
            <section className="text-one">
                <h1>Notre démarche écologie</h1>
                <p>Les jets privés hybrides
                    Pour le marché du jet privé, l’hybride semble être une meilleure solution. On peut ainsi citer le VoltAreo, fruit de l’imagination d’une startup française implantée en Aquitaine. L’appareil fonctionne avec un moteur à combustion interne et trois moteurs électriques.
                    Trois jets privés sont en cours de développement (commercialisation prévue en 2022) : l’un de quatre places, le deuxième de six places et le dernier de 10 places. Côté autonomie, il pourra parcourir 1 350 kilomètres sur une durée de 3 heures et demie environ. Gros avantage ? Il n’a besoin que de 548 mètres pour décoller et atterrir. Et côté émissions de gaz à effet de serre il consomme 80 kg de carburant par heure contre 141 pour un avion à turbine. Les émissions de Co2 sont donc réduites.</p>
            </section>
            <hr />
            F

            <section className="eco-two">
                <img src={covid} className="covidimg" alt="Covid-img" />
                <section className="text-eco">
                    <h1>COVID-19</h1>
                    <p>Vous avez besoin de voyager pendant que le Coronavirus se propage ? Comment l'avion d'affaires répond à la demande croissante de vols en jet privé pendant le COVID-19 ?

                        Afin de faire face à la propagation rapide du coronavirus COVID-19 en Europe et dans le monde, et au danger qu'il représente pour la santé des voyageurs, les principales compagnies aériennes ont immobilisé des centaines d'avions ou interrompu leurs vols vers certaines destinations.

                        Pour faire face à cette baisse des vols commerciaux en Europe, SKYJET vous propose des solutions adaptées en jet privé pour répondre à vos besoins de déplacements urgents et éviter autant que possible d'être en contact avec des personnes susceptibles d'être porteuses du virus.

                        L'équipe d'SKYJET se tient informée de l'évolution du COVID-19 et des actualités produites dans le monde, notamment de l'EASA (European Aviation Safety Agency) :

                        Tous les membres d'équipage ont reçu un briefing sur les mesures spéciales à prendre afin d'empêcher la propagation du COVID-19.

                        L'aviation d'affaires vous garantit :

                        Accédez à votre propre avion par des terminaux privés, en évitant tout passage par des terminaux commerciaux ;
                        Voyagez dans des avions soigneusement nettoyés qui disposent également d'équipements de désinfection à bord pour assurer une sécurité maximale ;
                        Retour à votre lieu de départ dans la même journée, évitant ainsi tout séjour à l'hôtel.
                        SKYJET a pour mission de vous aider à trouver et à louer un avion privé disponible qui répond à vos besoins.
                        L'équipe de conseillers en aviation privée surveille en permanence l'évolution du coronavirus 2019 (COVID-19) ainsi que les conditions d'entrée dans les pays vers lesquels les clients souhaitent se rendre.

                        Pour plus d'informations, vous pouvez obtenir des mises à jour de l'Organisation mondiale de la santé ( OMS ), qui publie des nouvelles sur une page spécifique pour informer et conseiller sur l'évolution du coronavirus (COVID-19).</p>
                </section>
            </section>
            <hr />

            <section className="contact">
                <div className="contact-block">
                    <h1 style={{ marginBottom: "30px", fontWeight: "bold" }}  > Questions</h1>
                    <p> Un vol au plus près de vos besoins au meilleur tarif</p>
                    <p> Une optimisation maximale de votre temps de vol</p>
                    <p> Un interlocuteur disponible 24/24H 7/7J</p >
                    <p> Un représentant au départ du vol</p >
                    <p>Une discrétion garantie</p >
                    <p> Vous avez une question:</p >
                    <p>Appelez - nous au + 33(0)1 83 62 66 47</p>
                </div>


                <div className="nous-contacter">
                    <h1 style={{ marginBottom: "30px", fontWeight: "bold" }}  > Nous Contacter</h1>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Votre Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingPassword" placeholder="Prenom" />
                        <label for="floatingPassword">Prénom</label>
                    </div>

                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "90px" }} ></textarea>
                        <label for="floatingTextarea2">Commentaires</label>
                    </div>
                </div>
            </section >

            {/* footer */}
            <div>
                <div className="line-separation-blocks"></div>
                <Footer />
            </div>
        </div >
    )
}
