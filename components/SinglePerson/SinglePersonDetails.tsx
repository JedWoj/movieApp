import React from 'react';
import { Flex, Box, Text, Heading } from '@chakra-ui/react';
import { SinglePersonDetailsType } from '../../types/personDetailsType';
import Image from 'next/image';

interface SinglePersonType {
    details: SinglePersonDetailsType,
}

const SinglePersonDetails = (props: SinglePersonType) => {
    const { details } = props;
    
    return(
        <Flex gap={'5'} fontWeight={'bold'}>
            <Box flexBasis={'30%'}>
                <Image 
                    alt={details.name} 
                    src={`https://image.tmdb.org/t/p/w500/${details.profile_path}`} 
                    width={1500} 
                    height={2050} 
                />    
            </Box>
            <Flex flexBasis={'70%'} flexDirection={'column'} gap={'3'}>
                <Heading>
                    {details.name}
                </Heading>
                <Text>
                    Birthday: {details.birthday} 
                </Text>
                <Text>
                    Birthplace: {details.place_of_birth}
                </Text>
                <Text>
                    Known for: {details.known_for_department}
                </Text>
                <Text>
                    Biography:
                </Text>
                <Text fontSize={'xs'}>
                    {details.biography}
                </Text>
            </Flex>
        </Flex>
    )
}

export default SinglePersonDetails;