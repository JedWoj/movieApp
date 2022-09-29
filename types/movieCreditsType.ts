type MovieCreditsCast = {
    cast_id: number,
    character: string,
    credit_id: string,
    id: number,
    name: string,
    original_name: string;
}

type MovieCreditsCrew = {
    credit_id: string,
    department: string,
    id: number,
    job: string,
    name: string,
}

export type MovieCreditsType = {
    cast: MovieCreditsCast[],
    crew: MovieCreditsCrew[],
    id: number,
} 