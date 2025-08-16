import { useEffect, useState } from 'react';
import UserPanel from './UserPanel';
import { useDispatch, useSelector } from 'react-redux';
import { useUserLoginMutation } from '../../services/userApi';
import { setToken } from '../../store/slices/authSlice';
import { loginRegexp, passRegexp } from '../../utils/regExps';
import SpinnerSmall from '../SpinnerSmall';
import { useNavigate } from 'react-router';
import { REGAIN_PASSWORD_ROUTE } from '../../utils/constants';

const Login = () => {
    const [loginValue, setLoginValue] = useState('')
    const [passValue, setPassValue] = useState('')
    const [checkLogin, setCheckLogin] = useState(true)
    const [checkPass, setCheckPass] = useState(true)
    const [warn, setWarn] = useState(false) 
    const { accessToken} = useSelector((state) => state.user)
    const [userLogin, {data, error, isLoading, isError, isSuccess}] = useUserLoginMutation()
    const [pTipLogin, setPTipLogin] = useState(false) 
    const [pTipPass, setPTipPass] = useState(false) 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginCheck = (e) => {
        if(e.length > 0){
            setCheckLogin(loginRegexp.test(loginValue))
        }
        if(e.length < 4 & e.length > 0) {
            alert('Minimun 4 characters required!')
        }
        return
    }
    const passCheck = (e) => {
        if(e.length > 0){
            setCheckPass(passRegexp.test(passValue))
        } 
        if(e.length < 4 & e.length > 0) {
            alert('Minimum 4 symbols required!')
        }
        return
    }
    const handleAuth = async (e) => {
        e.preventDefault()
        let user = {
            login: loginValue,
            password: passValue
        }
        if(loginValue.length >= 4 & passValue.length >= 4 ){
           try {
                userLogin(user)
                // console.log(localStorage.getItem('token'));
                setLoginValue('')
                setPassValue('')
            } catch (err) {
                console.log(err)
            }
        } else {
            alert('Incorrect login or password')
        }
    }
    useEffect(() => {
        if (isSuccess) {
            dispatch(setToken(data.token))
        }
    }, [data])

    return (
        <div className='login_container'>
            {accessToken ? <UserPanel />
                :
                <form className='login_form'>
                    <div className="login_form_container">
                        <input
                            className={checkLogin ? 'input' : 'input_error'} 
                            type="text"
                            placeholder='Login...'
                            value={loginValue}
                            onChange={(e) => setLoginValue(e.target.value)}
                            onBlur={(e) => {
                                loginCheck(e.target.value)
                                setPTipLogin(state => false)
                                }
                            }
                            onFocus={() => {
                                setCheckLogin(true)
                                setPTipLogin(state => true)
                                }
                            }
                        />
                        {pTipLogin ? <p className="p_tip">*required 4-10 symbols</p> : <p className="p_tip_none">tip</p>}
                        <input
                            className={checkPass ? 'input' : 'input_error'}
                            type="password"
                            placeholder='Password...'
                            value={passValue}
                            onChange={(e) => setPassValue(e.target.value)}
                            onBlur={(e) => {
                                passCheck(e.target.value)
                                setPTipPass(state => false)
                                }
                            }
                            onFocus={() => {
                                setCheckPass(true) 
                                setPTipPass(state => true)
                            }}
                        />
                        {pTipPass ? <p className="p_tip">*required 6-12 symbols</p> : <p className="p_tip_none">tip</p>}
                        {isError && <p className="login_warn_p">*{error.data.message}</p>}
                        <div className='form_btn_container'>
                            <a 
                                className='form_btn_a'
                                onClick={() => navigate(REGAIN_PASSWORD_ROUTE)}
                            >Forgot your password?</a>
                            {isLoading ? <SpinnerSmall/> 
                            :
                            <button
                                className='form_btn'
                                onClick={e => handleAuth(e)}
                            >
                                Login
                            </button>
                            }
                        </div>
                    </div>
                </form>
            }
        </div>
    );
}

export default Login;
