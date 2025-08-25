import { useNavigate } from 'react-router';

import Login from './modals/Login';
import EventTimersDashboard from './modals/EventTimers/EventTimersDashboard';
import ServerTime from './ServerTime';

const SideBar = () => {
    const navigate = useNavigate()

    return (
        <div className='left_sidebar_container'>
            <Login />
            <EventTimersDashboard/>
            <ServerTime />
            <div className="left_sidebar_content">
            </div>
        </div>
    );
}

export default SideBar;
