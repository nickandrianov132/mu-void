import { publicApi } from "./public";


export const castleApi = publicApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCastleInfo: build.query({
            query: () => ({
                url: `/castle`
            })
        })
    })
})

export const {useFetchCastleInfoQuery} = castleApi