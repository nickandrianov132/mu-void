import Images from "../../../../assets/Images";
import PictureCarusel from "../../PicturesCarousel/PictureCarusel";
import GuideTitle from "./GuidePagesComponents/GuideTitle";

const BossKundun = () => {
    return (
        <div className='guide_main_container'>
            <GuideTitle title="Kalima 7 Boss Kundun info:" />
            <div className="guide_bossKundun_info">
                <div className="bossKundun_img_wrapper">
                    <img className="boss_img" src={Images.kundun} />
                    <PictureCarusel 
                        images={[Images.kund_kill_1, Images.kund_kill_2, Images.kund_kill_3, Images.kund_kill_4, Images.kund_kill_5]}
                    />
                </div>
                <div className="bossKundun_info_description">
                    <div className="info_description_item">
                        <p>🕗<b>Timing:</b> Boss respawn every 24 hours.</p>
                    </div>
                    <div className="info_description_item">
                        <p>🔸<b>Drop:</b> 3-5 <em className="ancient_em">Ancient Items</em> :</p>
                        <div className="info_img_wrapper">
                            <img src={Images.anubis_anc}/>
                            <img src={Images.chrono_ring}/>
                        </div>
                    </div>
                    <div className="info_description_item">
                        <p>🔸<b>Extra drop:</b> <em className="ancient_em">Ancient Items</em> + <em className="exelent_em">Excellent Opt</em> :</p>
                        <div className="info_img_wrapper">
                            <img src={Images.anubis_anc_exe}/>
                            <img src={Images.broy_pend_exe}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BossKundun;
