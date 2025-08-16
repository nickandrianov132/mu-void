import { publicApi } from "./public";

export const regainPassApi = publicApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAccountQuestion: build.mutation({
            query: (user) => ({
                url: `/user/regainquestion`,
                method: 'POST',
                body: user
            })
        }),
        fetchAccountAnswer: build.mutation({
            query: (user) => ({
                url: `/user/regainanswer`,
                method: 'POST',
                body: user
            })
        }),
    })
})

export const { useFetchAccountQuestionMutation, useFetchAccountAnswerMutation } = regainPassApi
