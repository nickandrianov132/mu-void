import { useFetchOnlineQuery } from '../../services/onlineApi';
import OnlineCountStatus from './online/OnlineCountStatus';
import OnlineIndicator from './online/OnlineIndicator';

const Online = () => {
    const {data: online, isSuccess} = useFetchOnlineQuery()
    console.log(online);

    return (
        <div className='online_container'>
            <OnlineIndicator online={isSuccess ? online.online : 0}/>
            <OnlineCountStatus online={isSuccess ? online.online : null}/>
        </div>
    );
}

export default Online;
