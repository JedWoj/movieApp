export type TrendingMoviesResult = {
    id: number,
    title: string,
    vote_average: number,
    vote_count: number,
    poster_path: string,
    overview: string,
    first_air_date: string,
}
  
export type TrendingMoviesType = {
  trendingMovies: {
    results: TrendingMoviesResult[];
  }
}