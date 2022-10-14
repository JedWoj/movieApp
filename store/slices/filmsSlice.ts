import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const filmsSlice = createSlice({
    name: "films",
    initialState: {
        activeGenre: 28,
    },
    reducers: {
        setActiveGenre(state, action: PayloadAction<number>) {
            state.activeGenre = action.payload;
        }
    }
});

export const userActions = filmsSlice.actions;
export default filmsSlice;