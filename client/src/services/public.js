import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:7000/api';

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
});

export const publicApi = createApi({
    reducerPath: 'publicApi',
    baseQuery: baseQuery,
    endpoints: () => ({})
})