import { publicApi } from "./public";

export const registrationApi = publicApi.injectEndpoints({
    endpoints: (build) => ({
        registration: build.mutation({
            query: (regData) => ({
                url: `/user/registration`,
                method: 'POST',
                body: regData,
            })
        }),
    })
})

export const { useRegistrationMutation } = registrationApi