import { pretyZen } from "../../../utils/functions";


const MarketItemPrice = ({ priceWC, priceGP, priceZen }) => {
    return (
        <div className="market_item_price_wrapper">
            {priceWC &&
                <span className="span_wc">WC: <em>{pretyZen(priceWC)}</em></span>
            }
            {priceGP &&
                <span className="span_gp">GP: <em>{pretyZen(priceGP)}</em></span>
            }
            {priceZen &&
                <span className="span_zen">Zen: <em>{pretyZen(priceZen)}</em></span>
            }
        </div>
    );
}

export default MarketItemPrice;
