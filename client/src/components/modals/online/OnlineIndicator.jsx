
const OnlineIndicator = ({online}) => {
    function pxOnline() {
        let px;
        if(online <= 200) {
            px = Math.ceil(online / 2)
        } else {
            px = Math.ceil(200 / 2)
        }
        return px
    }

    return (
        <div className='online_indicator_div'>
            <p className='online_indicator_p'>Server x35</p>
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
