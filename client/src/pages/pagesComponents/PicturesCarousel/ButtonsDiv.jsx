
const ButtonsDiv = ({itemsArr, index, setIndex}) => {
    return(
        <div className="buttonsDiv">
            {itemsArr.map((item) => {
                let itemIndex = itemsArr.indexOf(item);
                if(itemIndex === index){
                    return(
                    <button
                        className="button--active"
                        key={itemIndex}
                        ></button>)
                } else {
                    return(
                        <button
                        className="button"
                        onClick={() => setIndex(itemIndex)}
                        key={itemIndex}
                        ></button>
                    )
                }
            })}
        </div>
    );
}

export default ButtonsDiv;
