import {Routes, Route, Navigate} from "react-router-dom";
import { authRoutes, publicRoutes } from '../routes';
import { GUIDE_DROP_BC_INFO, GUIDE_DROP_BOSS_CRYWOLF_INFO, GUIDE_DROP_BOSS_KUNDUN_INFO, GUIDE_DROP_BOSS_MAYA_INFO, GUIDE_DROP_BOSS_SELUPAN_INFO, GUIDE_DROP_BOX_INFO, GUIDE_DROP_BOX_OF_KUNDUN_INFO, GUIDE_DROP_CC_INFO, GUIDE_DROP_DG_INFO, GUIDE_DROP_DS_INFO, GUIDE_DROP_DUNGEON_EVENT_INFO, GUIDE_DROP_MINI_BOSSES_INFO, GUIDE_GRAND_RESETS_INFO, GUIDE_RESETS_INFO, GUIDE_ROUTE, HOME_ROUTE } from '../utils/constants';
import ResetSystem from "../pages/pagesComponents/GuideComponents/GuidePages/ResetSystem";
import GrandResetSystem from "../pages/pagesComponents/GuideComponents/GuidePages/GrandResetSystem";
import Guide from "../pages/Guide";
import GuideMain from "../pages/pagesComponents/GuideComponents/GuideMain";
import DropBoxes from "../pages/pagesComponents/GuideComponents/GuidePages/DropBoxes";
import MiniBosses from "../pages/pagesComponents/GuideComponents/GuidePages/MiniBosses";
import BoxOfKundun from "../pages/pagesComponents/GuideComponents/GuidePages/BoxOfKundun";
import BossKundun from "../pages/pagesComponents/GuideComponents/GuidePages/BossKundun";
import DungeonEvent from "../pages/pagesComponents/GuideComponents/GuidePages/DungeonEvent";
import BossSelupan from "../pages/pagesComponents/GuideComponents/GuidePages/BossSelupan";
import CryWolfEvent from "../pages/pagesComponents/GuideComponents/GuidePages/CryWolfEvent";
import MayaEvent from "../pages/pagesComponents/GuideComponents/GuidePages/MayaEvent";
import DevilSquare from "../pages/pagesComponents/GuideComponents/GuidePages/DevilSquare";
import BloodCastle from "../pages/pagesComponents/GuideComponents/GuidePages/BloodCastle";
import ChaosCastle from "../pages/pagesComponents/GuideComponents/GuidePages/ChaosCastle";
import DoppelGanger from "../pages/pagesComponents/GuideComponents/GuidePages/DoppelGanger";


const AppRouter = () => {
    const isAuth = true;

    return (
        <div className='router_container'>
            <Routes>
                {isAuth && authRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={<Component/>} />
                )}
                {publicRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={<Component/>} />
                )}
                <Route path={GUIDE_ROUTE} element={<Guide/>}>
                    <Route index element={<GuideMain/>} />
                    <Route path={GUIDE_RESETS_INFO} element={<ResetSystem/>} />
                    <Route path={GUIDE_GRAND_RESETS_INFO} element={<GrandResetSystem/>} />
                    <Route path={GUIDE_DROP_BOX_INFO} element={<DropBoxes/>} />
                    <Route path={GUIDE_DROP_BOX_OF_KUNDUN_INFO} element={<BoxOfKundun/>} />
                    <Route path={GUIDE_DROP_DUNGEON_EVENT_INFO} element={<DungeonEvent/>} />
                    <Route path={GUIDE_DROP_MINI_BOSSES_INFO} element={<MiniBosses/>} />
                    <Route path={GUIDE_DROP_BOSS_KUNDUN_INFO} element={<BossKundun/>} />
                    <Route path={GUIDE_DROP_BOSS_SELUPAN_INFO} element={<BossSelupan/>} />
                    <Route path={GUIDE_DROP_DS_INFO} element={<DevilSquare/>} />
                    <Route path={GUIDE_DROP_BC_INFO} element={<BloodCastle/>} />
                    <Route path={GUIDE_DROP_CC_INFO} element={<ChaosCastle/>} />
                    <Route path={GUIDE_DROP_DG_INFO} element={<DoppelGanger/>} />
                    <Route path={GUIDE_DROP_BOSS_CRYWOLF_INFO} element={<CryWolfEvent/>} />
                    <Route path={GUIDE_DROP_BOSS_MAYA_INFO} element={<MayaEvent/>} />
                    <Route path={GUIDE_ROUTE + '/*'} element={<Navigate to={GUIDE_ROUTE}/> }/>
                </Route>
                <Route path="*" element={<Navigate to={HOME_ROUTE}/>} />
            </Routes>
        </div>
    );
}

export default AppRouter;
