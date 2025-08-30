import { NavLink } from 'react-router';
import { ABOUT_ROUTE, DOWNLOAD_ROUTE, GUIDE_ROUTE, HOME_ROUTE, RANKINGS_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
import {GiHouse, GiSecretBook, GiSwordsEmblem, GiCharacter, GiSpellBook, GiCloudDownload} from 'react-icons/gi';

const NavBar = () => {

    return (
        <div className='nav_container'>
            <div className='nav_list'>
                <NavLink className="nav_list_item_wraper" to={HOME_ROUTE}>
                    <GiHouse className='giHouse'/>
                    <span>Home</span>
                </NavLink>
                <span className='nav_list_span'></span>

                <NavLink className="nav_list_item_wraper" to={ABOUT_ROUTE}>
                    <GiSpellBook className='giSpellBook'/>
                    <span>About</span>
                </NavLink>
                <span className='nav_list_span'></span>

                <NavLink className="nav_list_item_wraper" to={DOWNLOAD_ROUTE}>
                    <GiCloudDownload className='giDownload' />
                    <span>Download</span>
                </NavLink>
                <span className='nav_list_span'></span>

                <NavLink className="nav_list_item_wraper" to={REGISTRATION_ROUTE}>
                    <GiCharacter className='giCharacter'/>
                    <span>Registration</span>
                </NavLink>
                <span className='nav_list_span'></span>

                <NavLink className="nav_list_item_wraper" to={GUIDE_ROUTE}>
                    <GiSecretBook className='giSecretBook'/>
                    <span>Guide</span>
                </NavLink>
                <span className='nav_list_span'></span>

                <NavLink className="nav_list_item_wraper" to={RANKINGS_ROUTE}>
                    <GiSwordsEmblem className='giSwordEmblem' />
                    <span>Rankings</span>
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;
