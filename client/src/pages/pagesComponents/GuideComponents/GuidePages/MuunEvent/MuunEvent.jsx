import Images from "../../../../../assets/Images";

const MuunEvent = () => {
    return (
        <div className="guide_main_container">
            <h2 className="guide_title">Muun Event Info:</h2>
            <div className="guide_body">
                <div className="body_item">
                    <p className="item_p">In the Noria location, you can find a total of <em className="em_orange">20 Bali</em> monsters across the entire map, with a Bali respawn time of 30 minutes. Defeating one drops a <em className="em_gold">WereRabbit Egg</em>. Throwing the WereRabbit Egg onto the ground gives you a chance to receive either a Level 1 Muun Pet or an <em className="em_green">Evolution Stone</em>.</p>
                    <div className="images_wrapper">
                        <img className="item_img_base" src={Images.bali_monster}/>
                        <div>
                            <img className="item_img_base" src={Images.muun_1}/>
                            <img className="item_img_base" src={Images.muun_2}/>
                            <img className="item_img_base" src={Images.muun_3}/>
                        </div>
                    </div>
                </div>
                <div className="body_item">
                    <p className="item_p"> To level up your Muun Pet, use another Level 1 Muun Pet of the same type:</p>
                    <div className="images_wrapper">
                        <img className="item_img" src={Images.muun_level_up}/>
                    </div>
                </div>
                <div className="body_item">
                    <p className="item_p"> Once your Muun Pet reaches its maximum level, use the specific <em className="em_green">Evolution Stone</em> designated for your type of Muun:</p>
                    <div className="images_wrapper">
                        <img className="item_img" src={Images.muun_combine}/>
                    </div>
                    <p className="item_p"><em className="em_orange">Note:</em> Evolution will visually transform your Muun Pet and significantly increase its bonus stats.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MuunEvent;
