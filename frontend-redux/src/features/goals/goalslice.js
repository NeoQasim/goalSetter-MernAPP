import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const goalSliceReducer = createSlice({
    name: "goal",
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})

export const { reset } = goalSliceReducer.actions
export default goalSliceReducer.reducer