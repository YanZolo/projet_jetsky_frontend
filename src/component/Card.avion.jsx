
import React from "react";
import '../css/card.avion.css'
import Footer from "../component/Footer";




export default function CardPlane(props) {
  const { categories } = props


  return (
    <>

      <div className="header-avion-models">
    
      </div>
      <div className="line-separation-blocks-1"></div>
      <div className='container-card-avion'>
        <p>

          Tous les avions privés offrent à leurs passagers le même confort et le même niveau de service au sol - terminaux privés (FBO), installations VIP, lignes de sécurité raccourcies ou inexistantes, installations d'immigration et de douane privées et possibilité de se rendre en voiture jusqu'à l'avion (dans certains aéroports). Cependant, une fois que vous avez franchi les portes du terminal privé et que vous vous dirigez vers le jet qui vous attend, aucun type d'avion n'est identique.
        </p>


        <div className="card-avion" >
          <div className="card-container-infos">
            <h3>Turbo props</h3>
            <ul className='list'>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-plane'></i>
                </span>
                <span className='title-detail-li'>Max pax: 9</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-group'></i>
                </span>
                <span className='title-detail-li'>max range: 1702 nm</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-up-arrow-alt'></i>
                </span>
                <span className='title-detail-li'>cabin heigth: 4'5</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-credit-card'></i>
                </span>
                <span className='title-detail-li'>hourly rate: $1,200 - $1800</span>
              </li>
            </ul>
          </div>
          <button onClick={() => categories('turboprops')}>show</button>
        </div>

        <div className="card-avion" >
          <div className="card-container-infos">
            <h3>Light jets</h3>
            <ul className='list'>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-plane'></i>
                </span>
                <span className='title-detail-li'>Max pax: 7</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-group'></i>
                </span>
                <span className='title-detail-li'>max range: 1900 nm</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-up-arrow-alt'></i>
                </span>
                <span className='title-detail-li'>cabin heigth: 4'8</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-credit-card'></i>
                </span>
                <span className='title-detail-li'>hourly rate: $2,200 - $2800</span>
              </li>
            </ul>
          </div>
          <button onClick={() => categories('lightJet')}>show</button>
        </div>


        <div className="card-avion" >
          <div className="card-container-infos">
            <h3>mid-size jets</h3>
            <ul className='list'>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-plane'></i>
                </span>
                <span className='title-detail-li'>Max pax: 8</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-group'></i>
                </span>
                <span className='title-detail-li'>max range: 2850 nm</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-up-arrow-alt'></i>
                </span>
                <span className='title-detail-li'>cabin heigth: 5'8</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-credit-card'></i>
                </span>
                <span className='title-detail-li'>hourly rate: $2,700 - $3,800</span>
              </li>
            </ul>
          </div>
          <button onClick={() => categories('midSizeJet')}>show</button>
        </div>




        <div className="card-avion" >
          <div className="card-container-infos">
            <h3>heavy jets</h3>
            <ul className='list'>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-plane'></i>
                </span>
                <span className='title-detail-li'>Max pax: 16</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-group'></i>
                </span>
                <span className='title-detail-li'>max range: 4690 nm</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-up-arrow-alt'></i>
                </span>
                <span className='title-detail-li'>cabin heigth: 6'5</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-credit-card'></i>
                </span>
                <span className='title-detail-li'>hourly rate: $5,000 - $7,200</span>
              </li>
            </ul>
          </div>
          <button onClick={() => categories('heavyJet')}>show</button>
        </div>
        <div className="line-separation-blocks-2-avion"></div>
      </div>
      <Footer />

    </>


  )

}




