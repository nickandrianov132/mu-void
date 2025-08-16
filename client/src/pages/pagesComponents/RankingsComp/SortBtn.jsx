import { useDispatch } from "react-redux";
import { addCharacters } from "../../../store/slices/characterSlice";
import { useFetchSortedCharQuery } from "../../../services/charApi";

const SortBtn = ({title, sortType}) => {
    const {data: sortedChars, isSuccess} = useFetchSortedCharQuery(sortType)
    const dispatch = useDispatch()
    const onClickHandler = () => {
        if(isSuccess == true) {
            dispatch(addCharacters(sortedChars))
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

export default SortBtn;
