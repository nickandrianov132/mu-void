import { useFetchAccountInfoQuery } from '../../../services/userApi';

const WCoinsCBar = () => {
    const {data: userInfo, isSuccess, isError, isLoading} = useFetchAccountInfoQuery()
    console.log(userInfo)

    return (
        <>
            {isSuccess &&
                <div className='wcoinsc_bar_container'>
                    <span className='wcoins_title'>WCoins:</span>
                    <span className='wcoins_amount'>{userInfo.wCoinsC}</span>
                </div>
            }
        </>
    );
}

export default WCoinsCBar;
