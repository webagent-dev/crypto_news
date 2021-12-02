import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeader ={
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": "707cc25d64msh8f792c41c953bf1p16aba2jsndd3484645eb6",
}
const header = (url) => ({url, headers: cryptoApiHeader})
export const cryptoApi = createApi({
    reducerPath: 'crypto',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://coinranking1.p.rapidapi.com'
    }),
    tagTypes: ['list'],
    endpoints: (builder) => ({
        getMarket: builder.query({
           query: (count) => header(`/coins?limit=${count}`),
           providesTags: ['list']        
        })
    })
})
 export const { useGetMarketQuery } = cryptoApi
