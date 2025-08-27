import Images from '../../../assets/Images';

const BannerMMOTOP = () => {
    return (
        <div className='banner_mmotop'>
            <a href="https://mu.mmotop.ru/en/servers/38919/votes/new" target="_blank">
                <img src={Images.mmotop_banner} border="0" id="mmotopratingimg" alt="Рейтинг серверов mmotop"/>
            </a>
        </div>
    );
}

export default BannerMMOTOP;
