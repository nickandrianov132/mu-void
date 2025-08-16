import { useDispatch } from "react-redux";
import { addCharacters } from "../../../store/slices/characterSlice";
import { useFetchAllCharQuery } from "../../../services/charApi";

const SortBtnAll = ({title}) => {
    const {data: chars, isSuccess} = useFetchAllCharQuery()
    const dispatch = useDispatch()

    const onClickHandler = () => {
        if(isSuccess == true) {
            dispatch(addCharacters(chars))
        }
    }

    return (
        <div className="rankings_sort_btn_div">
            <button 
                className="ranking_sort_btn"
                onClick={onClickHandler}
            >
            {title}
            </button>
        </div>
    );
}

export default SortBtnAll;
