import BannerMMOTOP from "./BannerMMOTOP";
import BannerTop100Arena from "./BannerTop100Arena";
import BannerTopG from "./BannerTopG";

const BannersBoard = () => {
    return (
        <div className="banners_board">
            <BannerTop100Arena />
            <BannerTopG />
            <BannerMMOTOP />
        </div>
    );
}

export default BannersBoard;
