import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFilms } from '../async/fetch-films';

const filmsSlice = createSlice({
    name: "films",
    initialState: {
        activeGenre: 28,
        activePage: 1,
        activeFilms: {
            page: 0, 
            results: [{
            adult: false,
            backdrop_path: '',
            id: 0,
            overview: '',
            popularity: 0,
            poster_path: '',
            release_date: '',
            title: '',
            video: false,
            vote_average: 0,
            vote_count: 0
        }], 
            total_pages: 0, 
            total_results: 0},
        filmsRequestStatus: '',
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state) => {
            state.filmsRequestStatus = 'pending';
        })
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.activeFilms = action.payload.films;
            state.filmsRequestStatus = 'fulfilled';
        })
        builder.addCase(fetchFilms.rejected, (state) => {
            state.filmsRequestStatus = 'rejected';
        })
    },
    reducers: {
        setActiveGenre(state, action: PayloadAction<number>) {
            state.activeGenre = action.payload;
        },
        changePage(state, action: PayloadAction<number>) {
            state.activePage = action.payload;
        },
    }
});

export const userActions = filmsSlice.actions;
export default filmsSlice;