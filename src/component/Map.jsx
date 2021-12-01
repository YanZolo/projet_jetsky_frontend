import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = (props) => {
    const { from, to, departurDate, departurTime, passengers, returnDate, returnTime, setBooked } = props
    const [latitudeFrom, setLatitudeFrom] = useState("")
    const [longitudeFrom, setLongitudeFrom] = useState("")
    const [latitudeTo, setLatitudeTo] = useState("")
    const [longitudeTo, setLongitudeTo] = useState("")
    const [dataLoaded, setDataLoaded] = useState(false)


    const AnyReactComponent = () => (
        <div style={{
            color: '#E74C3C',
            fontSize: '1.1rem'
        }}>
            <i class="fas fa-map-marker"></i>
        </div>
    );

    const defaultProps = {
        center: { lat: 42.132004, lng: -31.396909 },
        zoom: 1
    };
  
    useEffect(() => {
       
        if (!dataLoaded) {

          
            async function getData() {
                await fetch(process.env.REACT_APP_URL_SERVER + "airports/map", {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ payload: { from, to } })
                })
                    .then(res => res.json())
                    .then(data => {
                        const latFrom = data.airportsFrom[0].latitude_deg
                        const lngFrom = data.airportsFrom[0].longitude_deg
                        const latTo = data.airportsTo[0].latitude_deg
                        const lngTo = data.airportsTo[0].longitude_deg
                        setLatitudeFrom(latFrom)
                        setLongitudeFrom(lngFrom)
                        setLatitudeTo(latTo)
                        setLongitudeTo(lngTo)
                        setDataLoaded(true)
                        console.log('latitudeFrom :>> ', latitudeFrom);
                        console.log('longitudeFrom :>> ', longitudeFrom);
                        console.log('latitudeTo :>> ', latitudeTo);
                        console.log('longitudeTo :>> ', longitudeTo);
                        console.log('latitudeFrom :>> ', data);
                    })
            }

            getData();
        }


    }, [dataLoaded])

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '500px', width: '600px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={latitudeFrom}
                    lng={longitudeFrom}
                />
                <AnyReactComponent
                    lat={latitudeTo}
                    lng={longitudeTo}
                />
            </GoogleMapReact>
        </div>
    );
}



export default Map;