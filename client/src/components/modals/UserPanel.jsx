import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { GiAngelWings, GiAura, GiCancel, GiCrownCoin, GiInfo, GiMinions, GiNewspaper } from "react-icons/gi";
import SectionLinks from "./userPanel/SectionLinks";
import { useNavigate } from "react-router";
import { ACCOUNT_CHARACTERS_GR_ROUTE, ACCOUNT_CHARACTERS_ROUTE, ACCOUNT_INFO_ROUTE, HOME_ROUTE } from "../../utils/constants";
import VipStatusBar from "./userPanel/VipStatusBar";
import WCoinsCBar from "./userPanel/WCoinsCBar";
import { useFetchAccountInfoQuery } from "../../services/userApi";

const UserPanel = () => {
    const {data: userInfo, isSuccess, isError, isLoading} = useFetchAccountInfoQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        dispatch(logout())
        navigate(HOME_ROUTE)
    }
    // dispatch(logout())
    return (
        <div className='user_panel'>
            {isSuccess && <div className="welcome_div"><span>Welcome <em>{userInfo.accName}</em> !</span></div>}
            {/* <div className="user_panel_item_container">
                <GiMinions className="user_panel_icon" />
                <a 
                    className='user_panel_item'
                    onClick={() => alert("Not available yet!")}
                >Characters</a>
            </div> */}
            <div className="user_panel_item_container">
                <GiAngelWings className="user_panel_icon"/>
                <a 
                    className='user_panel_item'
                    onClick={() => navigate(ACCOUNT_CHARACTERS_GR_ROUTE)}
                >Grand Reset</a>
            </div>
            <div className="user_panel_item_container">
                <GiAura className="user_panel_icon"/>
                <a 
                    className='user_panel_item'
                    onClick={() => navigate(ACCOUNT_CHARACTERS_ROUTE)}
                >Reset</a>
            </div>
            <div className="user_panel_item_container">
                <GiInfo className="user_panel_icon" />
                <a 
                    className='user_panel_item'
                    onClick={() => navigate(ACCOUNT_INFO_ROUTE)}
                >Account</a>
            </div>
            <div className="user_panel_item_container">
                <GiCancel className="user_panel_icon" />
                <a 
                    className='user_panel_item'
                    onClick={logoutHandler}
                    >Logout</a>
            </div>
            <SectionLinks />
            <VipStatusBar />
            <WCoinsCBar />
        </div>
    );
}

export default UserPanel;
