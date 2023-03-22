import { Box, Image } from '@chakra-ui/react'
import thankyouBg from '../assets/thankyou.jpg'

export default function Thankyou() {
    return (
        <Box h={'100vh'}>
            <Image src={thankyouBg} objectFit={'cover'} />
        </Box>
    )
}
