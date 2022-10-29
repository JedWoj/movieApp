import React, { useEffect } from 'react';
import { Center, Container, Spinner } from '@chakra-ui/react';
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import { GetStaticProps } from 'next';
import { GenresType } from '../../types/genresType';
import { useAppDispatch, useAppSelector } from '../../reduxHooks';
import FilmsList from '../../components/FilmsList/FilmsList';
import Pagination from '../../components/Pagination/Pagination';
import { fetchFilms } from '../../store/async/fetch-films'; 

interface FilmsPageType {
    genres: GenresType;
}

const FilmsPage = ({genres}: FilmsPageType) => {
    const activeGenre = useAppSelector((state) => state.films.activeGenre);
    const activePage = useAppSelector((state) => state.films.activePage);
    const activeMovies = useAppSelector((state) => state.films.activeFilms);
    const requestStatus = useAppSelector((state) => state.films.filmsRequestStatus);
    const dispatch = useAppDispatch();
    console.log(activeGenre);

    useEffect(() => {
        dispatch(fetchFilms(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}&with_genres=${activeGenre}&page=${activePage}`))
    },[activeGenre, activePage,dispatch])
    
    console.log(activeMovies,requestStatus)
    if(requestStatus === '' || requestStatus === 'pending') return <Spinner position={'fixed'} top={'49vh'} left={'49vw'} />;

    if(requestStatus === 'rejected') return <Center fontWeight={'bold'} marginTop={'20'}>Something Went Wrong!</Center>

    return(
        <>
            <SelectCategory genres={genres} />
            <Container maxWidth={'5xl'}>
                <FilmsList films={activeMovies} />
                <Pagination films={activeMovies} />
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