// import RegInput from "./RegInput";
// import { emailRegexp, loginRegexp, nameRegexp, passRegexp, questionAnswerRegexp } from "../../../utils/regExps";
// import { setEmail, setLogin, setName, setPassword, setRegAnswer, setRegQuestion } from "../../../store/slices/regUserSlice";
// import { setInputEmail, setInputLogin, setInputName, setInputPassword, setInputRegAnwer, setInputRegQuestion } from "../../../store/slices/regUserInputSlice";
// import { useSelector } from "react-redux";
// import { useRegistrationMutation } from "../../../services/registrationApi";
// import { useEffect } from "react";
// import { useNavigate } from "react-router";
// import { REGISTRATION_SUCCESS } from "../../../utils/constants";

const RegForm = ({ children }) => {
    // const navigate = useNavigate()
    // const userData = useSelector(state => state.regUserData)
    // const {inputLogin, inputPassword, inputEmail, inputName, inputRegQuestion, inputRegAnswer} = useSelector(state => state.regInputsData)
    // const [registration,{ error, isError, isSuccess}] = useRegistrationMutation()

    // const regUserHandler = async (e) => {
    //     e.preventDefault()
    //     if(inputLogin & inputPassword & inputEmail & inputName & inputRegQuestion, inputRegAnswer){
    //         let dateStamp = new Date().toLocaleString()
    //         let user = {...userData, date: dateStamp}
    //         console.log(user);
    //         await registration({...user})
            
    //     }else{
    //         console.log('some registration field incorrect!');
    //     }
        
    // }
    // useEffect(() => {
    //     if(isSuccess){
    //         navigate(REGISTRATION_SUCCESS)
    //     }
    // },[isSuccess])

    // function checkRegBtn(){
    //     if(inputLogin & inputPassword & inputEmail & inputName & inputRegQuestion & inputRegAnswer){
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    // console.log(isSuccess);
    // console.log(error);
    return (
            <form className="reg_form">
                {children}
                {/* <RegInput 
                    name='Login' 
                    regExp={loginRegexp} 
                    placeholder='login...'
                    regTip={`- only (a-zA-Z0-9)`} 
                    userAction={setLogin}
                    inputAction={setInputLogin}
                />
                <RegInput 
                    name='Password' 
                    regExp={passRegexp} 
                    placeholder='password...'
                    regTip={`- only (a-zA-Z0-9)`}
                    userAction={setPassword}
                    inputAction={setInputPassword}
                />
                <RegInput 
                    name='email' 
                    regExp={emailRegexp} 
                    placeholder='email...'
                    regTip={`- standart type email`}
                    userAction={setEmail}
                    inputAction={setInputEmail} 
                />
                <RegInput 
                    name='Name' 
                    regExp={nameRegexp} 
                    placeholder='Name...'
                    regTip={`- only (a-zA-Z0-9)`}
                    userAction={setName}
                    inputAction={setInputName} 
                />
                <RegInput 
                    name='Question' 
                    regExp={questionAnswerRegexp} 
                    placeholder='your question...'
                    regTip={`- only (a-zA-Z)`}
                    userAction={setRegQuestion}
                    inputAction={setInputRegQuestion} 
                />
                <RegInput 
                    name='Answer' 
                    regExp={questionAnswerRegexp} 
                    placeholder='your answer...'
                    regTip={`- only (a-zA-Z)`}
                    userAction={setRegAnswer}
                    inputAction={setInputRegAnwer} 
                />
                <div className="reg_btn_div">
                    <div className="reg_error_div">
                    {isError && <p>{error.data.message}</p>}
                    </div>
                    <button 
                        className={checkRegBtn() ? "reg_btn" : "reg_btn_disable"}
                        onClick={e => regUserHandler(e)}
                    >Registration</button>
                </div> */}
            </form>
    );
}
export default RegForm;

