import { useEffect, useState } from "react";
import { useFetchAccountInfoQuery, useUserCryptoInvoiceMutation } from "../../../../services/userApi";
import { wcoinsToCurrency } from "../../../../utils/functions";
import Images from "../../../../assets/Images";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { HOME_ROUTE } from "../../../../utils/constants";
import SpinnerSmall from "../../../SpinnerSmall";

    
const data = {
    amount: 5,
    shop_id: 'o0s9hl3p9I0XiPwU',
    currency: 'USD'
}
const url = 'https://api.cryptocloud.plus/v2/invoice/create';
const headers = new Headers({
    'Authorization': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiTnprNU1qaz0iLCJ0eXBlIjoicHJvamVjdCIsInYiOiI2NTgzYzBlMzRiOTA2MzEwZmVlYWMwNmZmMzViYzlhNDY2MzgxNDc3NjA1NzM3ZGE0MDFiN2JjNGNjYjQ4MjNlIiwiZXhwIjo4ODE2NDA3MTA4OX0.wqEXpccvsTvbvdy67V_RkXgqXb9EpbrKVggSNVxu7Ws',
    'Content-Type': 'application/json'
})

const BuyWcoinsMain = () => {
    const [invoiceData, setInvoiceData] = useState(data)
    const {data: userInfo, isSuccess, isError, isLoading} = useFetchAccountInfoQuery()
    const [createInvoice, {isSuccess: invoiceSuccess, isError: invoiceError, isLoading: invoiceLoading}] = useUserCryptoInvoiceMutation()
    const {accessToken} = useSelector(state => state.user)
    const navigate = useNavigate()
    const [wcoins, setWcoins] = useState(300)
    const [currency, setCurrency] = useState(5)
    const [invoiceInfo, setInvoiceInfo] = useState(null)
    const [isInvoiceLoading, setIsInvoiceLoading] = useState(false)
    // console.log(wcoins);
    // console.log(userInfo)
    useEffect(() => {
        if(!accessToken) {
            navigate(HOME_ROUTE)
        }
    }, [accessToken])

    async function buyHandler() {
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(invoiceData)
        })
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                return Promise.reject('Creation Error')
            }
        })
        .then(data => {
            setInvoiceInfo(data.result)
            setIsInvoiceLoading(false)
            console.log('Success:',data)
            return data.result
        })
        .catch(error => {
            console.error('Fail:', error)
        })
    }


    return (
        <div className="buyWcoins_container">
            <h4 className="buyWcoins_header_h4">You can help our server by buying WCoins!</h4>
            <h5 className="buyWcoins_header_h5">☝ Wcoins purchase will be available after first Castle Siege🔒</h5>
            <div className="buy_wcoins_select_wrapper">
                <select 
                    name="wcoins"
                    className="buy_wcoins_select"
                    onChange={(e) => {
                        setWcoins(Number(e.target.value))
                        setCurrency(wcoinsToCurrency(e.target.value))
                        setInvoiceInfo(null)
                        setInvoiceData((d) => ({...d, amount: wcoinsToCurrency(e.target.value)}))
                    }}
                >
                    <option value={300}>300 WCoins</option>
                    <option value={600}>600 WCoins</option>
                    <option value={900}>900 WCoins</option>
                    <option value={1200}>1200 WCoins</option>
                    <option value={2100}>2100 WCoins</option>
                </select>
                <p className="buy_coins_currency_amount_p">= <b>{currency} USD</b> <em>+ payment fee</em></p>
            </div>
            {invoiceInfo ?
                    <div className="buy_wcoins_cryptocloud_wrapper"> 
                        <img src={Images.cryptocloud2} alt="cryptocloud"/>
                        

                            <a 
                                className="buy_wcoins_a"
                                onClick={() => createInvoice({accLogin: userInfo.accName, uuid: invoiceInfo.uuid, wcoins: wcoins})} 
                                href={invoiceInfo.link}
                                target="_blank"
                            >Pay</a>
                        
                    </div>
                :
                <div className="buy_wcoins_cryptocloud_wrapper">
                    <img src={Images.cryptocloud2} alt="cryptocloud"/>
                    {isInvoiceLoading ?
                            <div className="spinner_wrapper">
                                <SpinnerSmall/>
                            </div>
                            :
                    <button 
                        className="buy_wcoins_btn"
                        // onClick={() => {
                        //     setIsInvoiceLoading(true)
                        //     buyHandler()
                        // }}
                    >Pay with CryptoCloud</button>
                    }
                </div>
            }
            <div className="buyWcoins_crypto_info">
                <img className="crypto_info_img" src={Images.wcoins_crypto_info}></img>
            </div>
        </div>
    );
}

export default BuyWcoinsMain;
