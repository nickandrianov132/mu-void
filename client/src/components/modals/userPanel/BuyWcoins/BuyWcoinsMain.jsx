import { useEffect, useState } from "react";

const BuyWcoinsMain = () => {
    const [paymentLink, setPaymentLink] = useState(null)
    const url = 'https://api.cryptocloud.plus/v2/invoice/create';
    const headers = new Headers({
        'Authorization': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiTnprNU1qaz0iLCJ0eXBlIjoicHJvamVjdCIsInYiOiI2NTgzYzBlMzRiOTA2MzEwZmVlYWMwNmZmMzViYzlhNDY2MzgxNDc3NjA1NzM3ZGE0MDFiN2JjNGNjYjQ4MjNlIiwiZXhwIjo4ODE2NDA3MTA4OX0.wqEXpccvsTvbvdy67V_RkXgqXb9EpbrKVggSNVxu7Ws',
        'Content-Type': 'application/json'
    })
    const data = {
        amount: 100,
        shop_id: 'o0s9hl3p9I0XiPwU',
        currency: 'USD'
    }

    const envoiceLink = fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    })
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            return Promise.reject('Creation Error')
        }
    })
    .then(data => {
        // setPaymentLink(data.result.link)
        console.log('Success:',data)
        return data.result.link
    })
    .catch(error => {
        console.error('Fail:', error)
    })
    // useEffect(() => {
    //     if(paymentLink){
            
    //     }
    // }, [paymentLink])
    return (
        <div className="buyWcoins_container">
            Buy Wcoins!
            {envoiceLink ?
                <a href={paymentLink} target="_blank">Buy</a>
            :
                <button disabled={true}>Buy</button>
            }
        </div>
    );
}

export default BuyWcoinsMain;
