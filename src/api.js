import axios from 'axios'
import { QueryClient } from '@tanstack/react-query'

console.log(process.env.GATSBY_API_URL)

export const api = axios.create({
  baseURL: `https://${process.env.GATSBY_API_URL}`,
})

export const API_KEYS = {
  ENDPOINTS: '/endpoints',
}

const defaultQueryFn = ({ queryKey }) => {
  const [endpoint, { params }] = queryKey

  return api.get(endpoint, { params }).then((res) => res.data)
}

export const getEndponts = async ({ queryKey }) => {
  const [, endpoints] = queryKey

  const pingEndpoints = endpoints.map((item) => {
    const ping = new Date()

    return axios({
      method: 'post',
      url: `http://${item.endpoint}`,
      timeout: 5000,
      data: { jsonrpc: '2.0', id: 1, method: 'getHealth' },
    })
      .then(() => {
        const pong = new Date() - ping

        return {
          ...item,
          response: {
            status: true,
            time: pong,
          },
        }
      })
      .catch((error) => {
        // handle error
        const pong = new Date() - ping

        if (!['ERR_NETWORK', 'ECONNABORTED'].includes(error.code)) {
          return {
            ...item,
            response: { status: true, time: pong },
          }
        }
        return {
          ...item,
          response: { status: false, time: 10000 }, // fake value to sort down the list later
        }
      })
  })

  const pingedEndpoints = await Promise.all(pingEndpoints)

  return pingedEndpoints
}

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token')
//   if (token) config.headers.Authorization = `Bearer ${token}`
//   return config
// })

const onResponseFulfilled = (response) => {
  // events.emit('success', response)
  return response
}

const onResponseRejected = (error) => {
  // events.emit('error', error)
  // console.log(error)
  return Promise.reject(error)
}

api.interceptors.response.use(onResponseFulfilled, onResponseRejected)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 30, // data lives in a cache 30sec
      // refetchOnWindowFocus: false,
      // retry: false, // after getting error disable auto-retry
      queryFn: defaultQueryFn,
    },
  },
})

export const queries = {
  // getUser: () => api.get(API_KEYS.USER).then((res) => res.data?.data),
}
