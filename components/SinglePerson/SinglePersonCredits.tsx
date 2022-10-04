import React from 'react';
import FilmsGrid from '../FilmsGrid/FilmsGrid';
import { Heading,Box } from '@chakra-ui/react';
import { PersonRolesCastType, PersonRolesCrewType } from '../../types/personRolesType';

interface SinglePersonCreditsType {
    persons: PersonRolesCastType[] | PersonRolesCrewType[],
    type: string
}

const SinglePersonCredits = ({persons, type}: SinglePersonCreditsType) => {
    return(
        <Box marginTop={'6'}>
            <Heading marginBottom={'4'}>
                {type}
            </Heading>
            <FilmsGrid persons={persons} />
        </Box>
    )
}

export default SinglePersonCredits;