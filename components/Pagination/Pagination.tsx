import { Box, Button, Flex } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../reduxHooks';
import filmsSlice from '../../store/slices/filmsSlice';
import { GenreMovies } from '../../types/genreMovies';

interface PaginationProps {
    films?: GenreMovies,
}

const Pagination = ({films}: PaginationProps) => {
    const dispatch = useAppDispatch();
    const activePage = useAppSelector((state) => state.films.activePage);
    
    return(
        <>
            <Flex justifyContent={'space-between'} marginBottom={'5'} fontWeight={'bold'}>
                <Box>
                    Page: {`${films?.page}/${films?.total_pages}`}
                </Box>
                <Box>
                    Total Pages: {`${films?.total_pages}`}
                </Box>
            </Flex>
            <Flex justifyContent={'space-between'} paddingBottom={'6'}>
                {activePage > 1 ? <Button backgroundColor={'pink.300'} boxShadow={'dark-lg'} onClick={() => dispatch(filmsSlice.actions.changePage(activePage - 1))}>
                    Load Previous
                </Button> : null}
                <Button marginLeft={'auto'} backgroundColor={'pink.300'} boxShadow={'dark-lg'} onClick={() => dispatch(filmsSlice.actions.changePage(activePage + 1))}>
                Load Next 
                </Button>
            </Flex>
        </>
    )
}

export default Pagination;