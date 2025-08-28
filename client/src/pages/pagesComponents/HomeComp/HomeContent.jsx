import { BsCalendar2Week } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import Images from '../../../assets/Images';
const HomeContent = () => {
    const serverInfo = useSelector(state => state.serverInfo);
    console.log(serverInfo);

    return (
        <div className="home_content_container">
                <div className="home_content_header">
                    <div className="home_content_header_title">
                        <h3 className="home_header_title_h3">
                            💥Welcome! Join Open Beta-test!🚀
                        </h3>
                    </div>
                    <div className="home_content_header_date">
                        <BsCalendar2Week className='home_content_header_date_icon' />
                        <p className="home_header_title_date">
                            24.08.2025
                        </p>
                    </div>
                </div>
                <span className="home_header_underline"></span>
                <div className="home_content_body">
                    <div className="home_content_body_info">
                        <div className='home_content_body_introduction'>
                            <div className='introduction_content_wrapper'>
                                <div className='news_image_wrapper'>
                                    <img src={Images.opening_img}/>
                                </div>
                                <div><p className="first-p home-content-p">Welcome on our <b>MU Online</b> server. Open-Beta test will be started on <b>August 28<sup>th</sup></b>, we'll be appreciated to everyone who will participate in Open-Beta test of our server.<br/>
                                </p>
                                <div className='discord_container'>
                                    <img className='discord_img' src={Images.discord2}></img>
                                    <a className="a_discord" href="https://discord.gg/PJHrhz7mWM" target="_blank">Discord here!</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default HomeContent;
