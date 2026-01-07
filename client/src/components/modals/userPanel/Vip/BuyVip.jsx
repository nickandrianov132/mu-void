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
            <div className="vip_header_wrapper">
                <h3>VIP will be available after the 1<sup>st</sup> Castle Siege (18.01.2026)</h3>
            </div>
            {/* <div className="vip_header_wrapper">
                <h3>VIP is available!</h3>
            </div> */}
            <VipTable />
        </div>
    );
}

export default BuyVip;
