import OnlineStatus from './OnlineStatus';

const OnlineCountStatus = ({online}) => {

    return (
        <div className='online_count_status_coutainer'>
            <div><p>Status</p><OnlineStatus online={online}/></div>
            <div><p>Online:</p><div className='total_online_div'>{online}</div></div>
        </div>
    );
}

export default OnlineCountStatus;
