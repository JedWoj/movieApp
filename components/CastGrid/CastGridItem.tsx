import React from 'react';
import { GridItem } from '@chakra-ui/react';
import { MovieCreditsCast, MovieCreditsCrew } from '../../types/movieCreditsType';

interface CastGridItemType {
    person: MovieCreditsCast | MovieCreditsCrew
}

const CastGridItem = ({person}: CastGridItemType) => {
    return(
        <GridItem> 
            {person.name} 
        </GridItem>
    )
}

export default CastGridItem;