import { useDispatch } from "react-redux";
import { addCharacters } from "../../../store/slices/characterSlice";
import { useFetchSortedCharQuery } from "../../../services/charApi";
import { filterChars } from "../../../utils/functions";

const SortBtn = ({title, sortType}) => {
    const {data: sortedChars, isSuccess} = useFetchSortedCharQuery(sortType,{
        selectFromResult: ({ data, isSuccess, isError, isLoading }) => ({
            data: data?.filter((e) => filterChars(e.id)),
            isLoading: isLoading,
            isSuccess: isSuccess,
            isError: isError,
        })
    })
    const dispatch = useDispatch()
    const onClickHandler = () => {
        if(isSuccess == true) {
            dispatch(addCharacters(sortedChars))
        }
    }
    console.log(sortedChars);
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
