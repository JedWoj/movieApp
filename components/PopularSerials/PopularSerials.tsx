import { Grid, Heading } from '@chakra-ui/react';
import { PopularSerialsType } from '../../types/popularSerialsType';
import PopularSerial from '../PopularSerials/PopularSerial';

interface PopularSerialsPropsType {
    serials: PopularSerialsType, 
}

const PopularSerials = ({serials}: PopularSerialsPropsType) => {
    const renderList = () => {
        const popular = serials.results.slice(0,6).map(ser => <PopularSerial serial={ser} key={ser.id}/>);
        return popular;
    }

    return(
        <>
            <Heading as={'h2'} size={'md'}>
                Popular Serials
            </Heading>
            <Grid templateColumns={'repeat(5, 1fr)'}>
                {renderList()}
            </Grid>
        </>
    )
}

export default PopularSerials;