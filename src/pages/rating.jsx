import { Box, Button, Flex, Heading, Input, Link, Text } from '@chakra-ui/react'
import StarRating from '../components/star-rating'
import { useState } from 'react'
import { AutheServices } from '../services/axios'
import { useNavigate } from 'react-router-dom'
import Logout from '../components/logout'

export default function Rating({ store, setstore }) {
    const [info, setInfo] = useState({ phone: '', star: 0 })
    const navigate = useNavigate()
    const onchangeHandler = e => {
        const { name, value } = e.target
        setError(false)
        setInfo({ ...info, [name]: value })
    }
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const setStar = star => setInfo({ ...info, star })
    const handlePreview = async () => {
        if (info.phone === '') {
            window.scrollTo(0, 0)
            setError(true)
            return false
        }

        try {
            setLoading(true)
            const data = { ...info, store }
            const newRating = await AutheServices.rating(data)
            if (newRating.status === 201) navigate('/thankyou')
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box>
            <Flex
                h={'100vh'}
                justify={'center'}
                align={'center'}
                direction={'column'}
                gap={4}
                bgGradient="radial-gradient( #FD9204, #FBC366)"
            >
                <Heading fontStyle={'italic'}>Số điện thoại khách hàng</Heading>
                <Input
                    type="tel"
                    placeholder="Số điện thoại khách hàng"
                    variant={'filled'}
                    name="phone"
                    onChange={onchangeHandler}
                    textAlign={'center'}
                    w={{ sm: 'sm', base: 'xs' }}
                />
                {error ? (
                    <Text color={'red'} fontSize={'sm'}>
                        Vui lòng nhập số điện thoại
                    </Text>
                ) : null}
                <Link href="#star" w={'sm'} textAlign={'center'}>
                    <Button
                        bg="#120C04"
                        color={'white'}
                        _hover={{ bg: '#120C04' }}
                        w={{ sm: 'sm', base: 'xs' }}
                    >
                        Tiếp
                    </Button>
                </Link>
            </Flex>

            <StarRating
                setStar={setStar}
                star={info.star}
                handlePreview={handlePreview}
                loading={loading}
                bgGradient="radial-gradient( #FD9204, #FBC366)"
            />
            <Logout setstore={setstore} />
        </Box>
    )
}
