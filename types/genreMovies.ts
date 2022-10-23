export type GenreMovies = {
    page: number,
    total_pages: number,
    total_results: number,
    results: SingleGenreMovie[],
} 

export type SingleGenreMovie = {
    adult: boolean,
    backdrop_path: string,
    id: number,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}