import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function Login({ loading, onLoggin, error }) {
    const [store, setUser] = useState({
        store: '',
        password: '',
    })

    const onChangeInput = e => {
        const { name, value } = e.target
        setUser({
            ...store,
            [name]: value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        onLoggin(store, true)
    }

    return (
        <Flex
            h={'100vh'}
            justify={'center'}
            align={'center'}
            direction={'column'}
            gap={5}
            bgGradient="radial-gradient( #FD9204, #FBC366)"
        >
            <Box
                p={4}
                shadow={'lg'}
                border={'1px'}
                borderColor={'whiteAlpha.500'}
                rounded={'xl'}
            >
                <Heading fontSize={'3xl'} fontWeight={'light'} pb={4}>
                    Đăng nhập để sử dụng
                </Heading>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel fontWeight={'light'}>Tài khoản(*)</FormLabel>
                        <Input
                            type="text"
                            id="store"
                            name="store"
                            variant={'filled'}
                            required
                            onChange={onChangeInput}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel fontWeight={'light'}>Mật khẩu(*)</FormLabel>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            variant={'filled'}
                            required
                            onChange={onChangeInput}
                        />
                        {error ? (
                            <Text color={'red'} textAlign={'center'}>
                                {error}
                            </Text>
                        ) : null}
                    </FormControl>

                    <Button
                        type="submit"
                        w={'full'}
                        mt={4}
                        isLoading={loading}
                        loadingText="Đang đăng nhập"
                        bg="#120C04"
                        color={'white'}
                        _hover={{ bg: '#120C04' }}
                    >
                        Đăng nhập
                    </Button>
                </form>
            </Box>
        </Flex>
    )
}
