import { userLogin } from "../../http/userAPI";
import { isAuthorizated } from "../slices/userSlice";


export const userAuth = (login, password) => {
    return function(dispatch) {
        userLogin(login, password)
        .then(data => dispatch(isAuthorizated(data)))
        .catch(err => console.log(err.response.data))
    }
}