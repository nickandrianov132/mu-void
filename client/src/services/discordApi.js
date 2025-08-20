import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://discord.com/api/guilds/1407636233064022066/widget.json';

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
});

export const discordApi = createApi({
    reducerPath: 'discordApi',
    baseQuery: baseQuery,
    endpoints: (build) => ({
        fetchDiscord: build.query({
            query: () => ({
                url: ``,
                method: 'GET'
            })
        })
    })
})

export const {useFetchDiscordQuery} = discordApi