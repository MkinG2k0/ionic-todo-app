import axios from 'axios'

export const http = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 30000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})
