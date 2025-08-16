import Images from "../../../../assets/Images";
import DungeonMobItem from "./GuidePagesComponents/DungeonEventComponents/DungeonMobItem";
import GuideTitle from "./GuidePagesComponents/GuideTitle";

const DungeonEvent = () => {
    return (
        <div className="guide_main_container">
            <div className="dungeon_event_info_container">
                    <GuideTitle title='Dungeon Event info:' />
                    <div className="sealed_box_info">
                        <p className="sealed_box_p">🔸Find in Dungeon 1-3 and kill this monsters: <b>Lunar Rabbit, Fire Flame Ghost, Pouch of Blessing</b> </p>
                    </div>
                    <DungeonMobItem 
                        header={'Drop from Pouch of Blessing :'}
                        img={Images.pounch}
                        imgClass='sealed_box_img_mob'
                        percent1='35%'
                        percent2='37.5%'
                        percent3='20%'
                        percent4='7.5%'
                    />
                    <DungeonMobItem 
                        header={'Drop from Fire Flame Ghost :'}
                        img={Images.flame}
                        imgClass='sealed_box_img_mob'
                        percent1='30%'
                        percent2='35%'
                        percent3='25%'
                        percent4='10%'
                    />
                    <DungeonMobItem 
                        header={'Drop from Gold Rabbit :'}
                        img={Images.rabbit}
                        imgClass='sealed_box_img_mob'
                        percent1='40%'
                        percent2='40%'
                        percent3='15%'
                        percent4='5%'
                    />
                <div className="sealed_box_guide_container">
                    <div className="sealed_box_info">
                        <p className="sealed_box_p">🔸with some cheance you can get <em className="em_silver">Sealed Silver Box</em>, <em className="em_silver">Silver Key</em>, <em className="em_gold">Sealed Gold box</em>, <em className="em_gold">Gold key</em> .</p>
                    </div>
                    <div className="sealed_box_img_wrapper">
                        <img className="sealed_box_img_item" src={Images.gold_box_close}/>
                        <img className="sealed_box_img_item" src={Images.silver_box_close}/>
                        <img className="sealed_box_img_item" src={Images.gold_key}/>
                        <img className="sealed_box_img_item" src={Images.silver_key}/>
                    </div>
                </div>
                <div className="sealed_box_guide_container">
                    <div className="sealed_box_info">
                        <p className="sealed_box_p">🔸Then bring <em className="em_silver">Sealed Silver Box</em> & <em className="em_silver">Silver Key</em> or <em className="em_gold">Sealed Gold box</em> & <em className="em_gold">Gold key</em> to the Noria Chaos Machine and combine them.</p>
                    </div>
                    <div className="sealed_box_img_wrapper">
                        <img className="sealed_box_img_combine" src={Images.seal_box_comb}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DungeonEvent;
