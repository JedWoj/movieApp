export type PersonRolesCastType = {
    backdrop_path: string,
    character: string,
    id: number,
    title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    vote_average: number,
    vote_count: number
}

export type PersonRolesCrewType = {
    backdrop_path: string,
    department: string,
    id: number,
    job: string,
    title: string,
    vote_average: number,
    vote_count: number,
    poster_path: string,
    overview: string,
}

export type PersonRolesType = {
    cast: PersonRolesCastType[],
    crew: PersonRolesCrewType[],
    id: number
}