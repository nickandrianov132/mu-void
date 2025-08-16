import { publicApi } from "./public";


export const onlineApi = publicApi.injectEndpoints({
    endpoints: (build) => ({
        fetchOnline: build.query({
            query: () => ({
                url: `/online`
            })
        }) 
    })
})

export const { useFetchOnlineQuery } = onlineApi