import { useState } from "react"


const useVipCost = (value) => {
    const [price, setPrice] = useState(value)

function setCalcPrice(type, days){
    switch (type) {
        case "bronze":
            switch (days) {
                case "7":
                    setPrice(300)
                    break;
                case "14":
                    setPrice(600)
                    break;
                case "30":
                    setPrice(1100)
                    break;
                default:
                    setPrice(0)
                    break;
            }
            break;
        case "silver":
            switch (days) {
                case "7":
                    setPrice(400)
                    break;
                case "14":
                    setPrice(800)
                    break;
                case "30":
                    setPrice(1400)
                    break;
                default:
                    setPrice(0)
                    break;
            }
            break;
        case "gold":
            switch (days) {
                case "7":
                    setPrice(500)
                    break;
                case "14":
                    setPrice(1000)
                    break;
                case "30":
                    setPrice(1800)
                    break;
                default:
                    setPrice(0)
                    break;
            }
            break;
    
        default:
            setPrice(0)
            break;
    }
}

    return [price, setCalcPrice]

}

export default useVipCost;