import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setToken } from "../store/slices/authSlice";

const baseUrl = `${import.meta.env.VITE_API_URL}api`;

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        // console.log(getState())
        const token = getState().user.accessToken
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    },
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    // console.log(result);
    if (result.error && result.error.status === 401) {
       api.dispatch(logout())
       return result.error
    }
    if (result.data) {
        console.log(result.data);
        if(result.data.token != undefined) {
            api.dispatch(setToken(result.data.token))
            result = await baseQuery(args, api, extraOptions)
        }
    }
    return result;
}
export const api = createApi({
    reducerPath: 'userAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ["UserDetails", "authToken", "userCharacters", "userInfo"],
    endpoints: (builder) => ({})
})



