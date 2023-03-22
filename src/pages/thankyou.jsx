import { Heading, Center, Link, VStack } from '@chakra-ui/react'
import { Link as Rlink } from 'react-router-dom'

export default function Thankyou() {
    return (
        <Center
            h={'100vh'}
            bgGradient="linear-gradient(to right, #1d976c, #93f9b9)"
        >
            <VStack>
                <Heading color={'white'}>Cảm ơn quý khách !</Heading>
                <Link as={Rlink} to={'/'}>
                    Đánh giá mới
                </Link>
            </VStack>
        </Center>
    )
}
