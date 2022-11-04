import { Box, GridItem, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { PopularSerialType } from '../../types/popularSerialsType';

interface PopularSerialPropsType {
    serial: PopularSerialType,
    idx: number,
}

const PopularSerial = ({serial, idx}: PopularSerialPropsType) => {
    return(
        <Link href={`serial/${serial.id}`}>
            <GridItem w={'100%'} bgGradient={'linear(to-tr, #ff335d, #3f5efb)'} boxShadow={'dark-lg'} cursor={'pointer'}>
                <Heading as={'h3'} backgroundColor={'ButtonText'} textAlign={'center'} paddingBottom={'1'}>
                    {idx}
                </Heading>
                <Box>
                    <Image src={`https://image.tmdb.org/t/p/w500${serial.poster_path}`} alt={`poster of ${serial.name}`} height={450} width={360} />
                    <Box padding={'1'}>
                        {serial.name}
                    </Box>
                </Box>
            </GridItem>
        </Link>
    )
}

export default PopularSerial;