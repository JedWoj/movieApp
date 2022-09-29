import react from 'react';
import { Box, Heading, Center, Text, Flex } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';
import { SingleMovieType } from '../../types/singleMovieType';

interface SingleFilmCoverProps {
    movieInfo : SingleMovieType;
}

const SingleFilmCover = ({movieInfo}: SingleFilmCoverProps) => {

  return(
      <Box 
      width={'4xl'} 
      boxShadow={'dark-lg'} 
      height={'xl'} 
      backgroundRepeat={'no-repeat'} 
      backgroundSize={'cover'} 
      backgroundPosition={'center'} 
      position={'relative'} 
      backgroundImage={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`}
      >
                <Center position={'absolute'} bottom={'6'} left={'6'}>
                    <Flex flexDirection={'column'}> 
                        <Heading fontSize={'6xl'}>
                            {movieInfo.title}
                        </Heading>
                        <Flex gap={'2'}>
                            <Text>
                                {new Date(movieInfo.release_date).getFullYear()} 
                            </Text>
                            <Text>
                                {movieInfo.runtime} min
                            </Text>
                        </Flex>
                        <Flex fontSize={'4xl'} alignItems={'center'}>
                            <StarIcon marginRight={'2'} color={'yellow.400'} /> 
                            <Text>
                                {movieInfo.vote_average.toFixed(1)}
                            </Text>
                            <Box marginLeft={'2.5'} >
                                <Text fontSize={'medium'}>
                                    {movieInfo.vote_count}
                                </Text>
                                <Text marginTop={'-2.5'} fontSize={'medium'}>
                                    Reviews
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Center>
            </Box>)  
}

export default SingleFilmCover;