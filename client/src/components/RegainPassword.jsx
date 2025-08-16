import { useSelector } from "react-redux";
import RegForm from "../pages/pagesComponents/RegistrationComp/RegForm";
import RegInput from "../pages/pagesComponents/RegistrationComp/RegInput";
import { emailRegexp, loginRegexp, questionAnswerRegexp } from "../utils/regExps";
import { setRegainAnswer, setRegainEmail, setRegainLogin, setRegainQuestion } from "../store/slices/regainPassSlice";
import { setRegainInputAnswer, setRegainInputEmail, setRegainInputLogin } from "../store/slices/regainPassInputSlice";
import { useFetchAccountAnswerMutation, useFetchAccountQuestionMutation } from "../services/regainPassApi";
import { useEffect } from "react";
import { HOME_ROUTE } from "../utils/constants";
import { useNavigate } from "react-router";
import SpinnerSmall from "./SpinnerSmall";


const RegainPassword = () => {
    const navigate = useNavigate()
    const regainUserData = useSelector((state) => state.regainPassword)
    const { regainInputLogin, regainInputEmail, regainInputAnswer } = useSelector((state) => state.regainPasswordInput)
    const [fetchAccountQuestion, {data: question, isSuccess: isSuccessQ, isError: isErrorQ, isLoading: isLoadingQ, error: errorQ}] = useFetchAccountQuestionMutation()
    const [fetchAccountAnswer, {data: password, isSuccess: isSuccessA, isError: isErrorA, isLoading: isLoadingA, error: errorA}] = useFetchAccountAnswerMutation()
    console.log(regainUserData);
    console.log(regainInputLogin, regainInputEmail, regainInputAnswer);
    console.log(question);
    console.log(password);
    console.log(`isSuccessA: ${isSuccessA}`);

    function checkRegBtn(){
        if(regainInputLogin & regainInputEmail){
            return true
        } else {
            return false
        }
    }
    const regainUserQuestionHandler = async (e) => {
        e.preventDefault()
        if(regainInputLogin & regainInputEmail){
            console.log(regainUserData);
            await fetchAccountQuestion(regainUserData)
            
        }else{
            console.log('some registration field incorrect!');
        }
    }
    const regainUserAnswerHandler = async (e) => {
        e.preventDefault()
        console.log(regainInputLogin & regainInputEmail & regainInputAnswer);
        if(regainInputAnswer){
            console.log(regainUserData);
            await fetchAccountAnswer(regainUserData)
            
        }else{
            console.log('some registration field incorrect!');
        }
    }
    useEffect(() => {
        if(isSuccessQ){
            setRegainQuestion(question)
        }
    },[isSuccessQ])
    // useEffect(() => {
    //     if(isSuccessA){
    //         setRegainPassword(password.password)
    //         console.log(password.password);
    //         navigate(REGAIN_PASSWORD_SUCCESS_ROUTE)
    //     }
    // },[isSuccessA])
    return (
        <div className="registration_container">
            <RegForm>
                <RegInput 
                    name='Login' 
                    regExp={loginRegexp} 
                    placeholder='login...'
                    regTip={`- only (a-zA-Z0-9)`} 
                    userAction={setRegainLogin}
                    inputAction={setRegainInputLogin}
                />
                <RegInput 
                    name='E-mail' 
                    regExp={emailRegexp} 
                    placeholder='email...'
                    regTip={`standart email type`} 
                    userAction={setRegainEmail}
                    inputAction={setRegainInputEmail}
                />
                {question && 
                    <>
                    <div className="regain_question_container">
                        <div className="regain_question_wrapper">
                            <span className="regain_question_title">Secret Question:</span>
                            <span className="regain_question_content">{question.question}?</span>
                        </div>
                        {isErrorA && <p className="regain_warning">{errorA.data.message}</p>}
                    </div>
                    <RegInput 
                        name='Answer' 
                        regExp={questionAnswerRegexp} 
                        placeholder='your answer...'
                        regTip={`- only (A-Za-z)`} 
                        userAction={setRegainAnswer}
                        inputAction={setRegainInputAnswer}
                    />
                    </>
                }
                {password && 
                    <div className="regain_password_container">
                        <span className="regain_password_title">Your Password:</span>
                        <span className="regain_password_content">{password.password}</span>
                    </div>
                }
                <div className="reg_btn_div">
                    <div className="reg_error_div">
                    {isErrorQ && <p>{errorQ.data.message}</p>}
                    </div>
                    {isLoadingQ ? (
                            <SpinnerSmall />
                        )
                        :
                        isSuccessA ? 
                            <button 
                                className="reg_btn"
                                onClick={() => navigate(HOME_ROUTE)}
                            >Ok</button>
                        :   isLoadingA ? (
                                <SpinnerSmall />
                        )
                        :
                            <button 
                                className={checkRegBtn() ? "reg_btn" : "reg_btn_disable"}
                                onClick={question ? e => regainUserAnswerHandler(e) : e => regainUserQuestionHandler(e)}
                            >{question ? "Answer" : "Recover"}</button>
                            
                    }
                </div>
            </RegForm>
        
        </div>
    );
}

export default RegainPassword;
