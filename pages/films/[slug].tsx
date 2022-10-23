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
import SingleFilmReviews from '../../components/SingleFilm/SingleFilmReviews';

interface SingleMoviePageProps {
    movieInfo: SingleMovieType,
    credits: MovieCreditsType,
    reviews: MovieReviewsType,
}

const SingleMoviePage = (props: SingleMoviePageProps) => {
    const { credits,movieInfo,reviews } = props;
    return(
        <Container marginTop={'5'} maxW={'5xl'} centerContent>
            <SingleFilmCover movieInfo={movieInfo} />
            <SingleFilmOverview movieInfo={movieInfo} />
            <SingleFilmCredits movieCredits={credits.cast} type={'Cast'} />
            <SingleFilmCredits movieCredits={credits.crew} type={'Crew'} />
            <SingleFilmReviews reviews={reviews} />
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const slug = context.params?.slug;
    const [movieInfo, credits, reviews] = await Promise.all([
        getFormattedPromise(`https://api.themoviedb.org/3/movie/${slug}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}`),
        getFormattedPromise(`https://api.themoviedb.org/3/movie/${slug}/credits?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}&language=en-US`),
        getFormattedPromise(`https://api.themoviedb.org/3/movie/${slug}/reviews?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}&language=en-US&page=1`)
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