import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../services/locationService";



export const getLocationsItems = createAsyncThunk(
    'locations/getLocationsItems',
    async () => {
        const data = await fetchData("locations");
        console.log("data", data);
        return data;
    }
)

export const LocationSlice = createSlice({
    name: "locations",
    initialState: {
        allLocations: [],
        location: {},
        currentLocation: {},
        loading: false,
        error: null,
        searchTerm: "",
        selectedLocation: null,
        status: 'idle',
    },
    reducers: {

        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        getLocations: (state, action) => {
            state.allLocations = action.payload;
        },
        setSelectedLocation: (state, action) => {
            state.selectedLocation = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        getLocation: (state, action) => {   
            state.location = action.payload;
        },

        getCurrentLocation: (state, action) => {
            state.currentLocation = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(getLocationsItems.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getLocationsItems.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
          })
          .addCase(getLocationsItems.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
});

export const { getLocations, getLocation, getCurrentLocation, setSearchTerm, setSelectedLocation} = LocationSlice.actions;
export default LocationSlice.reducer;