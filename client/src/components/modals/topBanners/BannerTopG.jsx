import Images from "../../../assets/Images";


const BannerTopG = () => {
    return (
        <div className='banner_topg'>
            <a href="https://topg.org/ru/mu-private-servers/server-675336#vote" target="_blank">
                <img src={Images.topg_banner} id="topgratingimg" alt="Vote on TopG"/>
            </a>
        </div>
    );
}

export default BannerTopG;