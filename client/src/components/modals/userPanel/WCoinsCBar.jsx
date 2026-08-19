import { useSelector } from 'react-redux';

const WCoinsCBar = ({wCoins}) => {
    // const {wCoins} = useSelector(state => state.userInfo);

    return (
        <div className='wcoinsc_bar_container'>
            <span className='title'>WCoins:</span>
            <span className='amount'>{wCoins}</span>
        </div>
    );
}

export default WCoinsCBar;
