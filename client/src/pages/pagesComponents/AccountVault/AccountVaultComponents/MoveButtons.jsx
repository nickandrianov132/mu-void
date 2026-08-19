import { useDispatch, useSelector } from "react-redux";
import { useMoveItemToVaultMutation, useMoveItemToWebstoreMutation } from "../../../../services/userApi";
import { useEffect } from "react";
import { updateItem } from "../../../../store/slices/itemSelectedSlice";
import { updateError } from "../../../../store/slices/vaultErrorSlice";

const MoveButtons = () => {
    const {isSelected, isVault, isWebstore, itemSlot, itemSerial } = useSelector(state => state.itemSelected);
    const [fetchMoveItemWebstore, {isError: isErrorWebstore, isSuccess: isSuccessWebstore, isFetching: isFetchingWebstore, error: webstoreError}] = useMoveItemToWebstoreMutation();
    const [fetchMoveItemVault, {isError, isSuccess, isFetching, error: vaultError}] = useMoveItemToVaultMutation();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(updateItem({
            isSelected: false,
            isVault: false,
            isWebstore: false,
            itemSlot: null,
            itemSerial: null
        }))
    }, [isSuccessWebstore, isSuccess, isErrorWebstore, isError])

    useEffect(() => {
        if (isErrorWebstore) {
            dispatch(updateError({isError: true, message: webstoreError.data.message}))
        }
        if (isError) {
            dispatch(updateError({isError: true, message: vaultError.data.message}))
        }
    },[isError, isErrorWebstore])

    function handlerMoveItemWebstore(){
        fetchMoveItemWebstore({slotId: itemSlot, serial: itemSerial})
    }

    function handlerMoveItemVault(){
        fetchMoveItemVault({slotId: itemSlot, serial: itemSerial})
    }

    return (
        <div className="move_buttons_container">
            <button
                disabled={!isSelected || isWebstore}
                className={`move_item_btn ${isSelected & isVault ? "selected" : ""}`}
                onClick={() => handlerMoveItemWebstore()}
                >Move to Webstore</button>
            <button
                disabled={!isSelected || isVault}
                className={`move_item_btn ${isSelected & isWebstore ? "selected" : ""}`}
                onClick={() => handlerMoveItemVault()}
            >Move to Vault</button>
        </div>
    );
}

export default MoveButtons;
