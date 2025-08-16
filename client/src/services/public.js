import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://46.202.188.234/api';

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
});

export const publicApi = createApi({
    reducerPath: 'publicApi',
    baseQuery: baseQuery,
    endpoints: () => ({})
})