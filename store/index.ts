import {configureStore} from "@reduxjs/toolkit";
import filmsSlice from "./slices/filmsSlice";

const store = configureStore({
    reducer: {
        films: filmsSlice.reducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;