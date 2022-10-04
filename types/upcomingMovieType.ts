export type UpcomingMovieResultsType = {
    backdrop_path: string,
    id: number,
    title: string,
    vote_average: number,
    vote_count: number,
    release_date: string,
    overview: string,
    poster_path: string,
}

export type UpcomingMovieType = {
    dates: {
        maximum: string,
        minimum: string,
    },
    results: UpcomingMovieResultsType[],
}