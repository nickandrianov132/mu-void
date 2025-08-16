import React from 'react';
import SideBar from './SideBar';
import AppRouter from './AppRouter';
import Aside from './Aside';
import ServerTime from './ServerTime';

const Body = () => {
    return (
        <div className='body_container'>
            <ServerTime />
           <SideBar />
           <AppRouter /> 
           <Aside/>
        </div>
    );
}

export default Body;
