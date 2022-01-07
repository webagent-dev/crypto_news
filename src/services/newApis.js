import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const newsHeaders= {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '707cc25d64msh8f792c41c953bf1p16aba2jsndd3484645eb6'
  }
const baseURL = 'https://bing-news-search1.p.rapidapi.com'
const header = (url) => ({url, headers: newsHeaders})
export const newApis = createApi({
    reducerPath: 'beegNews',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL
    }),
    tagTypes: ['news'],
    endpoints:(buider) => ({
        getBingNews: buider.query({
            query: ({ cat, count }) => header(`/news/search?q=${cat}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        }),
        providesTags: ['news'] 
    })
})    


export const { useGetBingNewsQuery } = newApis