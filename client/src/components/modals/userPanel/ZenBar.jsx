import { useSelector } from 'react-redux';
import { pretyZen } from '../../../utils/functions';

const ZenBar = ({zen}) => {
    // const {zen} = useSelector(state => state.userInfo);

    return (
        <>
        {zen &&
        <div className='zen_bar_container'>
            <span className='title'>Zen:</span>
            <span className='amount'>{pretyZen(zen)}</span>
        </div>
        
        }
        </>
    );
}

export default ZenBar;