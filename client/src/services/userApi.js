import { api } from "./api";


export const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (user) => ({
                url: `/user/login`,
                method: 'POST',
                body: user,
            }),
            invalidatesTags: [{type: 'authToken'}, {type: 'userInfo'}, {type: "userVault"}, {type: "userWebstore"}]
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
            invalidatesTags: ["userCharacters", "userInfo"]
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
        }),
        capturePaypalOrder: build.mutation({
            query: (orderID) => ({
                url: '/user/paypal-orders/capture-order',
                method: 'POST',
                body: { orderID }
            }),
            invalidatesTags: ["userInfo"] // Как только оплата пройдет, RTK Query перезапросит баланс автоматически
        }),
        fetchAccountVault: build.query({
            query: () => ({
                url: `/user/auth/accountvault`
            }),
            providesTags: [{type: "userVault"}, {type: 'authToken'}]
        }),
        fetchAccountWebstore: build.query({
            query: () => ({
                url: `/user/auth/accountwebstore`
            }),
            providesTags: ["userWebstore"]
        }),
        moveItemToWebstore: build.mutation({
            query: (itemData) => ({
                url: `/user/auth/accountvault/moveItemToWebstore`,
                method: 'POST',
                body: itemData
            }),
            invalidatesTags: ["userVault", "userWebstore"]
        }),
        moveItemToVault: build.mutation({
            query: (itemData) => ({
                url: `/user/auth/accountvault/moveItemToVault`,
                method: 'POST',
                body: itemData
            }),
            invalidatesTags: ["userVault", "userWebstore"]
        }),
        moveZen: build.mutation({
            query: (zenData) => ({
                url: `/user/auth/accountvault/moveZen`,
                method: 'POST',
                body: zenData
            }),
            invalidatesTags: ["userVault", "userWebstore"]
        }),
        moveItemToMarket: build.mutation({
            query: (itemData) => ({
                url: `/user/auth/accountvault/moveItemToMarket`,
                method: 'POST',
                body: itemData
            }),
            invalidatesTags: ["userWebstore", "itemMarket"]
        }),
        getBackMarketItem: build.mutation({
            query: (marketId) => ({
                url: `/user/auth/market/getBackItem`,
                method: 'POST',
                body: {marketId}
            }),
            invalidatesTags: ["itemMarket", "userWebstore"]
        }),

        fetchMarketItems: build.query({
            query: (arg) => ({
                url: `/user/auth/market`,
                // params: {page: arg[0], cat: arg[1]},
                params: arg,

            }),
            providesTags: ["itemMarket"]
        }),

        fetchBuyMarketItem: build.mutation({
            query: (marketId) => ({
                url: `/user/auth/market/buyMarketItem`,
                method: 'POST',
                body: {marketId}
            }),
            invalidatesTags: ["itemMarket", "userWebstore", "userInfo"] 
        }),

        
    }),
})

export const { useUserLoginMutation,
     useGetUserDetailsQuery,
     useFetchAccountCharQuery,
     useFetchAccountCharResetMutation,
     useFetchAccountCharGrandresetMutation,
     useFetchAccountInfoQuery, 
     useUserBuyVipMutation, 
     useUserCryptoInvoiceMutation, 
     useCapturePaypalOrderMutation, 
     useFetchAccountVaultQuery,
     useFetchAccountWebstoreQuery,
     useMoveItemToWebstoreMutation,
     useMoveItemToVaultMutation,
     useMoveZenMutation,
     useMoveItemToMarketMutation,
     useFetchMarketItemsQuery,
     useGetBackMarketItemMutation,
     useFetchBuyMarketItemMutation   
    } = userApi