import { useFetchAccountInfoQuery } from "../../../services/userApi";
import GPointsBar from "./GPointsBar";
import WCoinsCBar from "./WCoinsCBar";
import ZenBar from "./ZenBar";


const UserCurrency = () => {
    const {data: userInfo, isSuccess, isError, isLoading} = useFetchAccountInfoQuery()
    // console.log(userInfo);
    return (
        <>
            {isSuccess &&
                <div className='user_currency_container'>
                    <WCoinsCBar wCoins={userInfo.wCoinsC}/>
                    <GPointsBar gPoints={userInfo.goblinPoints} />
                    <ZenBar zen={userInfo.accZen}/>
                </div>
            }
        </>
    );
}

export default UserCurrency;
