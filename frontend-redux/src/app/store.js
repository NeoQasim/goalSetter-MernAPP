import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../features/auth/authslice';
import { goalSliceReducer } from '../features/goals/goalslice';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    goal:goalSliceReducer
  },
});
