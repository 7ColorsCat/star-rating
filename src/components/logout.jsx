import { Button } from '@chakra-ui/react'
import LogoutIcon from '../assets/logout.svg'
import { useNavigate } from 'react-router-dom'

export default function Logout(props) {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('star-rating')
        navigate('/')
        props.setStore({})
    }
    return (
        <Button
            pos={'fixed'}
            right={'2rem'}
            top={'4rem'}
            boxSize={'50px'}
            rounded={'full'}
            border={'1px'}
            borderColor={'whitesmoke'}
            bgImg={LogoutIcon}
            bgSize={'cover'}
            _hover={'none'}
            _active={'none'}
            {...props}
            onClick={handleLogout}
        ></Button>
    )
}
