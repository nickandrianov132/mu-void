import { useFetchAccountInfoQuery } from "../../../services/userApi";
import Spinner from "../../../components/Spinner";
import { accountCheckVip } from "../../../utils/functions";

const AccountTable = () => {
    const {data: userInfo, isSuccess, isError, isLoading} = useFetchAccountInfoQuery()
    console.log(userInfo);
    return (
        <>
        {isLoading ?
            <Spinner/>
            :
            <table className="account_info_table">
                <thead>
                    <tr>
                        <th className="user_th" colSpan={2}>Account Info:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="user_tr">
                        <td className="user_td_title">E-mail:</td>
                        <td className="user_td_email">{userInfo.eMail}</td>
                    </tr>
                    <tr className="user_tr">
                        <td className="user_td_title">Registred:</td>
                        <td>{userInfo.joinDate}</td>
                    </tr>
                    <tr className="user_tr">
                        <td className="user_td_title">Reg. Question:</td>
                        <td className="user_td_secret">{userInfo.regQuestion}</td>
                    </tr>
                    <tr className="user_tr">
                        <td className="user_td_title">Reg. Answer:</td>
                        <td className="user_td_secret">{userInfo.regAnswer}</td>
                    </tr>
                    <tr className="user_tr">
                        <td className="user_td_title">Vip Type:</td>
                        <td>{accountCheckVip(userInfo.vipType)}</td>
                    </tr>
                    {userInfo.vipStart &&
                        <tr className="user_tr">
                            <td className="user_td_title">Vip Start:</td>
                            <td>{userInfo.vipStart}</td>
                        </tr>
                    }
                    {userInfo.vipDays &&
                    <tr className="user_tr">
                        <td className="user_td_title">Vip Days:</td>
                        <td>{userInfo.vipDays}</td>
                    </tr>
                    }
                    <tr className="user_tr">
                        <td className="user_td_title">Credits:</td>
                        <td className="user_td_credits">{userInfo.credits ? userInfo.credits : "0"}</td>
                    </tr>
                    <tr className="user_tr">
                        <td className="user_td_title">WCoins C:</td>
                        <td className="user_td_credits">{userInfo.wCoinsC ? userInfo.wCoinsC : "0"}</td>
                    </tr>
                    <tr className="user_tr">
                        <td className="user_td_title">WCoins P:</td>
                        <td className="user_td_credits">{userInfo.wCoinsP ? userInfo.wCoinsP : "0"}</td>
                    </tr>
                    <tr className="user_tr">
                        <td className="user_td_title">Goblin Points:</td>
                        <td className="user_td_credits">{userInfo.goblinPoints ? userInfo.goblinPoints : "0"}</td>
                    </tr>
                </tbody>
            </table>

        }
        </>
    );
}

export default AccountTable;
