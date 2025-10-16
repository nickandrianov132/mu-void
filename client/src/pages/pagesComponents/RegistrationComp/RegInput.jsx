import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const RegInput = ({name, regExp, placeholder, userAction, inputAction, regTip, regTipErr}) => {
    const [inputValue, setInputValue] = useState('')
    const [check, setCheck] = useState(true)
    const [valid, setValid] = useState('')
    const [validInput, setValidInput] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
            if(userAction){
                dispatch(userAction(inputValue))
            }
    }, [valid])
    useEffect(() => {
        if(inputAction){
            dispatch(inputAction(validInput))
        }
    }, [validInput])
    const matchWithRegExp = (e) => {
        let regExpMatch = regExp.test(e)
        if(e.length > 0) {
            setCheck(regExpMatch)
            if(regExpMatch){
                setValid(inputValue)
                setValidInput(regExpMatch)
            }else{
                setValidInput(regExpMatch)
            }
        }else{
            setValid('')
            setValidInput(regExpMatch)
        }
    }

    return (
        <div className="reg_input_row_div">
            <div className="reg_pre_input_div">
                <p className="p_reg_pre_input">{`${name}:`}</p>
            </div>
            <div className="reg_input_div">
                <input 
                    className={check ? "reg_input " : "reg_input_error"}
                    type="text"
                    value={inputValue} 
                    placeholder={placeholder}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={(e) => matchWithRegExp(e.target.value)}
                    onFocus={() => setCheck(true)}
                ></input>
                {!check &&
                    <p className="p_warn">{regTipErr}</p> 
                }
            </div>
            <div className="reg_tip_div">
                <p className="p_reg_input_tip">{regTip}</p>
            </div>
        </div>
    );
}

export default RegInput;
