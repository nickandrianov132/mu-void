import { useNavigate } from "react-router";
import RegForm from "./pagesComponents/RegistrationComp/RegForm";
import { useDispatch, useSelector } from "react-redux";
import { useRegistrationMutation } from "../services/registrationApi";
import { REGISTRATION_SUCCESS } from "../utils/constants";
import { setInputEmail, setInputLogin, setInputName, setInputPassword, setInputRegAnwer, setInputRegQuestion} from "../store/slices/regUserInputSlice";
import { emailRegexp, loginRegexp, nameRegexp, passRegexp, questionAnswerRegexp } from "../utils/regExps";
import { useEffect, useState } from "react";
import RegInput from "./pagesComponents/RegistrationComp/RegInput";
import { setEmail, setLogin, setName, setPassword, setRegAnswer, setRegQuestion} from "../store/slices/regUserSlice";


const Registration = () => {
const navigate = useNavigate()
    const userData = useSelector(state => state.regUserData)
    const {inputLogin, inputPassword, inputEmail, inputName, inputRegQuestion, inputRegAnswer} = useSelector(state => state.regInputsData)
    const [registration,{ error, isError, isSuccess}] = useRegistrationMutation()
    const [isRules, setIsRules] = useState(false)
    const dispatch = useDispatch()
    // console.log(`inputLogin: ${inputLogin}; inputEmail: ${inputEmail}; inputRules: ${inputRules}`);
    console.log(isRules);
    const regUserHandler = async (e) => {
        e.preventDefault()
        if(inputLogin & inputPassword & inputEmail & inputName & inputRegQuestion & inputRegAnswer){
            let dateStamp = new Date().toLocaleString()
            let user = {...userData, date: dateStamp}
            console.log(user);
            await registration({...user})
            
        }else{
            console.log('some registration field incorrect!');
        }
    }
    useEffect(() => {
        if(isSuccess){
            navigate(REGISTRATION_SUCCESS)
        }
    },[isSuccess])

    function checkRegBtn(){
        if(inputLogin & inputPassword & inputEmail & inputName & inputRegQuestion & inputRegAnswer & isRules){
            return true
        } else {
            return false
        }
    }
    // function rulesHandler() {
    //     setRules(state => !state)
    //     dispatch(userAction(inputValue))
    // }
    // useEffect(() => {
    //     dispatch(setRegRules(isRules))
    // }, [isRules])
    // console.log(isSuccess);
    // console.log(error);
    return (
        <div className='registration_container'>
            <RegForm>
                <RegInput 
                    name='Login' 
                    regExp={loginRegexp} 
                    placeholder='login...'
                    regTip={`- only (a-zA-Z0-9)`}
                    regTipErr={`*incorrect login!`} 
                    userAction={setLogin}
                    inputAction={setInputLogin}
                />
                <RegInput 
                    name='Password' 
                    regExp={passRegexp} 
                    placeholder='password...'
                    regTip={`- only (a-zA-Z0-9)`}
                    regTipErr={`*incorrect password!`}
                    userAction={setPassword}
                    inputAction={setInputPassword}
                />
                <RegInput 
                    name='E-mail' 
                    regExp={emailRegexp} 
                    placeholder='e-mail...'
                    regTip={`- standart type e-mail`}
                    regTipErr={`*incorrect e-mail!`}
                    userAction={setEmail}
                    inputAction={setInputEmail} 
                />
                <RegInput 
                    name='Name' 
                    regExp={nameRegexp} 
                    placeholder='Name...'
                    regTip={`- only (a-zA-Z0-9)`}
                    regTipErr={`*incorrect name!`}
                    userAction={setName}
                    inputAction={setInputName} 
                />
                <RegInput 
                    name='Question' 
                    regExp={questionAnswerRegexp} 
                    placeholder='your question...'
                    regTip={`- only (a-zA-Z)`}
                    regTipErr={`*incorrect question!`}
                    userAction={setRegQuestion}
                    inputAction={setInputRegQuestion} 
                />
                <RegInput 
                    name='Answer' 
                    regExp={questionAnswerRegexp} 
                    placeholder='your answer...'
                    regTip={`- only (a-zA-Z)`}
                    regTipErr={`*incorrect answer!`}
                    userAction={setRegAnswer}
                    inputAction={setInputRegAnwer} 
                />
                <input 
                    type="checkbox"
                    onChange ={() => {
                        setIsRules(state => !state)
                        // setInputRules(state => !state)
                    }}  
                />
                <div className="reg_btn_div">
                    <div className="reg_error_div">
                    {isError && <p>{error.data.message}</p>}
                    </div>
                    <button 
                        disabled={checkRegBtn()}
                        className={checkRegBtn() ? "reg_btn" : "reg_btn_disable"}
                        onClick={e => regUserHandler(e)}
                    >Registration</button>
                </div>
            </RegForm>
        </div>
    );
}

export default Registration;
