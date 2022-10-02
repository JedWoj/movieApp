import React from 'react';
import { GridItem, Text, Box } from '@chakra-ui/react';
import { MovieCreditsCast, MovieCreditsCrew } from '../../types/movieCreditsType';
import Link from 'next/link';
import Image from 'next/image';

interface CastGridItemType {
    person: MovieCreditsCast | MovieCreditsCrew
}

const CastGridItem = ({person}: CastGridItemType) => {
    return(
        <GridItem>
            <Link href={`persons/${person.id}`}>
                <Box>
                    <Image src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} alt={person.name} width={'5000'} height={'6000'} />
                    <Text>
                        {person.name}
                    </Text>
                </Box>
            </Link> 
        </GridItem>
    )
}

export default CastGridItem;