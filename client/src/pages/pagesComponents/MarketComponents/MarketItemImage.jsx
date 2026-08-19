import { getItemIconPath } from '../../../utils/muItemsFunctions';

const MarketItemImage = ({ item }) => {
    // console.log(item);
    const widthCells = item.width || 2;
    const heightCells = item.height || 2;

    return (
        <div 
            className='market_item_img_wrapper'
            style={{
                gridTemplateColumns: `repeat(${widthCells}, 1.2em)`,
                gridTemplateRows: `repeat(${heightCells}, 1.2em)`
            }}
        >
            <img 
                className="market_item_image" 
                src={getItemIconPath(item.cat, item.id, item.level)}
                style={{
                    gridColumn: `1 / span ${widthCells}`,
                    gridRow: `1 / span ${heightCells}`
                }}
            /> 
        </div>
    );
}

export default MarketItemImage;
