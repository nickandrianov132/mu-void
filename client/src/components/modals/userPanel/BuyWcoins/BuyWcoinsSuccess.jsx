import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../../../../utils/constants";

const BuyWcoinsSuccess = () => {
    const navigate = useNavigate()
    function buyHandler() {
        navigate(HOME_ROUTE)
    }
    return (
        <div className='buyWcoins_success_container'>
            <div className="buyWcoins_reply_wrapper">
                <p>Your payment saccessfuly accepted!</p>
                <button 
                    className="go_back_btn"
                    onClick={buyHandler}
                >Ok</button>
            </div>
            
        </div>
    );
}

export default BuyWcoinsSuccess;
