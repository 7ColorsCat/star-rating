import { Heading, Center, Link, VStack } from '@chakra-ui/react'
import { Link as Rlink } from 'react-router-dom'

export default function Thankyou() {
    return (
        <Center h={'100vh'} bgGradient="radial-gradient( #FD9204, #FBC366)">
            <VStack>
                <Heading
                    color={'white'}
                    fontSize={{ sm: '5xl', base: '3xl' }}
                    textTransform={'uppercase'}
                >
                    Cảm ơn quý khách !
                </Heading>
                <Link as={Rlink} to={'/'}>
                    Đánh giá mới
                </Link>
            </VStack>
        </Center>
    )
}
