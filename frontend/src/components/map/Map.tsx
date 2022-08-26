// import React, { useEffect, useState } from 'react';
// import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// import { RiMapPinFill } from 'react-icons/ri';
// // import maplibregl from 'maplibre-gl'


// type ViewPort = {
//   width: string,
//   height: string
//   latitude: number
//   longitude: number
//   zoom: number
// } | null

function Map() {
  // const [viewport, setViewport] = useState<ViewPort>({
  //   width: "100vw",
  //   height: "100vh",
  //   latitude: 46.8625,
  //   longitude: 103.8467,
  //   zoom: 4
  // });
  // const myLocalStorage = window.localStorage;
  // const [currentUser, setCurrentUser] = useState(myLocalStorage.getItem('user'))
  // const [currentPlace, setCurrentPlace] = useState<number>()
  // const [newPlace, setNewPlace] = useState<any>(
  //   {
  //     lat: 1,
  //     long: 1,
  //   }
  // )
  // const [showRegistrate, setShowRegistrate] = useState(false)
  // const [showLogin, setShowLogin] = useState(false)

  // const handleToggle = (toggle: any) => {
  //   if (toggle === setShowLogin) {
  //     setShowLogin(true)
  //     setShowRegistrate(false)
  //   }
  //   else {
  //     setShowLogin(false)
  //     setShowRegistrate(true)
  //   }
  // }

  // const handleLogout = () => {
  //   myLocalStorage.removeItem("user")
  //   setCurrentUser(null)
  // }

  // const handleAddClick = (e: any) => {
  //   const [longitude, latitude] = e.lngLat
  //   setNewPlace({
  //     lat: latitude,
  //     long: longitude
  //   })
  // }



  // const handleMarkerClick = (id: number, latitude: number, longitude: number) => {
  //   setCurrentPlace(id)
  //   setViewport({ ...viewport, latitude, longitude })
  // }

  // const [pins,setPins] = useState([])

  // useEffect(()=>{
  //   const getPins = async ()=>{
  //     try{
  //       const res = await AxiosInstance.get("/pins");
  //       setPins(res.data)
  //     }
  //     catch(err){
  //       console.log(err);
  //     }
  //   }
  //   getPins();
  // },[])


  return (
    // <div className='w-full h-full'>
    //   <ReactMapGL
    //     {...viewport}
    //     mapStyle="mapbox://styles/temujin469/cky8tfm4x78jz14p6sehuikg9"
    //     // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    //     initialViewState={{
    //       longitude: -122.4,
    //       latitude: 37.8,
    //       zoom: 14
    //     }}
    //     // onViewportChange={(nextViewport:any) => setViewport(nextViewport)}
    //     onDblClick={handleAddClick}
    //     // transitionDuration="500"
    //     doubleClickZoom={false}

    //     mapLib={maplibregl} 
    //   >
    //     {/* {pins.map((pin:any, index:number) =>
    //       <div key={index}>
    //         <Marker latitude={pin.latitude} longitude={pin.longitude} offsetLeft={-10} offsetTop={-18} className='z-0'>
    //           <RiMapPinFill className={pin.username === currentUser ? 'text-amber-400' : 'text-blue-500'} style={{ fontSize: "20px" }} onClick={() => handleMarkerClick(pin._id, pin.latitude, pin.longitude)} />
    //         </Marker>
    //         {pin._id === currentPlace && (
    //           <Popup
    //             latitude={pin.latitude}
    //             longitude={pin.longitude}
    //             closeButton={true}
    //             closeOnClick={false}
    //             onClose={() => setCurrentPlace(null)}
    //             anchor="bottom"
    //             className='z-10 rounded-lg'
    //           >
    //             <Comment pin={pin} currentUser={currentUser} />
    //           </Popup>)
    //         }
    //       </div>
    //     )} */}
    //     {newPlace && (
    //       <Popup
    //         latitude={newPlace.lat}
    //         longitude={newPlace.long}
    //         closeButton={true}
    //         closeOnClick={false}
    //         onClose={() => setNewPlace(null)}
    //         anchor="bottom"
    //       >
    //         {/* <AddComment currentUser={currentUser} lat={newPlace.lat} long={newPlace.long} setPins={setPins} pins={pins} setNewPlace={setNewPlace} setShowLogin={setShowLogin} /> */}
    //       </Popup>
    //     )}
    //     {/* <div className='flex justify-between p-2 text-white'>
    //       {currentUser ? (
    //         <div className='gap-3 flex'>
    //           <button className='px-3 p-2 bg-blue-500 rounded hover:bg-yellow-400' onClick={handleLogout}>Гарах</button>
    //         </div>
    //       ) : (
    //         <div className='flex gap-3'>
    //           <button className='px-3 p-2 bg-yellow-400 rounded hover:bg-blue-500' onClick={() => handleToggle(setShowRegistrate)}>Бүртгүүлэх</button>
    //           <button className='px-3 p-2 bg-yellow-400 rounded hover:bg-blue-500' onClick={() => handleToggle(setShowLogin)}>Нэвтрэх</button>
    //         </div>
    //       )}
    //     </div> */}
    //     map
    //   </ReactMapGL>
    // </div>
    <div className='bg-primary w-full h-full flex justify-center items-center'>
      <p>Map</p>
    </div>
  );
}

export default Map;