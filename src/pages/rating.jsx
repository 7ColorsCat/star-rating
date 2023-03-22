import {
    Box,
    Button,
    Container,
    Flex,
    Input,
    Link,
    Text,
} from '@chakra-ui/react'
import StarRating from '../components/star-rating'
import { useState } from 'react'

export default function Rating() {
    const [info, setInfo] = useState({ phone: '', star: 0 })
    const onchangeHandler = e => {
        const { name, value } = e.target
        setError(false)
        setInfo({ ...info, [name]: value })
    }
    const [error, setError] = useState(null)
    const setStar = star => setInfo({ ...info, star })
    const handlePreview = () => {
        if (info.phone === '') {
            window.scrollTo(0, 0)
            setError(true)
        }
    }

    return (
        <Box bgGradient="linear-gradient(to right, #1d976c, #93f9b9)">
            <Container w={{ sm: 'container.sm' }}>
                <Flex
                    h={'100vh'}
                    justify={'center'}
                    align={'center'}
                    direction={'column'}
                    gap={4}
                >
                    <Text fontStyle={'italic'}>Số điện thoại khách hàng</Text>
                    <Input
                        type="tel"
                        placeholder="Số điện thoại khách hàng"
                        variant={'filled'}
                        color={'whitesmoke'}
                        name="phone"
                        onChange={onchangeHandler}
                        textAlign={'center'}
                    />
                    {error ? (
                        <Text color={'red'} fontSize={'sm'}>
                            Vui lòng nhập số điện thoại
                        </Text>
                    ) : null}
                    <Link href="#star" w={'full'}>
                        <Button colorScheme="orange" w={'full'}>
                            Tiếp
                        </Button>
                    </Link>
                </Flex>
            </Container>
            <StarRating
                setStar={setStar}
                star={info.star}
                handlePreview={handlePreview}
            />
        </Box>
    )
}
