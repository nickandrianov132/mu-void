import { $host, $authHost } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (login, email, password) => {
    const {data} = await $host.post('api/user/registration', {login, email, password})
    console.log(data);
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const userLogin = async (login, password) => {
    // console.log(login, password);
    const {data} = await $host.post('api/user/login', {login, password})
    localStorage.setItem('token', data.token)
    // return jwtDecode(data.token)
    return data
}
export const check = async () => {
    const {data} = await $authHost.get('api/user/auth',)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const characters = async () => {
    const {data} = await $host.get('api/character')
    return data
}