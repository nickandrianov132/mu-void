import { publicApi } from "./public";


const serverTimeApi = publicApi.injectEndpoints({
    endpoints: (build) => ({
        fetchServerTime: build.query({
            query: () => ({
                url: `/servertime`
            })
        })
    })
})

export const { useFetchServerTimeQuery } = serverTimeApi