import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const AutheServices = {
    login: ({ store, password }) => {
        return axios.get('/search', {
            params: {
                sheet: 'Authenticated',
                Store: store,
                Password: password,
            },
        })
    },
    rating: info => {
        const { store, phone, star } = info
        return axios.post(
            '/',
            {
                Store: store,
                Phone: phone,
                Star: star,
                Time: 'DATETIME',
            },
            {
                params: {
                    sheet: 'Rating',
                },
            }
        )
    },
}
