import { api } from "./api";


export const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (user) => ({
                url: `/user/login`,
                method: 'POST',
                body: user,
            }),
            invalidatesTags: [{type: 'authToken'}, {type: 'userInfo'}]
        }),
        getUserDetails: build.query({
            query: () => ({
                url: `/user/auth`,
                method: 'GET',
                // headers: {
                //     Authorization: `Bearer ${token}`
                // }
            }),
            providesTags: ["UserDetails"],
        }),
        fetchAccountChar: build.query({
            query: () => ({
                url: `/user/auth/accountcharacters`
            }),
            providesTags: [{type: 'authToken'}, {type: "userCharacters"}]
        }),
        fetchAccountCharReset: build.mutation({
            query: (name) => ({
                url: `/user/auth/accountcharacters/reset`,
                method: 'POST',
                body: name
            }),
            invalidatesTags: ["userCharacters"]
        }),
        fetchAccountCharGrandreset: build.mutation({
            query: (name) => ({
                url: `/user/auth/accountcharacters/grandreset`,
                method: 'POST',
                body: name
            }),
            invalidatesTags: ["userCharacters"]
        }),
        fetchAccountInfo: build.query({
            query: () => ({
                url: `/user/auth/accountinfo`
            }),
            providesTags: ["userInfo"]
        }),
        userBuyVip: build.mutation({
            query: (vipData) => ({
                url: `/user/buyVip`,
                method: 'POST',
                body: vipData
            }),
            invalidatesTags: ["userInfo"]
        }),
        userCryptoInvoice: build.mutation({
            query: (invoiceData) => ({
                url: `/user/cryptocloud-insert-invoice`,
                method: 'POST',
                body: invoiceData
            }),
        })
    }),
})

export const { useUserLoginMutation, useGetUserDetailsQuery, useFetchAccountCharQuery, useFetchAccountCharResetMutation, useFetchAccountCharGrandresetMutation, useFetchAccountInfoQuery, useUserBuyVipMutation, useUserCryptoInvoiceMutation } = userApi