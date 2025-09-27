import { useState } from "react"


const useVipCost = (value) => {
    const [vip, setVip] = useState(value)

function setCalcPrice(type, days){
    switch (type) {
        case "bronze":
            switch (days) {
                case "7":
                    setVip((state) => ({type: 1, days: 7, price: 300}))
                    break;
                case "14":
                    setVip((state) => ({type: 1, days: 14, price: 600}))
                    break;
                case "30":
                    setVip((state) => ({type: 1, days: 30, price: 1200}))
                    break;
                default:
                    setVip({type: 1, days: 7, price: 300})
                    break;
            }
            break;
        case "silver":
            switch (days) {
                case "7":
                    setVip((state) => ({type: 2, days: 7, price: 500}))
                    break;
                case "14":
                    setVip((state) => ({type: 2, days: 14, price: 1000}))
                    break;
                case "30":
                    setVip((state) => ({type: 2, days: 30, price: 2000}))
                    break;
                default:
                    setVip({type: 2, days: 7, price: 500})
                    break;
            }
            break;
        case "gold":
            switch (days) {
                case "7":
                    setVip((state) => ({type: 3, days: 7, price: 700}))
                    break;
                case "14":
                    setVip((state) => ({type: 3, days: 14, price: 1400}))
                    break;
                case "30":
                    setVip((state) => ({type: 3, days: 30, price: 2800}))
                    break;
                default:
                    setVip({type: 3, days: 7, price: 700})
                    break;
            }
            break;
    
        default:
            setVip({})
            break;
    }
}

    return [vip, setCalcPrice]

}

export default useVipCost;