import axios from 'axios';

//cda88d8d8416a99aa15bcc40571890447f7131f6
// base url: https://api-ssl.bitly.com/v4/shorten

export const key = 'cda88d8d8416a99aa15bcc40571890447f7131f6';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;