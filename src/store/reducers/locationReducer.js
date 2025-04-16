import { FETCH_LOCATIONS,FETCH_LOCATIONS_FAILURE,FETCH_LOCATIONS_SUCCESS, SET_SELECTED_LOCATION, SET_SEARCH_TERM, SET_CURRENT_LOCATION } from "../actions/locationAction";

const initialState = {
    locations: [],
    loading: false,
    error: null,
    searchTerm: "",
    currentLocation: {name: "Tamale", lat: 9.4071, long: -0.8536},
    selectedLocation: {
        name: "Tamale",
        lat: 9.4071,
        long: -0.8536  
    },
    status: 'idle',
    location: {},
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOCATIONS:
            return {
                ...state,
                loading: true,
            };
        case FETCH_LOCATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                locations: action.payload,
                error: null,
            };
        case FETCH_LOCATIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };
        case SET_SELECTED_LOCATION:
            return {
                ...state,
                selectedLocation: action.payload,
            };
        case SET_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.payload,
            };
        default:
            return state;
    }
}

export default locationReducer;