import { useSelector } from "react-redux";

const RegainPassSuccess = () => {
    const {password}= useSelector((state) => state.regainPassword)
    // console.log(password);
    return (
        <div className='registration_success_container'>
            <p className='reg_success_p'>Your Password:{password}</p>
        </div>
    );
}

export default RegainPassSuccess;
