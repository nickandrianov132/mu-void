import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import authSlice from './slices/authSlice';
import { publicApi } from '../services/public';
import regUserReducer from './slices/regUserSlice';
import regUserInputReducer from './slices/regUserInputSlice';
import charactersReducer from './slices/characterSlice';
import serverInfoReducer from './slices/serverInfoSlice';
import regainPasswordReducer from './slices/regainPassSlice';
import regainPasswordInputReducer from './slices/regainPassInputSlice'


export const store = configureStore({
    reducer: {
        user: authSlice,
        regUserData: regUserReducer,
        regInputsData: regUserInputReducer,
        characters:  charactersReducer,
        serverInfo: serverInfoReducer,
        regainPassword: regainPasswordReducer,
        regainPasswordInput: regainPasswordInputReducer,
        [api.reducerPath]: api.reducer,
        [publicApi.reducerPath]: publicApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([api.middleware, publicApi.middleware])
})