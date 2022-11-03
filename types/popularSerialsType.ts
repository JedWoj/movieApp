export type PopularSerialType = {
    backdrop_path: string,
    first_air_date: string,
    id: number,
    name: string,
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number,
}

export type PopularSerialsType = {
    page: number,
    results: PopularSerialType[],
    total_pages: number,
    total_results: number,
}