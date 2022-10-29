import { createAsyncThunk } from "@reduxjs/toolkit";
import { GenreMovies } from "../../types/genreMovies";

export const fetchFilms = createAsyncThunk('films/fetchFilms', async (http: string) => {
    const response = await fetch(http);
    const films: GenreMovies = await response.json();
    return {films};
});