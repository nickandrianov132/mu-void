import { useDispatch, useSelector } from "react-redux";
import { updateError } from "../../../../store/slices/vaultErrorSlice";
import { updateSuccess } from "../../../../store/slices/vaultSuccessSlice";
import { updateItem } from "../../../../store/slices/itemSelectedSlice";

const PopUp = () => {
    const {isError, message: errorMessage} = useSelector(state => state.vaultError);
    const {isSuccess, message: successMessage} = useSelector(state => state.vaultSuccess);
    const dispatch = useDispatch();
    console.log(`isSuccess: ${isSuccess}`);
    return (
        <>
        {isError &&
        <div className={`popup_container_error ${!isError ? "hidden" : ""}`}>
            
            <>
                <h4 className="error_h4">Error:</h4>
                <span className="error_span">{errorMessage}</span>
                <button
                    className="error_ok_btn"
                    onClick={() => dispatch(updateError({isError: false, message: ''}))}
                >Ok</button>
            </>

        </div>
        }
        {isSuccess &&
            <div className={`popup_container_success ${isSuccess ? "" : "hidden"}`}>
            
                
                <>
                    <h4 className="success_h4">Success!</h4>
                    <span className="success_span">{successMessage}</span>
                    <button
                        className="success_ok_btn"
                        onClick={() => {
                            dispatch(updateSuccess({isSuccess: false, message: ''}))
                            dispatch(updateItem({
                                isVault: false,
                                isWebstore: false,
                                isSelected: false,
                                itemSlot: null,
                                itemSerial: null,
                                width: null,
                                height: null
                            }))
                        }}
                    >Ok</button>
                </>
            </div>
        }
        </>
    );
}

export default PopUp;
