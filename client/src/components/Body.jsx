import SideBar from './SideBar';
import AppRouter from './AppRouter';
import Aside from './Aside';
import CountdownOpening from './CountdownOpening';


const Body = () => {
    return (
        <div className='body_container'>
            {/* <CountdownOpening /> */}
           <SideBar />
           <AppRouter /> 
           <Aside/>
        </div>
    );
}

export default Body;
