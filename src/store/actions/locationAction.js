import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/configure";


export const FETCH_LOCATIONS = "FETCH_LOCATIONS";
export const FETCH_LOCATIONS_SUCCESS = "FETCH_LOCATIONS_SUCCESS";
export const FETCH_LOCATIONS_FAILURE = "FETCH_LOCATIONS_FAILURE";   
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const SET_SELECTED_LOCATION = "SET_SELECTED_LOCATION";
export const SET_CURRENT_LOCATION = "SET_CURRENT_LOCATION";

const locationsCollection = collection(db, "locations");

//Action Creators
export const fetchLocationsRequest = () => {
    return {
        type: FETCH_LOCATIONS,
    };
}

export const fetchLocationsSuccess = (locations) => ({
    type: FETCH_LOCATIONS_SUCCESS,
    payload: locations,
  });
  
  export const fetchLocationsFailure = (error) => ({
    type: FETCH_LOCATIONS_FAILURE,
    payload: error,
  });
  
  export const setSearchTerm = (searchTerm) => ({
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  });

  export const setSelectedLocation = (location) => ({
    type: SET_SELECTED_LOCATION,
    payload: location,
  });

//   export const setCurrentLocation = (location) => ({
//     type: SET_CURRENT_LOCATION,
//     payload: location,
//   });

  export const fetchLocations = ()=> {
    return async (dispatch) => {
        dispatch(fetchLocationsRequest());
        try {
            const querySnapshot = await getDocs(locationsCollection);
            const locations = [];
            querySnapshot.forEach((doc) => {
                locations.push({ id: doc.id, ...doc.data() });
            });
            dispatch(fetchLocationsSuccess(locations));
        } catch (error) {
            dispatch(fetchLocationsFailure(error.message));
        }
    };
  }

  //Thunk Action
  export const startListeningForLocations = () => {
    return (dispatch) => {
      dispatch(fetchLocationsRequest());
      const unsubscribe = onSnapshot(
        locationsCollection,
        (snapshot) => {
          const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          dispatch(fetchLocationsSuccess(items));
        },
        (error) => {
          dispatch(fetchLocationsFailure(error.message));
        }
      );
      return unsubscribe;
    };
  };

//   export const getCurrentLocation = () => {
//     return (dispatch) => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const location = {
//               lat: position.coords.latitude,
//               long: position.coords.longitude,
//             };
//             dispatch(setCurrentLocation(location));
//           },
//           (error) => {
//             console.error('Error getting current location:', error);
//             if (error.code === error.PERMISSION_DENIED) {
//               console.log('User denied location permission.');
//             } else if (error.code === error.POSITION_UNAVAILABLE) {
//               console.log('Location information is unavailable.');
//             } else if (error.code === error.TIMEOUT) {
//               console.log('Location request timed out.');
//             }
//           },
//           {
//             enableHighAccuracy: false,
//             timeout: 10000,
//             maximumAge: 0,
//           }
//         );
//       } else {
//         console.error('Geolocation is not supported by this browser.');
        
//       }
//     };
//   };