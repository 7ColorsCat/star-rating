import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Logout(props) {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('star-rating')
        navigate('/')
        props.setstore({})
    }
    return (
        <Button
            pos={'fixed'}
            right={'2rem'}
            top={'4rem'}
            rounded={'lg'}
            border={'1px'}
            borderColor={'whitesmoke'}
            onClick={handleLogout}
            bgColor={'transparent'}
        >
            Đăng xuất
        </Button>
    )
}
