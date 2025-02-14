import axios from "axios";

export const https = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins'
})