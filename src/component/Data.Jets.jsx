import React, { useEffect } from 'react';
import data from '../dataJson/AircraftData'
import Typical from 'react-typical'
import '../css/detail.avion.css'
import Footer from './Footer';



const DataJets = (props) => {
    const { category } = props
    const chosenCategory = data[category]
    console.log('data :>> ', data);
    console.log('category :>> ', category);
    console.log('chosenCategory :>> ', chosenCategory);

    useEffect(()=>{
        window.scroll(0,0)
    },[])



    return (



        <div className='container-detail-avion'>


            <h1 style={{ position: "absolute", top: "5rem", left: "5%", color: "white", zIndex: "222", width: "auto" }}>
                <Typical loop={1} wrapper='b' steps={[
                    'Model', 1000, chosenCategory.title, 1000
                ]} />
            </h1>
            <button className="btn-return-aircrafts" onClick={() => window.location.reload()} >retour</button>

            {chosenCategory &&
                <>
                    <div  className="header-avion-detail">
                        <img className="img-header"  src={chosenCategory.images.exterior} alt={chosenCategory.title} />
                    </div>
                    <div className="line-separation-blocks-1"></div>
                    <section className="description-specification" >
                        <div className="aircraft-info">
                            <div className="title-lines">
                                <h2>{chosenCategory.title}</h2>
                                <div className="lines">
                                    <div className="line-1"></div>
                                    <div className="line-2"></div>
                                    <div className="line-3"></div>
                                </div>
                            </div>
                            <p>{chosenCategory.description[1]}</p>
                        </div>
                        <div className="aircraft-specification">

                            <ul className="list-detail-ul">
                                <li className="list-detail-li">CAPACITÉ DE PASSAGERS :<span>{chosenCategory.specification['PASSENGER CAPACITY']}</span></li>

                                <li className="list-detail-li">MEILLEUR GAMME :<span>{chosenCategory.specification['MAX RANGE'][1]}</span></li>

                                <li className="list-detail-li">VITESSE OPÉRATIONNELLE MAX :<span>{chosenCategory.specification['MAX OPERATIONAL SPEED'][1]}</span></li>

                                <li className="list-detail-li">HAUTEUR DE LA CABINE :<span>{chosenCategory.specification['CABIN HEIGHT'][1]}</span></li>

                                <li className="list-detail-li">LARGEUR DE LA CABINE :<span>{chosenCategory.specification['CABIN WIDTH'][1]}</span></li>

                                <li className="list-detail-li">LONGUEUR DE LA CABINE :<span>{chosenCategory.specification['CABIN LENGTH'][1]}</span></li>

                            </ul>
                        </div>
                    </section>

                    <section className="cabin-section">
                    <div className="line-separation-blocks-2"></div>
                        <img className="img-cabin" src={chosenCategory.images.cabin} alt={chosenCategory.title} />
                    </section>
                    <div className="line-separation-blocks-3"></div>
                    <Footer />
                </>
            }
        </div>

    );
};

export default DataJets;