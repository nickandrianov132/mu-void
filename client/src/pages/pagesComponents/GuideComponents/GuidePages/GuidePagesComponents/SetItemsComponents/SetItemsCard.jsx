import Images from "../../../../../../assets/Images";
import SetImgContainer from "./SetImgContainer";
import SetOptionsContainer from "./SetOptionsContainer";


const SetItemsCard = ({title, opt1, opt2, opt3, opt4, opt5, opt6, img1, img2, img3, img4, img5, img6, options, images}) => {
    return (
        <div className="set_item_card">
            <h1 className="set_item_title">{title}</h1>
            <div className='set_item_body'>
                <SetImgContainer>
                    {images?.map((img) => (
                        <img key={img} className="set_img" src={Images[img]}/>
                    ))}
                </SetImgContainer>
                <SetOptionsContainer>
                    {options?.map((opt, i) => (
                        <p key={i+opt} className="set_item_opt">{opt}</p>
                    ))}
                </SetOptionsContainer>
                {/* <div className="set_item_img_wrapper">
                    {img1 &&
                        <img className="set_img" src={img1}/>
                    }
                    {img2 &&
                        <img className="set_img" src={img2}/>
                    }
                    {img3 &&
                        <img className="set_img" src={img3}/>
                    }
                    {img4 &&
                        <img className="set_img" src={img4}/>
                    }
                    {img5 &&
                        <img className="set_img" src={img5}/>
                    }
                    {img6 &&
                        <img className="set_img" src={img6}/>
                    }
                </div> */}
                {/* <div className="set_item_opt_wrapper">
                    {opt1 &&
                        <p className="set_item_opt">{opt1}</p>
                    }
                    {opt2 &&
                        <p className="set_item_opt">{opt2}</p>
                    }
                    {opt3 &&
                        <p className="set_item_opt">{opt3}</p>
                    }
                    {opt4 &&
                        <p className="set_item_opt">{opt4}</p>
                    }
                    {opt5 &&
                        <p className="set_item_opt">{opt5}</p>
                    }
                    {opt6 &&
                        <p className="set_item_opt">{opt6}</p>
                    }
                </div> */}
            </div>

        </div>
    );
}

export default SetItemsCard;
