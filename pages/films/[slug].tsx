import React from 'react';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { Box } from "@chakra-ui/react";
import { SingleMovieType } from '../../types/singleMovieType';

const SingleMoviePage = (data: SingleMovieType) => {
    const { movie } = data;
    return(
        <Box>
            {movie.title}
        </Box>
    )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const slug = context.params?.slug;
    console.log(slug)
    const response = await fetch(`https://api.themoviedb.org/3/movie/${slug}?api_key=${process.env.MOVIE_API}`);
    const movie = await response.json();
    return {
        props: {movie},
        revalidate: 180
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{params: {slug: '2'}}],
        fallback: true
    }
} 

export default SingleMoviePage;