import { useNavigate } from 'react-router';
import { ABOUT_ROUTE, DOWNLOAD_ROUTE, GUIDE_ROUTE, HOME_ROUTE, RANKINGS_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
import {GiHouse, GiSecretBook, GiSwordsEmblem, GiCharacter, GiSpellBook, GiCloudDownload} from 'react-icons/gi';

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <div className='nav_container'>
            <div className='nav_list'>
                <div className='nav_list_item_wraper'
                    onClick={() => navigate(HOME_ROUTE)}
                >
                    <GiHouse className='giHouse'/>
                    <a 
                        className='nav_list_item' 
                        // onClick={() => navigate(HOME_ROUTE)}
                    >Home</a>
                </div>
                <span className='nav_list_span'></span>

                <div className='nav_list_item_wraper'
                    onClick={() => navigate(ABOUT_ROUTE)}
                >
                    <GiSpellBook className='giSpellBook'/>
                    <a 
                        className='nav_list_item' 
                        // onClick={() => navigate(ABOUT_ROUTE)}
                    >About</a>
                </div>
                <span className='nav_list_span'></span>

                <div className='nav_list_item_wraper'
                    onClick={() => navigate(DOWNLOAD_ROUTE)}
                >
                    <GiCloudDownload className='giDownload' />
                    <a 
                        className='nav_list_item' 
                        // onClick={() => navigate(DOWNLOAD_ROUTE)}
                    >Download</a>
                </div>
                <span className='nav_list_span'></span>

                <div className='nav_list_item_wraper'
                    onClick={() => navigate(REGISTRATION_ROUTE)}
                >
                    <GiCharacter className='giCharacter'/>
                    <a 
                        className='nav_list_item' 
                        // onClick={() => navigate(REGISTRATION_ROUTE)}
                    >Registration</a>
                </div>
                <span className='nav_list_span'></span>

                <div className='nav_list_item_wraper'
                    onClick={() => navigate(GUIDE_ROUTE)}
                >
                    <GiSecretBook className='giSecretBook'/>  
                    <a 
                        className='nav_list_item' 
                        // onClick={() => navigate(GUIDE_ROUTE)}
                    >Guide</a>
                </div>
                <span className='nav_list_span'></span>

                <div className='nav_list_item_wraper'
                    onClick={() => navigate(RANKINGS_ROUTE)}
                >
                    <GiSwordsEmblem className='giSwordEmblem'/>
                    <a 
                        className='nav_list_item' 
                        // onClick={() => navigate(RANKINGS_ROUTE)}
                    >Rankings</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
