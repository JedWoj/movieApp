import React from 'react';
import { Container } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { SingleMovieType } from '../../types/singleMovieType';
import { MovieCreditsType } from '../../types/movieCreditsType';
import { MovieReviewsType } from '../../types/movieReviewsType';
import { getFormattedPromise } from '../../lib/getFormattedPromise';
import SingleFilmCover from '../../components/SingleFilm/SingleFilmCover';
import SingleFilmOverview from '../../components/SingleFilm/SingleFilmOverview';
import SingleFilmCredits from '../../components/SingleFilm/SingleFilmCredits';

interface SingleMoviePageProps {
    movieInfo: SingleMovieType,
    credits: MovieCreditsType,
    reviews: MovieReviewsType,
}

const SingleMoviePage = (props: SingleMoviePageProps) => {
    console.log(props)
    return(
        <Container marginTop={'5'} maxW={'4xl'} centerContent>
            <SingleFilmCover movieInfo={props.movieInfo} />
            <SingleFilmOverview movieInfo={props.movieInfo} />
            <SingleFilmCredits movieCredits={props.credits} />
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const slug = context.params?.slug;
    let [movieInfo, credits, reviews] = await Promise.all([
        getFormattedPromise(`https://api.themoviedb.org/3/movie/${slug}?api_key=${process.env.MOVIE_API}`),
        getFormattedPromise(`https://api.themoviedb.org/3/movie/${slug}/credits?api_key=${process.env.MOVIE_API}&language=en-US`),
        getFormattedPromise(`https://api.themoviedb.org/3/movie/${slug}/reviews?api_key=${process.env.MOVIE_API}&language=en-US&page=1`)
    ]);
    return {
        props: {movieInfo, credits, reviews},
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