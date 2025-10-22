import Images from "../../../../assets/Images";
import GuideTitle from "./GuidePagesComponents/GuideTitle";

const DoppelGanger = () => {
    return (
        <div className='guide_main_container'>
            <GuideTitle title="Doppelganger event info:" />
            <div className="dg_container">
                <div className="dg_desc1_wrapper">
                    <p>🔸 To enter Doppelganger event area you should find 5 pieces of <em className="dim_item_em">Sign of Dimension</em> to get <em className="dim_item_em">Mirror of Dimension</em>.</p>
                    <div className="desc_img_wrapper">
                        <img src={Images.dg_sign}/>
                        <img src={Images.dg_mirror}/>
                        <img src={Images.dg_ticket}/>
                    </div>
                </div>
                <div className="dg_desc1_wrapper">
                    <p>🔸 Find and speak with to NPC <em className="dg_npc_em">Lugard</em> in Elveland to enter the event area.</p>
                    <div className="desc_img_wrapper">
                        <img className="dg_img_npc" src={Images.dg_npc}/>
                    </div>
                </div>
                <div className="dg_desc1_wrapper">
                    <p>🔸 Main aim of this event is to defend <em className="dg_npc_em">Magic Barrier</em> by stopping the monsters rushing towards the base for a limited time.</p>
                    <div className="desc_img_wrapper">
                        <img className="dg_img_npc" src={Images.dg_passage1}/>
                        <img className="dg_img_npc" src={Images.dg_passage2}/>
                    </div>
                </div>
                <div className="dg_desc1_wrapper">
                    <p>🔸 There are three mini bosses <em className="dg_boss_em">Slaughterer</em> appear at specific time, after killing each of them appeas <em className="dim_item_em">Interim Reward Chests</em>.</p>
                    <div className="desc_img_wrapper">
                        <img className="dg_img_npc" src={Images.dg_slaughterer}/>
                        <img className="dg_img_npc" src={Images.dg_slaughterer_reward}/>
                    </div>
                </div>
                <div className="dg_desc1_wrapper">
                    <p>🔸 You can open only one of <em className="dim_item_em">Interim Reward Chests</em> and with some cheance apears mob <b>Larva</b>  or reward:</p>
                    <p><em className="gd_reward_luck_em">1 - 2 Box of Luck</em></p>
                    <p> * Reward will be sended automatically to <em className="dg_gremory_em">Gremory Case</em> - to open gremory case press <b>K</b> </p>
                    <div className="desc_img_wrapper">
                        <img className="dg_img_reward" src={Images.dg_reward_gremory1}/>
                    </div>
                </div>
                <div className="dg_desc1_wrapper">
                    <p>🔸 Upon completion appear<em className="dim_final_em"> Final Reward Chests</em>, when you open it you will get as reward next items:</p>
                    <p><em className="gd_reward_luck_em">3 - 5 Box of Luck</em></p>
                    <p> * Reward will be sended automatically to <em className="dg_gremory_em">Gremory Case</em> - to open gremory case press <b>K</b> </p>
                    <div className="desc_img_wrapper">
                        <img className="dg_img_reward" src={Images.dg_reward_final}/>
                    </div>
                </div>
                <div className="dg_desc1_wrapper">
                    <p>🔸 Drop from <em className="dg_boxOfLuck_em">Box of Luck</em> is one of next item with equal cahnce:</p>
                    <p><em className="gd_reward_boxKundun_em">Box of Kundun+3, Box of Kundun+4, Box of Kundun+5 </em></p>
                    {/* <div className="desc_img_wrapper">
                        <img className="dg_img_reward" src={Images.dg_reward_final}/>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default DoppelGanger;
