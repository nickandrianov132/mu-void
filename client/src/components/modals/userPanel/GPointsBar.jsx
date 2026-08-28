import { useSelector } from 'react-redux';
import { pretyZen } from '../../../utils/functions';

const GPointsBar = ({gPoints}) => {
    // const {gPoints} = useSelector(state => state.userInfo);


    return (
        <>
        {/* {gPoints && */}
            <div className='gpoints_bar_container'>
                <span className='title'>GoblinPoints:</span>
                <span className='amount'>{pretyZen(gPoints ? gPoints.toString() : "0")}</span>
            </div>
        {/* } */}
        </>
    );
}

export default GPointsBar;