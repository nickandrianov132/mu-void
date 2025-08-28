import { useReducer, useState } from "react";
import useVipCost from "../../../../customHooks/useVipCost";

const VipTable = () => {
    const [dur, setDur] = useState('')
    const [costBronze, setCostBronze] = useVipCost(300)
    const [costSilver, setCostSilver] = useVipCost(400)
    const [costGold, setCostGold] = useVipCost(500)
    // console.log(cost);

    function selectHandler(e) {
        console.log(e.target.name);
        console.log(e.target.value);
        if(e.target.name == 'bronze') {
            setCostBronze(e.target.name, e.target.value)
        }
        if(e.target.name == 'silver') {
            setCostSilver(e.target.name, e.target.value)
        }
        if(e.target.name == 'gold') {
            setCostGold(e.target.name, e.target.value)
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
                    <td>Exp: +5x</td>
                    <td>Exp: +7.5x</td>
                    <td>Exp: +10x</td>
                </tr>
                <tr>
                    <td>Drop: +10%</td>
                    <td>Drop: +20%</td>
                    <td>Drop: +30%</td>
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
                    <td>{costBronze} WCoins</td>
                    <td>{costSilver} WCoins</td>
                    <td>{costGold} WCoins</td>
                </tr>
                <tr>
                    <td>
                        <button 
                        className="vip_table_btn"
                        onClick={() => alert("Not available yet!")}
                        >Buy</button>
                    </td>
                    <td>
                        <button 
                        className="vip_table_btn"
                        onClick={() => alert("Not available yet!")}
                        >Buy</button>
                    </td>
                    <td>
                        <button 
                        className="vip_table_btn"
                        onClick={() => alert("Not available yet!")}
                        >Buy</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default VipTable;
