import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import { useDispatch } from 'react-redux';

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
// const dispatch = useDispatch()




export const register = createAsyncThunk("auth/register", async (user, thunkApi) => {
    try {
        const response = await authService.register(user);
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
});

export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
    try {
        const response = await authService.login(user);
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkApi.rejectWithValue(message);
    }
});

export const logOut = createAsyncThunk("auth/logout", async () => { await authService.logut() })

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ""


        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                if (action.payload) {
                    state.user = action.payload;
                }
                // dispatch(reset())
            })
            .addCase(register.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false; // Set isLoading to false
                state.message = action.payload;
                state.user = null;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                if (action.payload) {
                    state.user = action.payload;
                }
            })
            .addCase(login.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false; // Set isLoading to false
                state.message = action.payload;
                state.user = null;
            })

            .addCase(logOut.fulfilled, (state, action) => {
                state.user = null
                state.isLoading = false;
            })



    }
}
)

export default authSlice.reducer
export const { reset } = authSlice.actions 