import { GridItem } from '@chakra-ui/react';
import { PopularSerialType } from '../../types/popularSerialsType';

interface PopularSerialPropsType {
    serial: PopularSerialType,
}

const PopularSerial = ({serial}: PopularSerialPropsType) => {
    return(
        <GridItem w={'100%'} h={'100'} bg={'ButtonShadow'}>
            {serial.name}
        </GridItem>
    )
}

export default PopularSerial;