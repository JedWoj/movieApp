import react from 'react';
import { Box, Heading, Center, Text, Flex } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';
import { SingleMovieType } from '../../types/singleMovieType';

const SingleFilmCover = ({movie}: SingleMovieType) => {

  return(
      <Box 
      width={'4xl'} 
      boxShadow={'dark-lg'} 
      height={'xl'} 
      backgroundRepeat={'no-repeat'} 
      backgroundSize={'cover'} 
      backgroundPosition={'center'} 
      position={'relative'} 
      backgroundImage={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
      >
                <Center position={'absolute'} bottom={'6'} left={'6'}>
                    <Flex flexDirection={'column'}> 
                        <Heading fontSize={'6xl'}>
                            {movie.title}
                        </Heading>
                        <Flex gap={'2'}>
                            <Text>
                                {new Date(movie.release_date).getFullYear()} 
                            </Text>
                            <Text>
                                {movie.runtime} min
                            </Text>
                        </Flex>
                        <Flex fontSize={'4xl'} alignItems={'center'}>
                            <StarIcon marginRight={'2'} color={'yellow.400'} /> 
                            <Text>
                                {movie.vote_average.toFixed(1)}
                            </Text>
                            <Box marginLeft={'2.5'} >
                                <Text fontSize={'medium'}>
                                    {movie.vote_count}
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