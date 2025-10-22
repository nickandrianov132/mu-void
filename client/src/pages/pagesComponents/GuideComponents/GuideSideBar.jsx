import { useNavigate } from "react-router";
import { GUIDE_DROP_BC_INFO, GUIDE_DROP_BOSS_CRYWOLF_INFO, GUIDE_DROP_BOSS_KUNDUN_INFO, GUIDE_DROP_BOSS_MAYA_INFO, GUIDE_DROP_BOSS_SELUPAN_INFO, GUIDE_DROP_BOX_INFO, GUIDE_DROP_BOX_OF_KUNDUN_INFO, GUIDE_DROP_CC_INFO, GUIDE_DROP_DG_INFO, GUIDE_DROP_DS_INFO, GUIDE_DROP_DUNGEON_EVENT_INFO, GUIDE_DROP_MINI_BOSSES_INFO, GUIDE_GRAND_RESETS_INFO, GUIDE_RESETS_INFO } from "../../../utils/constants";

const GuideSideBar = () => {
    const navigate = useNavigate()
    return (
        <div className="guide_sidebar_container">
            <ul className="guide_ul">
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_RESETS_INFO)}
                >✧ Reset System</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_GRAND_RESETS_INFO)}
                >✧ Grand Reset System</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_DROP_BOX_INFO)}
                >✧ Drop from boxes</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_DROP_BOX_OF_KUNDUN_INFO)}
                >✧ Box of Kundun</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_DROP_DUNGEON_EVENT_INFO)}
                >✧ Dungeon Event</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_DROP_MINI_BOSSES_INFO)}
                >✧ Mini Bosses</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_DROP_BOSS_KUNDUN_INFO)}
                >✧ Kalima Boss Kundun</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_DROP_BOSS_SELUPAN_INFO)}
                >✧ Boss Selupan</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_DROP_BOSS_CRYWOLF_INFO)}
                    >✧ CryWolf Event</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_DROP_BOSS_MAYA_INFO)}
                    >✧ Kanturu Maya Event</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_DROP_DS_INFO)}
                >✧ Devil Square</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_DROP_BC_INFO)}
                >✧ Blood Castle</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_DROP_CC_INFO)}
                >✧ Chaos Castle</li>
                <li 
                    className="guide_li"
                    onClick={() => navigate(GUIDE_DROP_DG_INFO)}
                >✧ Doppelganger</li>
            </ul>
        </div>
    );
}

export default GuideSideBar;
