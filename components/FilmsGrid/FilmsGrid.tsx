import React from 'react';
import { Grid } from '@chakra-ui/react';
import { PersonRolesCastType, PersonRolesCrewType } from '../../types/personRolesType';
import FilmsGridItem from '../FilmsGrid/FilmsGridItem';

interface FilmsGridType  {
    persons: PersonRolesCastType[] | PersonRolesCrewType[],
}

const FilmsGrid = ({persons}: FilmsGridType) => {
    const renderGrid = () => {
        const items = persons.map(per => <FilmsGridItem key={Math.random()} person={per} />)
        return items;
    }

    return(
        <Grid templateColumns={'repeat(auto-fit, minmax(80px, 1fr))'} gridGap={'3'} marginBottom={'10'}>
            {renderGrid()}
        </Grid>
    )
}

export default FilmsGrid;