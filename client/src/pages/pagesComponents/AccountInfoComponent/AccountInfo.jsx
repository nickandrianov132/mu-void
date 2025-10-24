import { useSelector } from "react-redux";
import AccountTable from "./AccountTable";
import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../../../utils/constants";
import { useEffect } from "react";

const AccountInfo = () => {
    const {accessToken} = useSelector(state => state.user)
    const navigate = useNavigate()
    // console.log(accessToken);
    useEffect(() => {
        if(!accessToken) {
            navigate(HOME_ROUTE)
        }
    }, [accessToken])
        
    return (
        <>
        {accessToken &&
            <div className="user_info_container">
                <AccountTable />
            </div>
        }
        
        </>
    );
}

export default AccountInfo;
