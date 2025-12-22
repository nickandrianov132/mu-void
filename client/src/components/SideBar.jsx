import { useNavigate } from 'react-router';

import Login from './modals/Login';
import EventTimersDashboard from './modals/EventTimers/EventTimersDashboard';
import ServerTime from './ServerTime';
import Images from '../assets/Images';

const SideBar = () => {
    const navigate = useNavigate()

    return (
        <div className='left_sidebar_container'>
            <Login />
            <EventTimersDashboard/>
            <ServerTime />
            <div className="left_sidebar_content">
            </div>
            <img className='winter_decor2_img' src={Images.winter_decor2}/>
        </div>
    );
}

export default SideBar;
