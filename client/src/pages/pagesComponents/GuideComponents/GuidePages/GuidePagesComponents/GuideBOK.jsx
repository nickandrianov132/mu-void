
const GuideBOK = ({image, armors, weapons, shields, pendants, rings}) => {
    return (
        <div className="dropBoxes_item_div">
                <div className="dropBoxes_image_wrapper">
                    <img src={image}/>
                </div>
            <div className="dropBoxes_description_wrapper">
                <div className="description_dropList">
                    <h5>🔹All items below with 1-2 random Exc Options</h5>
                    <div className="dropList_bok_class_items"><b>Armors:</b> {armors}</div>
                    <div className="dropList_bok_class_items"><b>Weapons:</b> {weapons}</div>
                    <div className="dropList_bok_class_items"><b>Shields:</b> {shields}</div>
                    {pendants.length > 1
                        &&
                        <div className="dropList_bok_class_items"><b>Pendants:</b> {pendants}</div>
                    }
                    {rings.length > 1 
                        &&
                        <div className="dropList_bok_class_items"><b>Rings:</b> {rings}</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default GuideBOK;
