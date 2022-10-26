import { Button, Center } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../reduxHooks';
import filmsSlice from '../../store/slices/filmsSlice';

const Pagination = () => {
    const dispatch = useAppDispatch();
    const activePage = useAppSelector((state) => state.films.activePage);

    return(
        <Center paddingBottom={'6'}>
            {activePage > 1 ? <Button backgroundColor={'pink.300'} boxShadow={'dark-lg'} onClick={() => dispatch(filmsSlice.actions.loadMore(activePage - 1))}>
                Load Previous
            </Button> : null}
            <Button backgroundColor={'pink.300'} boxShadow={'dark-lg'} onClick={() => dispatch(filmsSlice.actions.loadMore(activePage + 1))}>
               Load Next 
            </Button>
        </Center>
    )
}

export default Pagination;