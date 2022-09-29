type SingleMovieProductionCountriesType = {
    name: string,
}

type SingleMovieGenreType = {
    id: number,
    name: string
}

export type SingleMovieType = {
    adult: boolean,
    backdrop_path: string,
    budget: number,
    genres: SingleMovieGenreType[],
    homepage: string,
    id: number,
    imbd_id: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    revenue: number,
    runtime: number,
    status: string,
    title: string,
    vote_average: number,
    vote_count: number,
    production_countries: SingleMovieProductionCountriesType[],
}