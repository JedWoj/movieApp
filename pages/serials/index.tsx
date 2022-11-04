import React from 'react';
import { GetStaticProps } from 'next';
import { useAppDispatch, useAppSelector } from '../../reduxHooks';
import PopularSerials from '../../components/PopularSerials/PopularSerials';

interface SerialsPageType {
    popularSerials: any;
}

const SerialsPage = ({popularSerials}: SerialsPageType) => {
    const dispatch = useAppDispatch();

    return(
        <>
            <PopularSerials serials={popularSerials} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}&language=en-US&page=1`);
    const popularSerials = await response.json();
    return {
        props: {popularSerials},
        revalidate: 180
    }
}

export default SerialsPage;