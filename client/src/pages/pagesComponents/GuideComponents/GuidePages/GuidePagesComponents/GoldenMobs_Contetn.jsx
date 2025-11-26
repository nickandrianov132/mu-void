
const GoldenMobsContetn = ({img1, img2, title, desc1, desc2, drop1, qtty1}) => {
    return (
        <div className="golden_mobs_item_container">
            <div className="golden_mobs_image_wrapper">
                <img src={img1}/>
                {img2 && <img src={img2}/>}
            </div>
            <div className="golden_mobs_desc_wrapper">
                <h5 className="golden_desc_title">{title}</h5>
                <p className="golden_info_p">
                    <em>Location: </em>
                    {desc1}
                </p>
                <p className="golden_info_p">
                    <em>Quantity: </em>
                    {desc2}
                </p>
                <p className="golden_info_p">
                    <em>Drop Item: </em>
                    {drop1}
                </p>
                <p className="golden_info_p">
                    <em>Drop Quantity: </em>
                    {qtty1}
                </p>
            </div>  
        </div>
    );
}

export default GoldenMobsContetn;
