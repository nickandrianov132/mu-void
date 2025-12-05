import Images from "../../../../assets/Images";
import GuideTitle from "./GuidePagesComponents/GuideTitle";

const GrandResetSystem = () => {
    return (
        <div className="guide_main_container">
            <GuideTitle title='Grand Reset system:'/>
            <div className="reset_info_div">
                <p className="reset_p1">🔰 <em>Grand Reset Info</em> :</p>
                <div className="gr_about_wrapper">
                    <p>On our Server only one way to get <em className="grandreset_em_ml">Master Tree Skill points</em> is to make <em className="grandreset_em_res"> Grand Reset</em>, after making grand reset you will be able to distribute all achieved free Master Skill Points in your Master Tree</p>
                </div>
                <div className="grandreset_img_wrapper">
                    {/* <img className="gr_img1" src={Images.gr1} /> */}
                    <img className="gr_img2" src={Images.gr_mastertree} />
                </div>
                <div className="reset_description_div">
                    <div className="reset_container">
                        <span>♦️ All Grand Resets</span>
                    </div>
                    <div className="reset_req_container">
                        <span> - 20 Resets + 400lvl + <em className="reset_em_zen">2,000,000,000 zen</em></span>
                    </div>
                </div>
                {/* {/* <span>4<sup>th</sup> Reset and more - <em className="reset_em_res">Resets</em> * <em className="reset_em_zen">15,000,000 zen</em> </span> */}
                <p className="reset_remark_p">*<i className="grandreset_remark_i">To make <b>Grand Reset</b> all Characters should pass 3<sup>rd</sup> class change quests❗</i>⚠️</p>
                <p className="reset_p2">
                    🔹🔸 To make <em className="grandreset_em_res"> Grand Reset</em> you have to log-in on website ➯ <b>User Panel</b> ➯ <b>click on</b> 👉 <em className="grandreset_em_btn">GrandReset</em>
                </p>               
                <div className="reset_stats_div">
                    <span className="reset_stats_span">🔸Grand Reset stats:</span>
                    <div className="reset_stats_description_div">
                            <span>➤ Dark Wizard <mark>♦</mark> Dark Knight <mark>♦</mark> Fairy Elf <mark>♦</mark> Summoner <em> - 3200 free points</em> ✨</span>
                            <span>➤ Rage Fighter <mark>♦</mark> Magic Gladiator <em> - 4000 free points</em> ✨</span>
                            <span>➤ Dark Lord <em> - 3200 free points</em> + <b>800 Command</b> ✨</span>
                            <span className="grand_reset_ml_span">➤ <mark>♦</mark> All Classes Master Skill Points Reward <em> - 50 Master Skill points</em> ✨</span>
                            <span className="grand_reset_ml_span">➤ <mark>♦</mark> All Classes WCoins Reward <em> - 300 WCoins</em> 🪙</span>
                    </div>
                </div>               
            </div>
        </div>
    );
}

export default GrandResetSystem;
