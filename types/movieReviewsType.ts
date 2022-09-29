type MovieReviewsResultType = {
    author: string,
    author_details: {
        avatar_path: string,
        rating: number,
        username: string
    }
    content: string,
    created_at: string,
}

export type MovieReviewsType = {
    id: number,
    results: MovieReviewsResultType[],
}