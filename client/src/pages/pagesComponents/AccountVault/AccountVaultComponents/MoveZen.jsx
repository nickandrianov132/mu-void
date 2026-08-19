import { useEffect, useState } from "react";
import { useMoveZenMutation } from "../../../../services/userApi";
import { useDispatch, useSelector } from "react-redux";
import { updateError } from "../../../../store/slices/vaultErrorSlice";
import { updateSuccess } from "../../../../store/slices/vaultSuccessSlice";


const MoveZen = () => {
    const [fetchMoveZen, {data: fetchZenData, isError, isSuccess, isFetching, error: fetchZenError}] = useMoveZenMutation();
    // const vaultError = useSelector(state => state.vaultError)
    const [inputValue, setInputValue] = useState('')
    const [sendZenValue, setSendZenValue] = useState(0)
    const [error, setError] = useState('');
    const [isZenError, setIsZenError] = useState(true)
    const [toVault, setToVault] = useState(false)
    const [toWeb, setToWeb] = useState(false)
    const [dir, setDir] = useState(null)
    const dispatch = useDispatch();

    // console.log(data);
    
    useEffect(() => {
        setInputValue('')
        setSendZenValue('')
        setIsZenError(true)
        setToVault(false)
        setToWeb(false)
        setDir(null)
    }, [isSuccess, isError])

    useEffect(() => {
        console.log(fetchZenError);
        if(isError) {
            dispatch(updateError({isError: true, message: fetchZenError.data.message}))
        }
    },[isError])
    useEffect(() => {

        if(isSuccess) {
            dispatch(updateSuccess({isSuccess: true, message: fetchZenData.message}))
        }
    },[isSuccess])

    const formatter = new Intl.NumberFormat('ru-RU');
    if(isError) {
        console.log(fetchZenError.data.message);

    }

    // Функция-агрегатор для проверки
    const validateValue = (cleanValue) => {
        if (cleanValue === '') {
            // dispatch(updateError({isError: false, message: ''}))
            setError('');
            setIsZenError(true)
            return false;
        }        
        // 1. Проверяем, что это только цифры
        if (!/^\d+$/.test(cleanValue)) {
            // dispatch(updateError({isError: true, message: 'Only digits is allowed!'}))
            setError('Only digits is allowed!');
            setIsZenError(true)
            return false;
        }
        // 2. Проверяем диапазон
        const num = parseInt(cleanValue, 10);
        if (num < 1000000 || num > 999999999) {
            // dispatch(updateError({isError: true, message: 'Zen transfer range is 1kk - 999kk!'}))
            setError('Zen transfer range is 1kk - 999kk!');
            setIsZenError(true)
            return false;
        } 
        dispatch(updateError({isError: false, message: ''}))
        setError('');
        setIsZenError(false)
        return true;
    }

    const handleChange = (e) => {
        const rawValue = e.target.value;
        // Шаг 1: Очищаем строку от ВСЕХ пробелов, чтобы получить чистое число
        // Используем регулярное выражение /\s/g (удалить все пробельные символы)
        const cleanValue = rawValue.replace(/\s/g, '');
        // Если пользователь стер всё, просто очищаем стейт
        if (cleanValue === '') {
            // dispatch(updateError({isError: false, message: ''}))
            setInputValue('');
            setError('');
            setIsZenError(false)
            return;
        }
        // Шаг 2: Проверяем, является ли ввод числом
        // Разрешаем форматировать только если введены цифры
        if (/^\d+$/.test(cleanValue)) {
            const num = parseInt(cleanValue, 10);
            // Форматируем число (превращаем '1000' в '1 000')
            const formattedValue = formatter.format(num);
            setInputValue(formattedValue);
            setSendZenValue(num);
            validateValue(cleanValue); // Валидируем ЧИСТОЕ число
        } else {
            // Если пользователь ввел букву, запускаем валидацию для вывода ошибки
            validateValue(cleanValue);
        }
    };
    
    function handlerCheckDirection(e) {
        if(e.target.name === 'vault') {
            console.log(e.target.name);
            setToVault(state => !state)
            setToWeb(false)
            setDir("to_game")
        }  
        if(e.target.name === 'web') {
            setToWeb(state => !state)
            setToVault(false)
            setDir("to_web")
        }  
    }
    function sendMoneyHandler() {
        fetchMoveZen({amount: sendZenValue, direction: dir})
    }

    return (
        <div className="move_zen_container">
            <label name="zen_input">Zen transfer</label>
            <input
                name="zen_input" 
                className="zen_input"
                value={inputValue}
                placeholder="Min 1kk - Max 999kk"
                onChange={handleChange}
                onFocus={() => setError(true)} 
            />
            <span className="error_span">{isZenError && error}</span>

            <span className="checkbox_span">
                <label className="custom_checkbox">
                    <input 
                        className="input_rules"
                        name="vault"
                        type="checkbox"
                        checked={toVault}
                        onChange={(e) => handlerCheckDirection(e)} 
                    />
                    <span className="checkmark"></span>
                <label 
                    name="web"
                    className={toVault ? "checkbox_label_checked" : "checkbox_label"}
                >To Vault</label>
                </label>
            </span>
            <span className="checkbox_span">
                <label className="custom_checkbox">
                    <input 
                        className="input_rules"
                        name="web"
                        type="checkbox"
                        checked={toWeb}
                        onChange={(e) => handlerCheckDirection(e)}  
                    />
                    <span className="checkmark"></span>
                <label 
                    name="web"
                    className={toWeb ? "checkbox_label_checked" : "checkbox_label"}
                >To Webstore</label>
                </label>
            </span>
            <button
                className={((toVault || toWeb) & !isZenError) ? "send_zen_btn" : "send_zen_btn_disabled"}
                disabled={!((toVault || toWeb) & !isZenError)}
                onClick={() => sendMoneyHandler()}
            >Send</button>
        </div>
    );
}

export default MoveZen;
