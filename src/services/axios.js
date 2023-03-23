import axios from 'axios'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Ho_Chi_Minh')

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
                Time: dayjs().format('DD-MM-YYYY HH:mm:ss'),
            },
            {
                params: {
                    sheet: 'Rating',
                },
            }
        )
    },
}
