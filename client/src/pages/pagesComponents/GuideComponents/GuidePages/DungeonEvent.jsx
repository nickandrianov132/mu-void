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
                        header={'Drop from Gold Rabbit :'}
                        gp="20"
                        img={Images.rabbit}
                        imgClass='sealed_box_img_mob'
                        percent1='20%'
                        percent2='80%'
                        greenbox='Green Ribbon Box,'
                        redbox='Red Ribbon Box'
                        job='Jewel of Bless,'
                        jos='Jewel of Soul,'
                        jol='Jewel of Life,'
                        joc='Jewel of Chaos'
                    />
                    <DungeonMobItem 
                        header={'Drop from Pouch of Blessing :'}
                        gp="40"
                        img={Images.pounch}
                        imgClass='sealed_box_img_mob'
                        percent1='30%'
                        // percent2='50%'
                        percent3='50%'
                        job='Jewel of Bless,'
                        jos='Jewel of Soul,'
                        jol='Jewel of Life,'
                        joc='Jewel of Chaos,'
                        jocr='Jewel of Creation'
                        bok1={true}
                        bok2={true}
                        bok3={true}
                        bok4={true}
                        percent4='20%'
                        silver={true}
                    />
                    <DungeonMobItem 
                        header={'Drop from Fire Flame Ghost :'}
                        gp="60"
                        img={Images.flame}
                        imgClass='sealed_box_img_mob'
                        percent1='15%'
                        harmony="Jewel of Harmony"
                        job='Jewel of Bless bundle 10,'
                        jos='Jewel of Soul bundle 10,'
                        jol='Jewel of Life bundle 10'
                        percent2='15%'
                        joh='Jewel of Harmony'
                        percent3='35%'
                        bok3={true}
                        bok4={true}
                        bok5={true}
                        percent4='35%'
                        silver={true}
                        gold={true}
                        remark="(Gold box & key available after 1st CS)"
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
