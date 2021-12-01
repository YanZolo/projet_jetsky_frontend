import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/input.css'
import image from '../video/hdtack.mp4'
import Typical from 'react-typical'
import RecapVol from './RecapVol'
import Footer from './Footer'
// import Modal from './modal'

// import img from '../images/airplan.jpg'
// import { Form, Button, Col, Row } from 'react-bootstrap';

export default function Search() {
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [simpleGo, setSimpleGo] = useState("")
    const [goAndReturn, setGoAndReturn] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [passengers, setpassengers] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [retour, setRetour] = useState(true)
    const [dateretour, setDateretour] = useState("")
    const [timeretour, setTimeretour] = useState("")
    const [booked, setBooked] = useState(false)


    useEffect(() => {

        // aller
        console.log('from :>> ', from);
        console.log('to :>> ', to);
        console.log('dateDépart :>> ', date);
        console.log('heureDépart :>> ', time);
        console.log('passengers :>> ', passengers);

        // retour
        console.log('dateretour :>> ', dateretour);
        console.log('timeretour :>> ', timeretour);

        // is booked ?
        console.log('is booked :>> ', booked);

    }, [from, to, date, time, passengers, dateretour, timeretour, booked])


    const handleDepartureFrom = (e) => {
        setFrom(e.target.value)
        const searchResultsFrom = document.getElementById('searchResultsFrom');
        let match = e.target.value.match(/^[a-zA-Z]*/);
        let match2 = e.target.value.match(/\s*/);
        if (match2[0] === e.target.value) {
            searchResultsFrom.innerHTML = '';
            return;
        }
        if (match[0] === e.target.value) {

            fetch(process.env.REACT_APP_URL_SERVER + "airports/departure", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ payload: e.target.value })
            })
                .then(res => res.json())
                .then(data => {
                    let payload = data.payload
                    searchResultsFrom.innerHTML = '';
                    console.log('payload :>> ', payload);
                    if (payload.length < 1) {
                        searchResultsFrom.innerHTML = '<p> Sorry Nothing Found </p>';
                        return
                    }
                    payload.forEach((item, index) => {
                        if (index > 0) searchResultsFrom.innerHTML += '<hr>';
                        searchResultsFrom.innerHTML += `<p>${item.name}</p>`
                    })

                })
                .catch(error => console.error(error));
            return;
        }
        // searchResultsFrom.innerHTML = '';

    };


    const handleDepartureTo = (e) => {
        setTo(e.target.value)
        const searchResultsTo = document.getElementById('searchResultsTo');
        let match = e.target.value.match(/^[a-zA-Z]*/);
        let match2 = e.target.value.match(/\s*/);
        if (match2[0] === e.target.value) {
            searchResultsTo.innerHTML = '';
            return;
        }
        if (match[0] === e.target.value) {

            fetch(process.env.REACT_APP_URL_SERVER + "airports/departure", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ payload: e.target.value })
            })
                .then(res => res.json())
                .then(data => {
                    let payload = data.payload
                    searchResultsTo.innerHTML = '';
                    console.log('payload :>> ', payload);
                    if (payload.length < 1) {
                        searchResultsTo.innerHTML = '<p> Sorry Nothing Found </p>';
                        return
                    }
                    payload.forEach((item, index) => {
                        if (index > 0) searchResultsTo.innerHTML += '<hr>';
                        searchResultsTo.innerHTML += `<p>${item.name}</p>`
                    })
                })
            return;
        }
        searchResultsTo.innerHTML = '';
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (from && to && date && time && passengers) {
            setBooked(true)
            console.log(' succes all fields are complete !');
        } else {
            console.error('saisir From ... et To ...');
        }


    }

    function Affiche() {
        setRetour(!retour)
    }

    return (


        <>
            {/* <Modal /> */}
            <video className="vid" loop muted autoPlay>
                <source src={image} />
            </video>

            {!booked ?

                <div className="col-12 pb-5 mb-5 ">


                    <form className="container mb-5 ms-5 col-4 m-3  rounded-5 mt-5 p-4 pt-5" >
                        <div>
                            <div className="form-check">
                                <label htmlFor="check1">
                                <input                                    
                                    onChange={(e) => setSimpleGo(e.target.value)} className="form-check-input"
                                    value="ALLER SIMPLE"
                                    type="checkbox"
                                    id="check1" />
                                    <p className='aller-retour'>aller simple</p>
                                </label>

                            </div>
                        </div>
                        <div>
                            <div className="form-check">
                                <label htmlFor="check2">
                                <input                                   
                                    type="checkbox"
                                    onChange={(e) => setGoAndReturn(e.target.value)} className="form-check-input"
                                    value="ALLER RETOUR"
                                    id="check2"
                                    onClick={() => Affiche()}
                                />
                                    <p className='aller-retour'>aller retour</p>
                                </label>
                            </div>
                        </div>

                        {/* start of input  */}

                        {/* input departure from */}
                        <div className="mb-3 fusterA">
                            <input
                                type="text"
                                onChange={(e) => handleDepartureFrom(e)} className="form-control"
                                placeholder="Départ ..."
                                value={from} />
                            <i class="fas fa-plane-departure"></i>
                        </div>

                        <section onClick={(e) => {
                            setFrom(e.target.innerText)
                            const searchResultsFrom = document.getElementById('searchResultsFrom')
                            searchResultsFrom.innerHTML = ''
                        }} id="searchResultsFrom">

                        </section>

                        {/* input departure to */}
                        <div className="mb-3 fusterB">
                            <input
                                type="text"
                                onChange={(e) => handleDepartureTo(e)} className="form-control"
                                placeholder="Arrivée..."
                                value={to}
                            />
                            <i className="fas fa-plane-arrival"></i>
                        </div>

                        <section onClick={(e) => {
                            setTo(e.target.innerText)
                            const searchResultsTo = document.getElementById('searchResultsTo')
                            searchResultsTo.innerHTML = ''
                        }} id="searchResultsTo" >

                        </section>

                        {/* input date de départ */}
                        <div className="mb-3">
                            <input
                                id="selectDate"
                                type="date"
                                onChange={(e) => {
                                    setDate(e.target.value)
                                    console.log('dateDépart :>> ', date);
                                }} className="form-control" />
                        </div>

                        {/* input heure de départ */}

                        <div className="mb-3">
                            <input
                                type="time"
                                onChange={(e) => setTime(e.target.value)} className="form-control" />
                        </div>

                        {/* input number of passengers */}

                        <div className="mb-3 passenger">
                            <input
                                type="number"
                                list="quantities"
                                onChange={(e) => setpassengers(e.target.value)} className="form-control"
                                placeholder="passagers"
                            />
                            <datalist id="quantities">
                                <option value="19">19</option>
                                <option value="18">18</option>
                                <option value="17">17</option>
                                <option value="16">16</option>
                                <option value="15">15</option>
                                <option value="14">14</option>
                                <option value="13">13</option>
                                <option value="12">12</option>
                                <option value="11">11</option>
                                <option value="10">10</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                                <option value="7">7</option>
                                <option value="6">6</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </datalist>
                            <i className="fa fa-user fa-lg"></i>
                        </div>

                        {!retour &&
                            <>
                                <div>
                                    <p className="p-search">Return :</p>
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="date"
                                        onChange={(e) => setDateretour(e.target.value)}
                                        className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="time"
                                        onChange={(e) => setTimeretour(e.target.value)}
                                        className="form-control" />
                                </div>
                            </>
                        }

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="btn">
                            Rechercher
                        </button>
                    </form>


                    <div className="position-absolute top-50 start-50 text-center d-flex flex-row-reverse" >
                        <h1 style={{ color: "white" }}>
                            <Typical loop={Infinity} wrapper="b" steps={[
                                'PARIS', 1000, 'LONDON', 1000, 'NEW YORK', 1000, 'Partout dans le monde', 1000
                            ]} />
                        </h1>
                    </div>
                </div>
                :

                <RecapVol
                    from={from}
                    to={to}
                    departurDate={date}
                    departurTime={time}
                    passengers={passengers}
                    returnDate={dateretour}
                    returnTime={timeretour}
                    setBooked={setBooked}
                />



            }

            <Footer />


        </>
    )
}

