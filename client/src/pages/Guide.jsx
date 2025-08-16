import { Outlet } from "react-router";
import GuideSideBar from "./pagesComponents/GuideComponents/GuideSideBar";

const Guide = () => {
    return (
        <div className='guide_container'>
            <GuideSideBar/>
            <Outlet/>
        </div>
    );
}

export default Guide;
