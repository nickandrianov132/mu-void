import { useNavigate } from "react-router";
import VipTable from "./VipTable";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { HOME_ROUTE } from "../../../../utils/constants";

const BuyVip = () => {
    const {accessToken} = useSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if(!accessToken) {
            navigate(HOME_ROUTE)
        }
    }, [accessToken])
       
    return (
        <div className="buyVip_container">
            <VipTable />
        </div>
    );
}

export default BuyVip;
