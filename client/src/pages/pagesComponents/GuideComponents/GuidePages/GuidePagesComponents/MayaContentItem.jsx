import PictureCarusel from "../../../PicturesCarousel/PictureCarusel";

const MayaContentItem = ({title, remark, quantity, respInfo, images, img, img2, dropImg1, ExtraDropImg1, drop, extraDrop, armors, weapons, extraWeapons, shields, pendants, rings, exc, gp, skills}) => {
    return (
        <div className="maya_content_item">
            <div className="maya_content_item_title">
                <h5>{title}</h5>
            </div>
            <div className="maya_content_item_container">
                <div className="maya_img_wrapper">
                    <img src={img}/>
                    {img2 && <img src={img2}/>}
                    {images && <PictureCarusel 
                        images={images}
                    />
                    }
                </div>
                <div className="maya_drop_wrapper">
                    {respInfo && <h6 className="maya_drop_remark_resp">🕗 {respInfo}</h6>}
                    {remark && <h6 className="maya_drop_remark">{remark}</h6>}
                    {quantity && <h6 className="maya_drop_quantity">Quantity: {quantity}</h6>}
                    {drop && 
                            <>
                                <div className="maya_drop_item">
                                    <div className="drop_item_title"><b>Drop:</b></div>
                                    <div className={exc ? "drop_item_content" : "drop_item_content_base"}>{drop}</div>
                                </div>
                                {dropImg1 && 
                                    <div className="drop_img_wrapper">
                                        <img src={dropImg1}/>
                                    </div>
                                }
                            </>
                    }
                    {extraDrop && 
                            <>
                                <div className="maya_drop_item">
                                    <div className="drop_item_title"><b>Extra drop:</b></div>
                                    <div className={exc ? "drop_item_content" : "drop_item_content_base"}>{extraDrop}</div>
                                </div>
                                {ExtraDropImg1 && 
                                    <div className="drop_img_wrapper">
                                        <img src={ExtraDropImg1}/>
                                    </div>
                                }
                            </>
                    }
                    {armors && <div className="maya_drop_item">
                                    <div className="drop_item_title"><b>Armors:</b></div>
                                    <div className="drop_item_content">{armors}</div>
                                </div>
                    }
                    {weapons && <div className="maya_drop_item">
                                    <div className="drop_item_title"><b>Weapons:</b></div>
                                    <div className={exc ? "drop_item_content" : "drop_item_content_base"}>{weapons}<em className="archangel_weapons"> {extraWeapons}</em> </div>
                                </div>
                    }
                    {shields && <div className="maya_drop_item">
                                    <div className="drop_item_title"><b>Shields:</b></div>
                                    <div className="drop_item_content">{shields}</div>
                                </div>
                    }
                    {pendants && <div className="maya_drop_item">\
                                    <div className="drop_item_title"><b>Pendants:</b></div>
                                    <div className="drop_item_content">{pendants}</div>
                                </div>
                    }
                    {rings && <div className="maya_drop_item">
                                    <div className="drop_item_title"><b>Rings:</b></div>
                                    <div className="drop_item_content">{rings}</div>
                                </div>
                    }
                    {skills && <div className="maya_drop_item">
                                    <div className="drop_item_title"><b>Skills:</b></div>
                                    <div className={exc ? "drop_item_content" : "drop_item_content_base"}>{skills}</div>
                                </div>
                    }
                    {gp && 
                        <p className="gp_p">GoblinPoints: <em className="gp_em">{gp}</em></p>
                    }
                </div>
            </div>
        </div>
    );
}

export default MayaContentItem;
