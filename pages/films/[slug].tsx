import React from 'react';
import { Container } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { SingleMovieType } from '../../types/singleMovieType';
import SingleFilmCover from '../../components/SingleFilmCover/SingleFilmCover';

const SingleMoviePage = (data: SingleMovieType) => {
    const { movie } = data;
    return(
        <Container marginTop={'5'} maxW={'4xl'} backgroundColor={'blue.900'} centerContent>
            <SingleFilmCover movie={movie} />
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const slug = context.params?.slug;
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
        fallback: 'blocking'
    }
} 

export default SingleMoviePage;