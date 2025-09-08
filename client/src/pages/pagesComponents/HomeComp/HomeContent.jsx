import { BsCalendar2Week } from 'react-icons/bs'
import PictureCarusel from '../PicturesCarousel/PictureCarusel';
import Carousel from '../PicturesCarousel/Carousel';
const HomeContent = ({title, date, sideImage, sideImagesArr, children}) => {

    return (
        <div className="home_content_container">
                <div className="home_content_header">
                    <div className="home_content_header_title">
                        <h3 className="home_header_title_h3">
                            {title}
                        </h3>
                    </div>
                    <div className="home_content_header_date">
                        <BsCalendar2Week className='home_content_header_date_icon' />
                        <p className="home_header_title_date">
                            {date}
                        </p>
                    </div>
                </div>
                <span className="home_header_underline"></span>
                <div className="home_content_body">
                    <div className="home_content_body_info">
                        <div className='home_content_body_introduction'>
                            <div className='introduction_content_wrapper'>
                                {sideImage &&
                                    <div className='news_image_wrapper'>
                                        <img src={sideImage}/>
                                    </div>
                                }
                                {sideImagesArr &&
                                    <div className='news_imagesCarousel_wrapper'>
                                        <Carousel
                                            images={sideImagesArr}
                                        />
                                    </div>
                                }
                                {/* {sideImagesArr &&
                                    <div className='news_imagesCarousel_wrapper'>
                                        <PictureCarusel
                                            images={sideImagesArr}
                                        />
                                    </div>
                                } */}
                                {children &&
                                    <>
                                    {children}
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default HomeContent;
