
const GuideSealBoxItem = ({image, mobs, dk, dw, elf, sum, mg, dl, rf}) => {
    return (
        <div className="dropBoxes_item_div">
            <div className="dropBoxes_image_wrapper">
                <img src={image}/>
            </div>
            <div className="dropBoxes_description_wrapper">
                <div className="description_location">
                    <p className="locations_p">Drops from:<em>{mobs}</em></p>
                </div>
                <div className="description_dropList">
                    {/* <h5>🔹All Citems below enhanced {enchance} Options 4-16add</h5> */}
                    <div className="dropList_class_items_anc"><b>Dark Knight:</b><em> {dk}</em></div>
                    <div className="dropList_class_items_anc"><b>Dark Wizard:</b><em> {dw}</em></div>
                    <div className="dropList_class_items_anc"><b>Fairy Elf:</b><em> {elf}</em></div>
                    {sum && <div className="dropList_class_items_anc"><b>Summoner:</b><em> {sum}</em></div>}
                    {mg && <div className="dropList_class_items_anc"><b>Magic Gladiator:</b><em> {mg}</em></div>}
                    {dl && <div className="dropList_class_items_anc"><b>Dark Lord:</b><em> {dl}</em></div>}
                    {rf && <div className="dropList_class_items_anc"><b>Rage Fighter:</b><em> {rf}</em></div>}   
                </div>
            </div>
        </div>
    );
}

export default GuideSealBoxItem;
