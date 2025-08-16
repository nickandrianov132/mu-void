import { characters } from "../../http/userAPI"
import { addCharacters } from "../slices/characterSlice"


export const fetchCharacters = () => {
    return function(dispatch) {
        characters().then(data => dispatch(addCharacters(data)))
    }
}