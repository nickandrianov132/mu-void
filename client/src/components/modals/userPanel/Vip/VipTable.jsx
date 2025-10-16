import { useState } from "react";
import useVipCost from "../../../../customHooks/useVipCost";
import { useFetchAccountInfoQuery, useUserBuyVipMutation } from "../../../../services/userApi";
import { useEffect } from "react";
import SpinnerSmall from "../../../SpinnerSmall";

const VipTable = () => {
    // const [dur, setDur] = useState(false)
    const {data: userInfo, isSuccess, isError, isLoading} = useFetchAccountInfoQuery()
    const [userBuyVip, {data: vipData, error: vipErr, isSuccess: vipIsSuccess, isError: vipIsError, isLoading: vipIsLoading}] = useUserBuyVipMutation()
    const [vipBronze, setVipBronze] = useVipCost({type: 1, days: 7, price: 300})
    const [vipSilver, setVipSilver] = useVipCost({type: 2, days: 7, price: 500})
    const [vipGold, setVipGold] = useVipCost({type: 3, days: 7, price: 700})
    console.log(userInfo);
    console.log(vipData);
    // useEffect(() => {
    //     setDur(true)
    //     setTimeout(() => {
    //         setDur(false)
    //     },2000)
    // }, [vipData])

    // console.log(vipData);
    // console.log(isSuccess);
    // console.log(new Date().toString());
    function selectHandler(e) {
        console.log(e.target.name);
        console.log(e.target.value);
        if(e.target.name == 'bronze') {
            setVipBronze(e.target.name, e.target.value)
        }
        if(e.target.name == 'silver') {
            setVipSilver(e.target.name, e.target.value)
        }
        if(e.target.name == 'gold') {
            setVipGold(e.target.name, e.target.value)
        }
    }

    async function vipBuyHandler(e) {
        if(e.target.id === "bronze") {
            await userBuyVip({
                name: userInfo.accName,
                days: vipBronze.days,
                type: vipBronze.type
            })
        }
        if(e.target.id === "silver") {
            await userBuyVip({
                name: userInfo.accName,
                days: vipSilver.days,
                type: vipSilver.type
            })
        }
        if(e.target.id === "gold") {
            await userBuyVip({
                name: userInfo.accName,
                days: vipGold.days,
                type: vipGold.type
            })
        }
        
    }

    return (
        <table className="vip_table">
            <thead>
                <tr>
                    <th className="th_bronze">Bronze VIP</th>
                    <th className="th_silver">Silver VIP</th>
                    <th className="th_gold">Gold VIP</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Exp: +10%</td>
                    <td>Exp: +20%</td>
                    <td>Exp: +35%</td>
                </tr>
                <tr>
                    <td>Drop: +10%</td>
                    <td>Drop: +20%</td>
                    <td>Drop: +35%</td>
                </tr>
                <tr>
                    <td>
                        <select 
                            name="bronze" 
                            className="vip_select"
                            onChange={(e) => selectHandler(e)}
                        >
                            <option value="7">7 days</option>
                            <option value="14">14 days</option>
                            <option value="30">30 days</option>
                        </select>
                    </td>
                    <td>
                        <select 
                            name="silver" 
                            className="vip_select"
                            onChange={(e) => selectHandler(e)}
                        >
                            <option value="7">7 days</option>
                            <option value="14">14 days</option>
                            <option value="30">30 days</option>
                        </select>
                    </td>
                    <td>
                        <select 
                            name="gold" 
                            className="vip_select"
                            onChange={(e) => selectHandler(e)}
                        >
                            <option value="7">7 days</option>
                            <option value="14">14 days</option>
                            <option value="30">30 days</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>{vipBronze.price} WCoins</td>
                    <td>{vipSilver.price} WCoins</td>
                    <td>{vipGold.price} WCoins</td>
                </tr>
                <tr>
                    <td className="td_btn_vipBuy">
                        <button
                        id="bronze" 
                        className="vip_table_btn"
                        onClick={(e) => vipBuyHandler(e)}
                        >Buy</button>
                    </td>
                    <td>
                        <button
                        id="silver" 
                        className="vip_table_btn"
                        onClick={(e) => vipBuyHandler(e)}
                        >Buy</button>
                    </td>
                    <td className="td_btn_vipBuy">
                        <button
                        id="gold" 
                        className="vip_table_btn"
                        onClick={(e) => vipBuyHandler(e)}
                        >Buy</button>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                        {vipIsSuccess && <span className="vip_td_em_tip">{vipData[0].RESULT}</span>}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default VipTable;
