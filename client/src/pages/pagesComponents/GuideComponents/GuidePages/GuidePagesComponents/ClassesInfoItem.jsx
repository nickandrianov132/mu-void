
const ClassesInfoItem = ({classTitle, img, as, asrPVM, asrPVP, def, dsrPVP, dsrPVM, magDMGmin, magDMGmax, curDMGmin, curDMGmax, physDMGmin, physDMGmax, addInfo1, addInfo2, skillImg1, skillImg2, skillImg3, skillImg4, skillImg5, skillInfo1, skillInfo2, skillInfo3, skillInfo4, skillInfo5, altImg1, altImg2, altImg3, altImg4, altImg5}) => {
    return (
        <div className="classes_item_container">
            <h4 className="class_item_title">{classTitle}</h4>
            <div className="class_item_body">
                <div className="class_img_wrapper">
                    <img className="class_img" src={img} />
                </div>
                <div className="class_info_wrapper">
                    <p><b>Atack Speed</b> - Agility / {as}</p>
                    <p><b>Atack Success Rate <em className="pvm_em">PVM</em></b> - {asrPVM}</p>
                    <p><b>Atack Success Rate <em className="pvp_em">PVP</em></b> - {asrPVP}</p>
                    <p><b>Defence</b> - Agility / {def}</p>
                    <p><b>Defence Success Rate <em className="pvm_em">PVM</em></b> - {dsrPVM}</p>
                    <p><b>Defence Success Rate <em className="pvp_em">PVP</em></b> - {dsrPVP}</p>
                    {magDMGmin &&
                        <p><b>Magic DMG Min</b> - {magDMGmin}</p>
                    }
                    {magDMGmax &&
                        <p><b>Magic DMG Max</b> - {magDMGmax}</p>
                    }
                    {curDMGmin &&
                        <p><b>Curse DMG Min</b> - {curDMGmin}</p>
                    }
                    {curDMGmax &&
                        <p><b>Curse DMG Max</b> - {curDMGmax}</p>
                    }
                    {physDMGmin &&
                        <p><b>Physical DMG Min</b> - {physDMGmin}</p>
                    }
                    {physDMGmax &&
                        <p><b>Physical DMG Max</b> - {physDMGmax}</p>
                    }
                    {addInfo1 &&
                        <p><b>Strenght</b> - {addInfo1}</p>
                    }
                    {addInfo2 &&
                        <p><b>Vitality</b> - {addInfo2}</p>
                    }
                    {skillImg1 &&
                        <div className="skill_wrapper">
                            <img className="skill_img" src={skillImg1} alt={altImg1} title={altImg1}/>
                            <p className="skill_description">{skillInfo1}</p>
                        </div>
                    }
                    {skillImg2 &&
                        <div className="skill_wrapper">
                            <img className="skill_img" src={skillImg2} alt={altImg2} title={altImg2}/>
                            <p className="skill_description">{skillInfo2}</p>
                        </div>
                    }
                    {skillImg3 &&
                        <div className="skill_wrapper">
                            <img className="skill_img" src={skillImg3} alt={altImg3} title={altImg3}/>
                            <p className="skill_description">{skillInfo3}</p>
                        </div>
                    }
                    {skillImg4 &&
                        <div className="skill_wrapper">
                            <img className="skill_img" src={skillImg4} alt={altImg4} title={altImg4}/>
                            <p className="skill_description">{skillInfo4}</p>
                        </div>
                    }
                    {skillImg5 &&
                        <div className="skill_wrapper">
                            <img className="skill_img" src={skillImg5} alt={altImg5} title={altImg5}/>
                            <p className="skill_description">{skillInfo5}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ClassesInfoItem;
