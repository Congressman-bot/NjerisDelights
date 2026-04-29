// import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from "@vis.gl/react-google-maps";
// import React, { useState } from "react";

// function MapLocation(){
//     const position = { lat: -1.0555505, lng: 37.0009703 };
//     // const [open, setOpen] = useState(false);
//     const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API;
//     const mapId = import.meta.env.VITE_MAP_ID || 'DEMO_MAP_ID'

//     return (
//         <div className="w-full h-full rounded-2xl">
//             <APIProvider apiKey={apiKey}>
//                 <Map
//                     defaultCenter={position}
//                     defaultZoom={13}
//                     mapId={mapId}
//                 >
//                     <AdvancedMarker
//                         position={position}
//                         // onClick={() => setOpen(true)}
//                     >
//                         <Pin className="bg-red/20 border border-gray/30" />
//                     </AdvancedMarker>
//                 </Map>
//             </APIProvider>
//         </div>
//     );
// }

// export default MapLocation;