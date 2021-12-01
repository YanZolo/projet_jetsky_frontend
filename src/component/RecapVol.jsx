import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/recapVol.css'
import Map from './Map';

export default function RecapVol(props) {
    const { from, to, departurDate, departurTime, passengers, returnDate, returnTime, setBooked } = props
    const [email, setEmail] = useState('')

    const navigate = useNavigate()
    const handleDevis = () => {
        navigate('/demande-devis', { state: email })
    }

    useEffect(() => {
        console.log('email :>> ', email);
        window.scroll(4.8, 204.8)
    }, [email])


    return (
        <>

            <button
                className="BtnReturnResearch"
                onClick={() => setBooked(false)}
            >Retour</button>
            <div className="container-recap">
                <div className="blockLeftRecap">

                    {from === "Paris-Orly" &&
                        <p>Le vol privé de <strong>{from}</strong> à <strong>{to}</strong> a une distance d'environ 1109 km et un temps de vol d'environ 2 heures et 9 minutes. Étant donné la distance totale du vol et le nombre d'heures de vol, il est conseillé de voler avec un jet léger ou moyen. Les deux aéroports ont une longue piste et permettent l'atterrissage de n'importe quel avion. Le vol n'a pas besoin de faire étape pour l’approvisionnement de carburant.</p>

                    }
                    {from === "Roissy Charles de Gaulle" ?
                        <p>Le vol privé de <strong>{from}</strong> à <strong>{to}</strong> a une distance d'environ 5834 km et un temps de vol d'environ 7 heures et 41 minutes. Ce vol ne peut pas être effectué par un jet léger, compte tenu de la distance totale et du nombre d'heures de vol. Nous recommandons d'utiliser un jet large. Les deux aéroports ont une longue piste et permettent l'atterrissage de n'importe quel avion. Le vol peut exiger de faire étape pour l’approvisionnement de carburant.</p>
                        :
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste quisquam a repellat eligendi, consectetur eum ipsa maiores cum deleniti nemo laboriosam, distinctio sapiente accusantium nostrum sunt voluptatem ea neque dolor possimus deserunt. Sunt, ut hic! Aspernatur ut officia laudantium ab a facilis adipisci. Sapiente praesentium suscipit corporis voluptate quidem facere in accusamus distinctio! Iste voluptatibus accusamus eos blanditiis, dolore, delectus, eligendi expedita tempora sunt ipsam magni deserunt dicta velit nobis officiis? Doloribus alias dolorum ab. Et blanditiis, non assumenda iste nisi, magnam corporis distinctio repellat eaque aut facilis numquam unde qui dignissimos veritatis quae obcaecati alias fugit animi perspiciatis!</p>

                    }
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="entrez votre email" />


                    <button onClick={handleDevis} className='btn-payer'>Demandez un devis</button>

                </div>
                <div className="blockRightMap">
                    <Map from={from}
                        to={to}
                        departurDate={departurDate}
                        departurTime={departurTime}
                        passengers={passengers}
                        returnDate={returnDate}
                        returnTime={returnTime} />
                </div>
            </div>



        </>
    )
}
