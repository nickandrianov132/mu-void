import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../../../utils/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AccountWebstore from "./AccountVaultComponents/AccountWebstore";
import Vault from "./AccountVaultComponents/Vault";
import MoveButtons from "./AccountVaultComponents/MoveButtons";
import MoveZen from "./AccountVaultComponents/MoveZen";
import SellOnMaret from "./AccountVaultComponents/SellOnMaret";
import PopUp from "./AccountVaultComponents/Popup";


const AccountVault = () => {
    const {accessToken} = useSelector(state => state.user);
    const navigate = useNavigate();
    // console.log(accessToken);
    useEffect(() => {
        if(!accessToken) {
            navigate(HOME_ROUTE) 
        }
    }, [accessToken]);
    return (
        <div className="account_vault_store">
            <div className="vault_header">
                <b>To sell an item on the market, transfer it to the Webstore first</b>
            </div>
            <div className="account_vault_container">
                <Vault />
                <div className="menu_container">
                    <MoveButtons />
                    <SellOnMaret />
                    <MoveZen />
                    <PopUp />
                </div>
                <AccountWebstore/>
            </div>
        </div>
    );
}

export default AccountVault;
