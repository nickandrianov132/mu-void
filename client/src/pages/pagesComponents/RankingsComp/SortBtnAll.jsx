import { useDispatch } from "react-redux";
import { addCharacters } from "../../../store/slices/characterSlice";
import { useFetchAllCharQuery } from "../../../services/charApi";
import { filterChars } from "../../../utils/functions";

const SortBtnAll = ({title}) => {
    const {data: chars, isSuccess} = useFetchAllCharQuery(undefined,{
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
