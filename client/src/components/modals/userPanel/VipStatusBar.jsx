import { GiCrownCoin } from "react-icons/gi";
import { useFetchAccountInfoQuery } from "../../../services/userApi";
import SpinnerSmall from "../../SpinnerSmall";
import { vipDescClassName, vipEmblemClassName, vipExpireCheck, vipType } from "../../../utils/functions";

const VipStatusBar = () => {
const {data: userInfo, isSuccess, isError, isLoading} = useFetchAccountInfoQuery()
// console.log(userInfo);
    return (
        <div className="vip_statuBar">
                {isSuccess &&
                    <div className="vip_statusBar_container">
                        {vipExpireCheck(userInfo.vipDays) ?
                        <>
                            <div className="vip_emblem_wrapper">
                                <GiCrownCoin className={vipEmblemClassName(userInfo.vipType)}/>
                            </div>
                            <div className="vip_description_wrapper">
                                <span className={vipDescClassName(userInfo.vipType)} >{vipType(userInfo.vipType)}</span>
                            </div>
                        </>
                        : 
                        <h4 className="no_vip_div">No VIP</h4>
                        }
                    </div>
                }
                {isLoading &&
                    <SpinnerSmall/>
                }
        </div>
    );
}

export default VipStatusBar;
