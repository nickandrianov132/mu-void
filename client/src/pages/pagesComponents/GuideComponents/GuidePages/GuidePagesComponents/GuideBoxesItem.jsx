
const GuideBoxesItem = ({locations, enchance, options, armors, weapons, shields, helmes, pants, boots, gloves, image, jewels}) => {
    return (
        <div className="dropBoxes_item_div">
            <div className="dropBoxes_image_wrapper">
                <img src={image}/>
            </div>
            <div className="dropBoxes_description_wrapper">
                <div className="description_location">
                    <p className="locations_p">Locations:<em>{locations}</em></p>
                </div>
                <div className="description_dropList">
                    <h5>🔹All items below enhanced {enchance} Options {options}add</h5>
                    <div className="dropList_class_items"><b>Armors:</b> {armors}</div>
                    <div className="dropList_class_items"><b>Weapons:</b> {weapons}</div>
                    {shields && <div className="dropList_class_items"><b>Shields:</b> {shields}</div>}
                    {jewels && <div className="dropList_jewels_items"><b>💎 {jewels}</b> - <em>Jewel of Bless, Soul, Life, Chaos</em></div>}
                </div>
            </div>
        </div>
    );
}

export default GuideBoxesItem;
