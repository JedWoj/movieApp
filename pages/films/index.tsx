import React from 'react';
import { Container } from '@chakra-ui/react';
import SelectCategory from '../../components/SelectCategory/SelectCategory';
import { GetStaticProps } from 'next';
import { GenresType } from '../../types/genresType';

interface FilmsPageType {
    genres: GenresType
}

const FilmsPage = ({genres}: FilmsPageType) => {
    return(
        <>
            <SelectCategory genres={genres} />
            <Container maxWidth={'5xl'}>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIE_API}`);
    const genres = await response.json();
    return {
        props: {genres},
        revalidate: 180
    }
}

export default FilmsPage;