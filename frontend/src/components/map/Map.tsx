import React, { useState } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css'
// import PopupHotel from './PopupHotel';
// import classNames from 'classnames';
import { Hotel } from '../../typings';
// import NumberFormat from 'react-number-format';





type Props = {
  hotels: Hotel[]
}

const Mapbox = ({ hotels }: Props) => {
  const [viewState, setViewState] = React.useState({
    latitude: 47.9225,
    longitude: 107.009,
  });
  const [clickedHotel, setClickedHotel] = useState<string | null>(null)

  const handleClick = (lat: number, long: number, hotelId: string) => {
    // setViewState({
    //   latitude: lat +0.1,
    //   longitude: long,
    // })
    setClickedHotel(hotelId)
  }

  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAP_TOKEN as string
  });

  return (
    <Map
      // {...viewState}
      // initialViewState={{
      //   zoom: 9,
      // }}
      // onMove={evt => !clickedHotel && setViewState(evt.viewState)}
      style="mapbox://styles/mapbox/streets-v10"
      // mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN as string}
      // style={{
      //   transition: "all",
      //   transitionDuration: "500s"
      // }}
      containerStyle={{
        height: '100%',
        width: '100%'
      }}
      // onMouseOut={() => setClickedHotel(null)}
      onDragStart={() => setClickedHotel(null)}
    >
      {/* {
        hotels?.map(hotel => (
          <div key={hotel.id}>
            <Popup
              longitude={hotel.lacation.long}
              latitude={hotel.lacation.lat}
              closeButton={false}
              className={classNames('pin cursor-pointer p-0 hover:z-10 select-none', { "hidden": hotel.id === clickedHotel })}>
              <p onClick={() => handleClick(hotel.lacation.lat, hotel.lacation.long, hotel.id)}>
                <NumberFormat value={hotel.price} displayType={'text'}
                  thousandSeparator={true} />₮
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
      } */}
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  );
};

export default Mapbox;