import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const filmsSlice = createSlice({
    name: "films",
    initialState: {
        activeGenre: 28,
        activePage: 1,
    },
    reducers: {
        setActiveGenre(state, action: PayloadAction<number>) {
            state.activeGenre = action.payload;
        },
        loadMore(state, action: PayloadAction<number>) {
            state.activePage = action.payload;
        }
    }
});

export const userActions = filmsSlice.actions;
export default filmsSlice;