
const GrandResetCheck = ({title, check}) => {
    return (
        <div className='grand_reset_check'>
            <div className={check ? 'check_title' : 'check_title_red'}>
                {title}
            </div>
            {check
                ?
                <span className='grand_reset_check_icon_green'>✔</span>
                :
                <span className='grand_reset_check_icon_red'>✘</span>
            }
        </div>
    );
}

export default GrandResetCheck;
