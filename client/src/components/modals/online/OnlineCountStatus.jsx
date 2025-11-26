import OnlineStatus from './OnlineStatus';

const OnlineCountStatus = ({online}) => {

    return (
        <div className='online_count_status_coutainer'>
            <div><p>Status</p><OnlineStatus online={online}/></div>
            {/* <div><p>Online:</p><div className={online == 0 ? "total_online_div_zero" : "total_online_div"}>{online}</div></div> */}
            <div><p>Online:</p><div className={online == 0 ? "total_online_div_zero" : "total_online_div"}>{0}</div></div>
            {/* <div><p>Online:</p><div className='total_online_div'>{online}</div></div> */}
        </div>
    );
}

export default OnlineCountStatus;
