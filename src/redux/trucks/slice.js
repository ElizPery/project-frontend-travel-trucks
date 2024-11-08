import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    trucksList: [],
    filters: {},
    favorites: [],
    isLoading: false,
    error: null,
    total: 0,
};

const trucksSlice = createSlice({
    name: "trucks",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase
    }
})

export default trucksSlice.reducer;