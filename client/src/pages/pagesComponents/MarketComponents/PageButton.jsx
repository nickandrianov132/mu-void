import { useDispatch } from "react-redux";
import { updateMarketQuery } from "../../../store/slices/marketQuerySlice";

const PageButton = ({page, isActive, setPage }) => {
    const dispatch = useDispatch();
    return (
        <button 
            className={isActive ? "page_btn_active" : "page_btn"}
            // onClick={() => setPage(page)}
            onClick={() => dispatch(updateMarketQuery({page: page}))}
        >
            {page}
        </button>
    );
}

export default PageButton;
