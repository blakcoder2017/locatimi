// import React, { useEffect, useRef } from "react";
// import { useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

// let defaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
// });

// L.Marker.prototype.options.icon = defaultIcon;

// function MapComponent({ selectedLocation, defaultCenter = [7.9, -1.0], defaultZoom = 6 }) {
//   const map = useMap();
//   const selectedLocationMarkerRef = useRef(null);

//   useEffect(() => {
//     if (
//       selectedLocation &&
//       typeof selectedLocation.lat === "number" &&
//       typeof selectedLocation.long === "number"
//     ) {
//       const { lat, long, name } = selectedLocation;
//       const selectedLatLng = [lat, long];

//       if (selectedLocationMarkerRef.current) {
//         selectedLocationMarkerRef.current.setLatLng(selectedLatLng);
//         if (name) {
//           selectedLocationMarkerRef.current.bindPopup(name).openPopup();
//         } else {
//           selectedLocationMarkerRef.current.closePopup();
//         }
//       } else {
//         const newMarker = L.marker(selectedLatLng);
//         if (name) {
//           newMarker.bindPopup(name).openPopup();
//         }
//         newMarker.addTo(map);
//         selectedLocationMarkerRef.current = newMarker;
//       }

//       map.flyTo(selectedLatLng, 15);
//     } else {
//       if (selectedLocationMarkerRef.current) {
//         map.removeLayer(selectedLocationMarkerRef.current);
//         selectedLocationMarkerRef.current = null;
//       }
//       map.setView(defaultCenter, defaultZoom);
//     }
//   }, [selectedLocation, map, defaultCenter, defaultZoom]);

//   return null;
// }

// export default MapComponent;


