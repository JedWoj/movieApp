import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import FilmwebLogo from '../../public/images/FilmwebLogo.png';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const Nav = () => {
    return(
        <Container minWidth={'full'}>
            <Flex alignItems={'center'}>
                <Link href={'/'}> 
                    <Image src={FilmwebLogo} height={120} width={240} alt='filmweb logo' />
                </Link>
                <Flex fontSize={25} marginRight={12} gap={20} flex={1} justifyContent={'flex-end'}>
                    <Link href={'/films'}>
                        Films
                    </Link>
                    <Link href={'/serials'}>
                        Serials
                    </Link>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Nav;