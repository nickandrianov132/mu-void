import { publicApi } from "./public";


export const charApi = publicApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAllChar: build.query({
            query: () => ({
                url: `/character`
            })
        }),
        fetchOneChar: build.query({
            query: (id) => ({
                url: `/character/${id}`
            })
        }),
        fetchTop3Char: build.query({
            query: () => ({
                url:`/character/top3`
            })
        }),
        fetchAccountChar: build.query({
            query: (token) => ({
                url: `/accountcharacters/${token}`
            })
        }),
        fetchSortedChar: build.query({
            query: (classId) => ({
                url: `/character/sorted`,
                params: {class: classId}
            })
        })
    })
})

export const { useFetchAllCharQuery, useFetchOneCharQuery, useFetchTop3CharQuery, useFetchAccountCharQuery, useFetchSortedCharQuery } = charApi