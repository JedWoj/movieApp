import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import { MovieCreditsCrew, MovieCreditsCast } from '../../types/movieCreditsType';
import CastGridItem from '../CastGrid/CastGridItem';

interface CastGridType  {
    persons: MovieCreditsCast[] | MovieCreditsCrew[];
}

const CastGrid = ({persons}: CastGridType) => {
    console.log(persons)
    const renderGrid = () => {
        const items = persons.map(per => <CastGridItem key={per.id} person={per} />)
        return items;
    }

    return(
        <Grid>
            {renderGrid()}
        </Grid>
    )
}

export default CastGrid;