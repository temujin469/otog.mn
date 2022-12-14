import React, { useMemo } from 'react';
import { GoogleMap as Map, useJsApiLoader,Marker } from '@react-google-maps/api';
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';

// import mapStyles from '../../mapStyles';
// import useStyles from './styles.js';



const GoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCmqnQoG2zZDackMKVsdQ_kM3LEWH2mrRQ"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map:any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap(null)
  }, [])

  const center = useMemo(() => ({ lat: 47.9225, lng: 107.009}), []);
  // latitude: 47.9225,
  //   longitude: 107.009,

  return (
    isLoaded ? (
      <Map zoom={10} center={center} mapContainerClassName="map-container" onLoad={onLoad} onUnmount={onUnmount}>
        <Marker position={center} />
      </Map>
    ) : (
      <>dfd</>
    )
    
  )
};

export default GoogleMap;