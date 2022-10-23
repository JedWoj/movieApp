import React, { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import { GetStaticProps } from 'next';
import { GenresType } from '../../types/genresType';
import { useAppSelector } from '../../reduxHooks';
import { getFormattedPromise } from '../../lib/getFormattedPromise';
import FilmsList from '../../components/FilmsList/FilmsList';
import { GenreMovies } from '../../types/genreMovies';

interface FilmsPageType {
    genres: GenresType;
}

const FilmsPage = ({genres}: FilmsPageType) => {
    const activeGenre = useAppSelector((state) => state.films.activeGenre);
    const [activeMovies, setActiveMovies] = useState<undefined | GenreMovies>();
    
    useEffect(() => {
        (async () => {
            const movies = await getFormattedPromise(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}&with_genres=${activeGenre}`);
            setActiveMovies(movies);
        })();
    },[activeGenre])
    
    console.log(activeMovies)
    return(
        <>
            <SelectCategory genres={genres} />
            <Container maxWidth={'5xl'}>
                <FilmsList films={activeMovies} />
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}`);
    const genres = await response.json();
    return {
        props: {genres},
        revalidate: 180
    }
}

export default FilmsPage;