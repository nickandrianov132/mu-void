import { NavLink } from 'react-router';
import { ABOUT_ROUTE, DOWNLOAD_ROUTE, GUIDE_ROUTE, HOME_ROUTE, RANKINGS_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
import {GiHouse, GiSecretBook, GiSwordsEmblem, GiCharacter, GiSpellBook, GiCloudDownload} from 'react-icons/gi';
import Images from '../assets/Images';

const NavBar = () => {

    return (
        <div className='nav_container'>
            <div className='nav_list'>
                <NavLink className="nav_list_item_wraper" to={HOME_ROUTE}>
                    {/* <GiHouse className='giHouse'/> */}
                    <img className='home_logo' src={Images.home1} />
                    <span>Home</span>
                </NavLink>
                <img className='line_separator' src={Images.vertical_sep2}/>
                {/* <span className='nav_list_span'></span> */}

                <NavLink className="nav_list_item_wraper" to={ABOUT_ROUTE}>
                    {/* <GiSpellBook className='giSpellBook'/> */}
                    <img className='about_logo' src={Images.book_open2} />
                    <span>About</span>
                </NavLink>
                {/* <span className='nav_list_span'></span> */}
                <img className='line_separator' src={Images.vertical_sep2}/>

                <NavLink className="nav_list_item_wraper" to={DOWNLOAD_ROUTE}>
                    {/* <GiCloudDownload className='giDownload' />*/}
                    <img className='download_logo' src={Images.download1} />
                    <span>Download</span>
                </NavLink>
                <img className='line_separator' src={Images.vertical_sep2}/>
                {/* <span className='nav_list_span'></span> */}

                <NavLink className="nav_list_item_wraper" to={REGISTRATION_ROUTE}>
                    {/* <GiCharacter className='giCharacter'/> */}
                    <img className='register_logo' src={Images.register4} />
                    <span>Registration</span>
                </NavLink>
                <img className='line_separator' src={Images.vertical_sep2}/>
                {/* <span className='nav_list_span'></span> */}

                <NavLink className="nav_list_item_wraper" to={GUIDE_ROUTE}>
                    {/* <GiSecretBook className='giSecretBook'/> */}
                    <img className='guide_logo' src={Images.book1} />
                    <span>Guide</span>
                </NavLink>
                <img className='line_separator' src={Images.vertical_sep2}/>
                {/* <span className='nav_list_span'></span> */}

                <NavLink className="nav_list_item_wraper" to={RANKINGS_ROUTE}>
                    {/* <GiSwordsEmblem className='giSwordEmblem' /> */}
                    <img className='rankings_logo' src={Images.cross_sword_shield2} />
                    <span>Rankings</span>
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;
