import BannerExtremeTop from "./BannerExtremeTop";
import BannerGtop100 from "./BannerGtop100";
import BannerMmoanons from "./BannerMmoanons";
import BannerMMOTOP from "./BannerMMOTOP";
import BannerSupremeTop100 from "./BannerSupremeTop100";
import BannerTop100Arena from "./BannerTop100Arena";
import BannerTopG from "./BannerTopG";

const BannersBoard = () => {
    return (
        <div className="banners_board">
            <BannerSupremeTop100 />
            <BannerGtop100 />
            <BannerMmoanons />
            <BannerExtremeTop />
            <BannerTop100Arena />
            <BannerTopG />
            <BannerMMOTOP />
            
        </div>
    );
}

export default BannersBoard;
