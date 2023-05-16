import { createWrapper } from "next-redux-wrapper";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { api } from "./api";
import authSlice from "./slices/authSlice";

const rootReducers = combineReducers({
    [api.reducerPath]: api.reducer,
    [authSlice.name]: authSlice.reducer,
});

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist: [api.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const makeStore = () =>
    configureStore({
        reducer: rootReducers,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
        devTools: process.env.NODE_ENV !== "production",
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
export const persistor = persistStore(store);
export const persistedStore = store;
