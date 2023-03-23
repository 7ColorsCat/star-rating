import { useLayoutEffect, useState } from 'react'
import Login from './components/login'
import Rating from './pages/rating'
import { AutheServices } from './services/axios'

export default function App() {
    const [store, setStore] = useState(() => {
        const storeLocal = localStorage.getItem('star-rating')
        if (!storeLocal) return {}
        return JSON.parse(storeLocal)
    })
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    async function login(store, isSubmit = false) {
        try {
            if (isSubmit) setLoading(true)
            try {
                const res = await AutheServices.login(store)
                if (res.data.length > 0) {
                    localStorage.setItem(
                        'star-rating',
                        JSON.stringify(res.data[0])
                    )
                    setStore(res.data[0])
                } else {
                    if (isSubmit) setError(true)
                }
            } catch (error) {
                return console.log(error.message)
            }
        } finally {
            return setLoading(false)
        }
    }

    useLayoutEffect(() => {
        login(store)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (Object.keys(store).length === 0)
        return (
            <Login
                loading={loading}
                onLoggin={login}
                error={error ? 'Thông tin không chính xác' : null}
            />
        )

    return <Rating store={store.Store} setstore={setStore} />
}
