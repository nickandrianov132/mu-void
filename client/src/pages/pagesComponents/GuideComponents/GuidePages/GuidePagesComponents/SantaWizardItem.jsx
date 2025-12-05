
const SantaWizardItem = ({title, item1cheance, item2cheance, item3cheance, item4cheance, desc1, desc2, desc3, desc4, img1, em1DescClass, em2DescClass, em3DescClass, em4DescClass}) => {
    return (
        <div className="santa_wizard_item_container">
            <h4 className="santa_wizard_item_header">{title}</h4>
            <div className="santa_wizard_item_body">
                <div className="img_wrapper">
                        <img src={img1}/>
                </div>
                <div className="desc_wrapper">
                    <h5 className="desc_title">Drop Info:</h5>
                    {item1cheance &&
                        <div className="desc_item_wrapper">
                            <span className="item_span"><em>{item1cheance}</em> -</span>
                            <span className="desc_span"><em className={em1DescClass}>{desc1}</em>.</span>
                        </div>
                    }
                    {item2cheance &&
                        <div className="desc_item_wrapper">
                            <span className="item_span"><em>{item2cheance}</em> -</span>
                            <span className="desc_span"><em className={em2DescClass}>{desc2}</em>.</span>
                        </div>
                    }
                    {item3cheance &&
                        <div className="desc_item_wrapper">
                            <span className="item_span"><em>{item3cheance}</em> -</span>
                            <span className="desc_span"><em className={em3DescClass}>{desc3}</em>.</span>
                        </div>
                    }
                    {item4cheance &&
                        <div className="desc_item_wrapper">
                            <span className="item_span"><em>{item4cheance}</em> -</span>
                            <span className="desc_span"><em className={em4DescClass}>{desc4}</em>.</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default SantaWizardItem;
