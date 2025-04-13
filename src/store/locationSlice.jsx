import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../services/locationService";


const getData = createAsyncThunk(
    'data/getData',
    async (collectionName) => {
        const data = await fetchData(collectionName);
        return data;
    }
)

export const LocationSlice = createSlice({
    name: "location",
    initialState: {
        locations: [],
        location: {},
        currentLocation: {},
        loading: false,
        error: null,
    },
    reducers: {
        getLocations: (state, action) => {
            state.locations = action.payload;
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
          .addCase(getData.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
          })
          .addCase(getData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
});

export const { getLocations, getLocation, getCurrentLocation } = LocationSlice.actions;
export default LocationSlice.reducer;