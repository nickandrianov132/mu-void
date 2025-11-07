import GuideTitle from "./GuidePagesComponents/GuideTitle";

const ResetSystem = () => {
    return (
        <div className="guide_main_container">
            <GuideTitle title='Reset system:'/>
            <div className="reset_info_div">
                <p className="reset_p1">💠 On our server working <em>Simple Reset System</em> :</p>
                <div className="reset_description_div">
                    <div className="reset_container">
                        <span>1<sup>st</sup> Reset</span>
                        <span>2<sup>nd</sup> Reset</span>
                        <span>3<sup>rd</sup> Reset</span>
                        <span>4<sup>th</sup> Reset</span>
                        <span>5<sup>th</sup> Reset</span>
                    </div>
                    <div className="reset_req_container">
                        <span> - 350lvl + <em className="reset_em_zen">5,000,000 zen</em></span>
                        <span> - 360lvl + <em className="reset_em_zen">10,000,000 zen</em></span>
                        <span> - 370lvl + <em className="reset_em_zen">15,000,000 zen</em></span>
                        <span> - 380lvl + <em className="reset_em_zen">20,000,000 zen</em></span>
                        <span> - 390lvl + <em className="reset_em_zen">25,000,000 zen</em></span>
                    </div>
                </div>
                <span>6<sup>th</sup> Reset and more - <em className="reset_em_res">Resets</em> * <em className="reset_em_zen">10,000,000 zen</em> </span>
                <p className="reset_remark_p">*<i className="reset_remark_i">After <b>Grand Reset</b> all resets level requirement is 400lvl❗</i></p>
                <p className="reset_p2">
                    🔹🔸 To make <em className="reset_em_res">Reset</em> you have to log-in on website ➯ <b>User Panel</b> ➯ <b>click on</b> 👉 <em className="reset_em_btn">Reset</em>
                </p>               
                <div className="reset_stats_div">
                    <span className="reset_stats_span">🔸Reset stats:</span>
                    <div className="reset_stats_description_div">
                            <span>➤ <mark>♦</mark> Dark Wizard <mark>♦</mark> Dark Knight <mark>♦</mark> Fairy Elf <mark>♦</mark> Summoner <em> - 400 free points</em> ✨</span>
                            <span>➤ <mark>♦</mark> Rage Fighter <mark>♦</mark> Magic Gladiator <em> - 500 free points</em> ✨</span>
                            <span>➤ <mark>♦</mark>  Dark Lord <em> - 400 free points <em>+ 100 command</em></em> ✨</span>
                    </div>
                </div>               
            </div>
        </div>
    );
}

export default ResetSystem;
