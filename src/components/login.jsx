import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
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
            bgGradient="linear-gradient(to right, #1d976c, #93f9b9)"
        >
            <Box p={4} bg={'whitesmoke'} rounded={'xl'}>
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
                        colorScheme={'green'}
                        w={'full'}
                        mt={4}
                        isLoading={loading}
                        loadingText="Đang đăng nhập"
                    >
                        Đăng nhập
                    </Button>
                </form>
            </Box>
        </Flex>
    )
}
