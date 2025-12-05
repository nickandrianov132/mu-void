import DungeonImg from "./DungeonImg";

const DungeonMobItem = ({header, img, imgClass, percent1, percent2, percent3, percent4}) => {
    return (
            <div className="dungeon_mob_info">
                <h5 className="dungeon_mob_title">🎁{header}</h5>
                <div className="drop_description_wrapper">
                    <p className="guide_p_description"><b className="description_b">{percent1}</b> - <em className="description_em_jewel">Jewel of Bless</em>, <em className="description_em_jewel">Jewel of Soul</em>, <em className="description_em_jewel">Jewel of Life</em>, <em className="description_em_jewel">Jewel of Chaos</em>,<em className="description_em_jewel"> Jewel of Creation</em></p>
                    <p className="guide_p_description"><b className="description_b">{percent2}</b> - <em className="description_em_ribbon_green">Green Ribbon Box</em>, <em className="description_em_ribbon_red">Red Ribbon Box</em></p>
                    {percent3 &&
                        <p className="guide_p_description"><b className="description_b">{percent3}</b> - <em className="description_em_box_kundun">Box of Kundun+1</em>, <em className="description_em_box_kundun">Box of Kundun+2</em>, <em className="description_em_box_kundun">Box of Kundun+3</em>, <em className="description_em_box_kundun">Box of Kundun+4</em></p>
                    }
                    {percent4 &&
                        <p className="guide_p_description"><b className="description_b">{percent4}</b> - <em className="em_silver">Silver Box, Silver Key</em>, <em className="em_gold">Gold Box, Gold Key</em></p>
                    }
                </div>
                <DungeonImg img={img} imgClass={imgClass}/>
            </div>
    );
}

export default DungeonMobItem;
