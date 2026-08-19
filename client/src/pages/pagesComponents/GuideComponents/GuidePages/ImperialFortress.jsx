import Images from "../../../../assets/Images";
import GuideTitle from "./GuidePagesComponents/GuideTitle";

const ImperialFortress = () => {
    return (
       <div className='guide_main_container'>
            <GuideTitle title="Imperial Fortress event info:" />
            <div className="imperial_info_body">
                <p>The <b className="b_name">Imperial Fortress Guardian Event</b> is a middle-hard event in the game. Where you can get <em className="em_anc">Ancient</em> or <em className="em_exc"> Excellent </em> or <em className="em_anc_exc">Ancient+Excellent</em> Items. The event runs from Monday to Sunday culminating in an epic Boss battle on the final day.</p>
                <p>To enter the Event zone location, collect <em className="em_item">Suspicious scrap of paper</em> - 5 pcs and <em className="em_item">Gaion`s Order</em> apears in your inventory:</p>
                <div className="imperial_image_wrapper">
                    <img className="imperial_img" alt="Suspicious scrap of Paper" title="Suspicious scrap of Paper" src={Images.suspicious_scrap}/>
                    <img className="imperial_img" alt="Gaions Order" title="Gaions Order" src={Images.gaions_order}/>
                </div>
                <p>Bring the <em className="em_item">Gaion`s Order</em> to NPC <b>Jerint the Assistant</b> in Devias 3, coordinates 230x220. You can enter the event only as a member of a party.</p>
                <p>To participate in the final Sunday Boss fight (Gaion Kharein Boss) you must collect the following fragments througout the week:</p>
                <ul className="imperial_info_ul">
                    <li>First Secronomicon Fragment - Monday</li>
                    <li>Second Secronomicon Fragment - Teusday</li>
                    <li>Third Secronomicon Fragment - Wednesday</li>
                    <li>Fourth Secronomicon Fragment - Thursday</li>
                    <li>Fifth Secronomicon Fragment - Friday</li>
                    <li>Sixth Secronomicon Fragment - Saturday</li>
                </ul>
                <h3 className="h3_regular_monsters">✨ Rewards for the regular monsters:</h3>
                <ul className="imperial_drop_ul">
                    <li>- Shield Barrier</li>
                    <li>- Knights</li>
                    <li>- Medical</li>
                    <li>- Bodyguard</li>
                </ul>
                <p className="p_drop"><em className="em_cheance">60%</em> - <em className="em_jewel">Jewel of Bless, Soul, Life</em></p>
                <ul className="imperial_drop_ul">
                    <li>- Statue</li>
                </ul>
                <p className="p_drop"><em className="em_cheance">100%</em> - <em className="em_jewel">Jewel of Bless, Soul, Life, Chaos, Creation</em> + <em className="em_zen">3,000,000 zen</em></p>
                <h3 className="h3_round_boss">✨ Rewards for the every Round Chief-monsters:</h3>
                <ul className="imperial_drop_ul">
                    <li>🔹 Quartermaster</li>
                    <li>🔹 Combat Instructor</li>
                    <li>🔹 Knight Commander</li>
                    <li>🔹 Grand Wizard</li>
                    <li>🔹 Master Assasin</li>
                    <li>🔹 Cavalry Captain</li>
                </ul>
                <p className="p_drop"><em className="em_cheance">50%</em> - <em className="em_jewel">Bundle Jewel of Bless, Soul, Life 10</em></p>
                <div className="drop_items_wrapper">
                    <p className="p_drop">50%<em> -</em></p>
                    <div className="items_list_div">
                        <p className="p_exc_items">Knight Blade, Daybreak, Sword Dancer, Piercing Blade Glove, Shining Scepter, Arrow Viper Bow, Platina Staff, Demonic Stick, Grand Soul Shield, Cross Shield</p>
                        <p className="p_exc_items">Great Dragon, Dark Soul, Red Spirit, Dark Master, Hurricane, Demonic, Piercing</p>
                    </div>
                </div>
                <p className="gp_p">Goblin Points: <em className="gp_em">100</em></p>
                <h3 className="h3_daily_boss">✨ Rewards for the daily Final Round Bosses:</h3>
                <ul className="imperial_drop_ul">
                    <li>🔸 Destler - Monday</li>
                    <li>🔸 Vermont - Tuesday</li>
                    <li>🔸 Kato - Wednesday</li>
                    <li>🔸 Galia - Thursday</li>
                    <li>🔸 Erkanne - Friday</li>
                    <li>🔸 Raymond - Saturday</li>
                </ul>
                <div className="drop_items_wrapper">
                    <p className="p_drop">30%<em> -</em></p>
                    <div className="items_list_div">
                        <p className="p_divine_items">Sword of Archangel, Staff, of Archangel, Scepter of Archangel, Crossbow of Archangel, Stick of Archangel</p>
                        <p className="p_exc_items">Great Dragon, Dark Soul, Red Spirit, Dark Master, Hurricane, Demonic, Piercing</p>
                    </div>
                </div>
                <div className="drop_items_wrapper">
                    <p className="p_drop">70%<em> -</em></p>
                    <div className="items_list_div">
                        <p className="p_anc_items">Hyperion Bronz, Mist Bronz, Eplate Scale, Berserker Scale, Rave Plate, Cloud Brass, Garuda Brass, Sylion Bone, Evis Bone, Hera Sphinx, Odin Wind, Elvian Wind, Drake Vine, Argo Spirit, Karis Spirit</p>
                        <p className="p_tips">Drop amount: 1-2 Ancient items</p>
                    </div>
                </div>
                <p className="gp_p">Goblin Points: <em className="gp_em">150</em></p>
                <h3 className="h3_daily_boss">✨ Rewards for the Sunday Boss Assistant Jerint:</h3>
                <div className="drop_items_wrapper">
                    <p className="p_drop">100%<em> -</em></p>
                    <div className="items_list_div">
                        <p className="p_exc_items">Bone Blade, Grand Viper Staff, Storm Blitz Stick, Explosion Blade, Soley Scepter, Sylphyd Wind Bow, Phoenix Soul Star</p>
                        <p className="p_exc_items">Dragon Knight, Venom, Sylphyd Wind, Storm Blitz, Volcanom, Sunlight, Phoenix Soul</p>
                        <p className="p_tips">Drop amount: 3 items</p>
                    </div>
                </div>
                <p className="gp_p">Goblin Points: <em className="gp_em">350</em></p>
                <h3 className="h3_daily_boss">✨🔥 Rewards for the Sunday Final Boss Gaion Kharein🔥:</h3>
                <div className="drop_items_wrapper">
                    <p className="p_drop">70%<em> -</em></p>
                    <div className="items_list_div">
                        <p className="p_anc_items">Hyperion Bronz, Mist Bronz, Eplate Scale, Berserker Scale, Rave Plate, Cloud Brass, Garuda Brass, Sylion Bone, Evis Bone, Hera Sphinx, Odin Wind, Elvian Wind, Drake Vine, Argo Spirit, Karis Spirit, Huyon Dragon, Vicious Dragon, Anubis Legendary, Enis Legendary, Semeden Red Wing, Chrono Red Wing, Aruans Guardian, Gaion Storm Crow, Muren Storm Crow, Agnis Adamantine, Broy Adamantine, Chamer Sacred Fire, Vega Sacred Fire, Bes Eclipse, Apis Valiant, Harpy Ancient, Horus Holly Storm, Magni Piercing, Khon Dark Steel, Serket Iris, Bragi Dark Phoenix, Alvis Grand Soul, Elune Demonic, Surt Glorius, Figgs Holy Spirit, Tyr Thunder Hawk </p>
                        <p className="p_tips">Drop amount: 1-3 Ancient items (30% cheance Ancient + Excellent Opt)</p>
                    </div>
                </div>
                <div className="drop_items_wrapper">
                    <p className="p_drop">30%<em> -</em></p>
                    <div className="items_list_div">
                        <p className="p_exc_items">Bone Blade, Grand Viper Staff, Storm Blitz Stick, Explosion Blade, Soley Scepter, Sylphyd Wind Bow, Phoenix Soul Star</p>
                        <p className="p_tips">Drop amount: 2-3 Weapons (1-3 Excellent options)</p>
                    </div>
                </div>
                <p className="gp_p">Goblin Points: <em className="gp_em">600</em></p>
            </div>
        </div>
    );
}

export default ImperialFortress;
