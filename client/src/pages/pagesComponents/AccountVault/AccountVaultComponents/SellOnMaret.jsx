import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMoveItemToMarketMutation } from "../../../../services/userApi";
import { updateItem } from "../../../../store/slices/itemSelectedSlice";
import { updateSuccess } from "../../../../store/slices/vaultSuccessSlice";
import { updateError } from "../../../../store/slices/vaultErrorSlice";
import { updateMenuState } from "../../../../store/slices/sellMenuState";

const MIN_ZEN_LIMIT = 100000;
const MAX_ZEN_LIMIT = 10000000000;
const MIN_GP_LIMIT = 10;
const MAX_GP_LIMIT = 100000;
const MIN_WC_LIMIT = 10;
const MAX_WC_LIMIT = 100000;


const SellOnMaret = () => {
    const { isWebstore, isSelected, itemSerial, itemSlot, width, height, categoryId } = useSelector(state => state.itemSelected);
    const [moveItemToMarket, {isError: isMarketError, isSuccess: isMarketSuccess, error: marketError, data: moveItemData}] = useMoveItemToMarketMutation();
    const { isMenu } = useSelector(state => state.sellMenuState);
    const [wcValue, setWcValue] = useState('')
    const [gpValue, setGpValue] = useState('')
    const [zenValue, setZenValue] = useState('')
    const [zenError, setZenError] = useState('');
    const [gpError, setGpError] = useState('');
    const [wcError, setWcError] = useState('');
    const [isZenError, setIsZenError] = useState(false)
    const [isGpError, setIsGpError] = useState(false)
    const [isWcError, setIsWcError] = useState(false)
    const [sendWcValue, setSendWcValue] = useState(0)
    const [sendGpValue, setSendGpValue] = useState(0)
    const [sendZenValue, setSendZenValue] = useState(0)
    const dispatch = useDispatch();
    console.log(sendWcValue);
    const formatter = new Intl.NumberFormat('ru-RU');
    useEffect(() => {
        if (isMarketError) {
            dispatch(updateError({isError: true, message: marketError.data.message}))
        }
    }, [isMarketError])
    useEffect(() => {
        if (!isSelected) {
            dispatch(updateMenuState({isMenu: false}))
            setWcValue('')
            setGpValue('')
            setZenValue('')
            setSendWcValue(0)
            setSendGpValue(0)
            setSendZenValue(0)
        }
    }, [isSelected])

    useEffect(() => {
        if (isMarketSuccess) {
            dispatch(updateSuccess({isSuccess: true, message: moveItemData.message}))
            dispatch(updateMenuState({isMenu: false}))
            setWcValue('')
            setGpValue('')
            setZenValue('')
            setSendWcValue(0)
            setSendGpValue(0)
            setSendZenValue(0)
        }
    }, [isMarketSuccess])

    const validateValue = (cleanValue, minLimit, maxLimit, setError, setIsError, currency) => {
        if (cleanValue === '') {
            setError('');
            setIsError(true)
            return false;
        }        
        // 1. Проверяем, что это только цифры
        if (!/^\d+$/.test(cleanValue)) {
            setError('Only digits is allowed!');
            setIsError(true)
            return false;
        }
        // 2. Проверяем диапазон
        const num = parseInt(cleanValue, 10);
        if (num < minLimit || num > maxLimit) {
            setError(`minimum price amount is: ${minLimit} ${currency}`);
            setIsError(true)
            return false;
        } 
        if (num > maxLimit) {
            setError(`maximum price amount is: ${minLimit} ${currency}`);
            setIsError(true)
            return false;
        } 
        // dispatch(updateError({isError: false, message: ''}))
        setError('');
        setIsError(false)
        return true;
    }

    const handleChange = (e, valueFn, sendValueFn, minLimit, maxLimit, setError, setIsError, currency) => {
        const rawValue = e.target.value;
        // Шаг 1: Очищаем строку от ВСЕХ пробелов, чтобы получить чистое число
        // Используем регулярное выражение /\s/g (удалить все пробельные символы)
        const cleanValue = rawValue.replace(/\s/g, '');
        // Если пользователь стер всё, просто очищаем стейт
        if (cleanValue === '') {
            // dispatch(updateError({isError: false, message: ''}))
            valueFn('');
            setError('');
            sendValueFn(0);
            setIsError(false)
            return;
        }
        // Шаг 2: Проверяем, является ли ввод числом
        // Разрешаем форматировать только если введены цифры
        if (/^\d+$/.test(cleanValue)) {
            const num = parseInt(cleanValue, 10);
            // Форматируем число (превращаем '1000' в '1 000')
            const formattedValue = formatter.format(num);
            valueFn(formattedValue);
            sendValueFn(num);
            validateValue(cleanValue, minLimit, maxLimit, setError, setIsError, currency); // Валидируем ЧИСТОЕ число
        } else {
            // Если пользователь ввел букву, запускаем валидацию для вывода ошибки
            validateValue(cleanValue, minLimit, maxLimit, setError, setIsError, currency);
        }
    };
    function cancelHandler() {
        dispatch(updateItem({
            isVault: false,
            isWebstore: false,
            isSelected: false,
            itemSlot: null,
            itemSerial: null,
            width: null,
            height: null,
            categoryId: null
        }))
    }

    function sellItemHandler() {
        const itemObj = {
            slotId: itemSlot, 
            serial: itemSerial,
            priceZen: sendZenValue,
            priceWCoin: sendWcValue, 
            priceGP: sendGpValue, 
            itemWidth: width, 
            itemHeight: height,
            categoryId: categoryId
        }
        if (isWcError) {
            dispatch(updateError({isError: true, message: wcError}))
            return
        }
        if (isGpError) {
            dispatch(updateError({isError: true, message: gpError}))
            return
        }
        if (isZenError) {
            dispatch(updateError({isError: true, message: zenError}))
            return
        }
        console.log(itemObj);
        moveItemToMarket(itemObj)
    }

    return (
        <>
            <button 
                className={isWebstore & isSelected & !isMenu ? "sell_market_btn" : "sell_market_btn hidden"}
                onClick={() => dispatch(updateMenuState({isMenu: true}))}
            >Sell on Market</button>

            <div className={isMenu & isSelected ? "sell_market_container" : "sell_market_container hidden"}>
                <span className="sell_input_span">
                    <input
                        name="wcInput"
                        className={isWcError ? "sell_input error" : "sell_input"}
                        value={wcValue}
                        onChange={e => handleChange(e, setWcValue, setSendWcValue, MIN_WC_LIMIT, MAX_WC_LIMIT, setWcError, setIsWcError, "WCoins")}
                    ></input>
                    <label
                        name="wcInput"
                        className="wc_label"
                    >WCoins</label>
                </span>
                <span className="sell_input_span">
                    <input
                        name="gpInput"
                        className={isGpError ? "sell_input error" : "sell_input"}
                        value={gpValue}
                        onChange={e => handleChange(e, setGpValue, setSendGpValue, MIN_GP_LIMIT, MAX_GP_LIMIT, setGpError, setIsGpError, "Goblin Points")}
                    ></input>
                    <label
                        name="gpInput"
                        className="gp_label"
                    >Goblin Points</label>
                </span>
                <span className="sell_input_span">
                    <input
                        name="zenInput"
                        className={isZenError ? "sell_input error" : "sell_input"}
                        value={zenValue}
                        onChange={e => handleChange(e, setZenValue, setSendZenValue, MIN_ZEN_LIMIT, MAX_ZEN_LIMIT, setZenError, setIsZenError, "Zen")}
                    ></input>
                    <label
                        name="zenInput"
                        className="zen_label"
                    >Zen</label>
                </span>

                <div className="sellmarket_btns_wrapper">
                    <button 
                        className="btn_sell"
                        onClick={sellItemHandler}
                    >Sell</button>
                    <button 
                        className="btn_cancel"
                        onClick={cancelHandler}
                    >Cancel</button>
                </div>
            </div>
        </>
    );
}

export default SellOnMaret;
