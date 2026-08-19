import DungeonImg from "./DungeonImg";

const DungeonMobItem = ({header, img, imgClass, percent1, percent2, percent3, percent4, greenbox, redbox, harmony, silver, gold, bok1, bok2, bok3, bok4, bok5, job, jos, jol, joc, jocr, remark, gp}) => {
    return (
            <div className="dungeon_mob_info">
                <h5 className="dungeon_mob_title">🎁{header}</h5>
                <div className="drop_description_wrapper">
                    <p className="guide_p_description">
                        <b className="description_b">{percent1}</b> -
                        {job &&
                            <em className="description_em_jewel"> {job}</em>
                        }
                        {jos &&
                            <em className="description_em_jewel"> {jos}</em>
                        }
                        {jol &&
                            <em className="description_em_jewel"> {jol}</em>
                        }
                        {joc &&
                            <em className="description_em_jewel"> {joc}</em>
                        }
                        {jocr &&
                            <em className="description_em_jewel"> {jocr}</em>
                        }
                    </p>
                    {percent2 &&
                        <p className="guide_p_description"><b className="description_b">{percent2}</b> -
                            {greenbox &&
                                <em className="description_em_ribbon_green"> {greenbox} </em>
                            }
                            {redbox &&
                                <em className="description_em_ribbon_red"> {redbox} </em>
                            }
                            {harmony &&
                                <em className="description_em_harmony"> {harmony}</em> 
                            }
                        </p>
                    }
                    {percent3 &&
                        <p className="guide_p_description"><b className="description_b">{percent3}</b> -
                            {bok1 && 
                                <em className="description_em_box_kundun"> Box of Kundun+1  </em>
                            } 
                            {bok2 &&
                                <em className="description_em_box_kundun"> Box of Kundun+2  </em>
                            
                            }
                            {bok3 &&
                                <em className="description_em_box_kundun"> Box of Kundun+3  </em>
                            
                            }
                            {bok4 &&
                                <em className="description_em_box_kundun"> Box of Kundun+4  </em>
                            
                            }
                            {bok5 &&
                                <em className="description_em_box_kundun"> Box of Kundun+5</em>
                            
                            }
                        </p>
                    }
                    {percent4 &&
                        <p className="guide_p_description"><b className="description_b">{percent4}</b> - 
                            {silver &&
                                <em className="em_silver"> Silver Box, Silver Key </em> 
                            }
                            {gold &&
                                <em className="em_gold"> Gold Box, Gold Key {remark && <i>{remark}</i>} </em>
                            }
                        </p>
                    }
                    {gp && 
                        <p className="gp_p">GoblinPoints: <em className="gp_em">{gp}</em></p>
                    }
                </div>
                <DungeonImg img={img} imgClass={imgClass}/>
            </div>
    );
}

export default DungeonMobItem;
