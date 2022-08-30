import React, { useState } from 'react';
import Map, { Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css'
import PopupHotel from './PopupHotel';
import classNames from 'classnames';
import { Hotel } from '../../typings';

type Props = {
  hotels: Hotel[]
}

const Mapbox = ({ hotels }: Props) => {
  const [viewState, setViewState] = React.useState({
    latitude: 46.8625,
    longitude: 103.8467,
  });
  const [clickedHotel, setClickedHotel] = useState<string | null>(null)

  const handleClick = (lat: number, long: number, hotelId: string) => {
    // setViewState({
    //   latitude: lat +0.1,
    //   longitude: long,
    // })
    setClickedHotel(hotelId)
  }

  return (
    <Map
      {...viewState}
      initialViewState={{
        zoom: 4,
        latitude: 46.8625,
        longitude: 103.8467,
      }}
      onMove={evt => !clickedHotel && setViewState(evt.viewState)}
      mapStyle="mapbox://styles/temujin469/cl7g1z4p2001114nyga575att"
      mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN as string}
      style={{
        transition: "all",
        transitionDuration: "500s"
      }}
      // onMouseOut={() => setClickedHotel(null)}
      onDragStart={() => setClickedHotel(null)}
    >
      {
        hotels?.map(hotel => (
          <div key={hotel.id}>
            <Popup
              longitude={hotel.lacation.long}
              latitude={hotel.lacation.lat}
              closeButton={false}
              className={classNames('pin cursor-pointer p-0 hover:z-10', { "hidden": hotel.id === clickedHotel })}>
              <p onClick={() => handleClick(hotel.lacation.lat, hotel.lacation.long, hotel.id)}>
                {`₮${hotel.price}`}
              </p>
            </Popup>
            {hotel.id === clickedHotel && (
              <Popup
                latitude={hotel.lacation.lat}
                longitude={hotel.lacation.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setClickedHotel(null)}
                className='z-20'
              >
                <PopupHotel hotel={hotel} />
              </Popup>)
            }
          </div>
        ))
      }
    </Map>
  );
};

export default Mapbox;