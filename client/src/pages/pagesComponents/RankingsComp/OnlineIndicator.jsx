
const OnlineIndicator = ({online}) => {
    return (
        <>
        {online ?
            <div className='online_indicator'>
                
            </div>
            :
            <div className="offline_indicator">
                
            </div>
        }    
        </>
    );
}

export default OnlineIndicator;
