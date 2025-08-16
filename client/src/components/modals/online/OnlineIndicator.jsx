
const OnlineIndicator = ({online}) => {
    function pxOnline() {
        let px;
        if(online <= 300) {
            px = Math.ceil(online / 3)
        } else {
            px = Math.ceil(200 / 3)
        }
        return px
    }

    return (
        <div className='online_indicator_div'>
            <p className='online_indicator_p'>Server x100</p>
            <div className='online_indicator_bg'>
                <div 
                    style={{width: `${pxOnline()}%`}}
                    className='online_indicator_bar'
                ></div>
            </div>
        </div>
    );
}

export default OnlineIndicator;
