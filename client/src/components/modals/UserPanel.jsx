import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { GiAngelWings, GiAura, GiCancel, GiInfo, GiLockedChest, GiScales } from "react-icons/gi";
import SectionLinks from "./userPanel/SectionLinks";
import { useNavigate } from "react-router";
import { ACCOUNT_CHARACTERS_GR_ROUTE, ACCOUNT_CHARACTERS_ROUTE, ACCOUNT_INFO_ROUTE, ACCOUNT_VAULT_ROUTE, HOME_ROUTE, MARKET_ROUTE } from "../../utils/constants";
import VipStatusBar from "./userPanel/VipStatusBar";
import WCoinsCBar from "./userPanel/WCoinsCBar";
import { useFetchAccountInfoQuery } from "../../services/userApi";
import { updateUserInfo } from "../../store/slices/userInfoSlice";
import { useEffect } from "react";
import ZenBar from "./userPanel/ZenBar";
import GPointsBar from "./userPanel/GPointsBar";
import UserCurrency from "./userPanel/UserCurrency";


const UserPanel = () => {
    const {data: userInfo, isSuccess, isError, isLoading} = useFetchAccountInfoQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            dispatch(updateUserInfo({accName: userInfo.accName, wCoins: userInfo.wCoinsC, gPoints: userInfo.goblinPoints, zen: Number(userInfo.accZen)}))
            // console.log(`userInfo was updated! ${userInfo.accName}`);
        }
    },[isSuccess, userInfo])
    const logoutHandler = () => {
        dispatch(logout())
        navigate(HOME_ROUTE)
    }
    console.log(userInfo);

    return (
        <div className='user_panel'>
            {isSuccess && <div className="welcome_div"><span>Welcome <em>{userInfo.accName}</em> !</span></div>}

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
                <GiLockedChest className="user_panel_icon" />
                <a 
                    className='user_panel_item'
                    onClick={() => navigate(ACCOUNT_VAULT_ROUTE)}
                >Vault</a>
            </div>
            <div className="user_panel_item_container">
                <GiScales className="user_panel_icon" />
                <a 
                    className='user_panel_item'
                    onClick={() => navigate(MARKET_ROUTE)}
                >Market</a>
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
            <UserCurrency />
        </div>
    );
}

export default UserPanel;
