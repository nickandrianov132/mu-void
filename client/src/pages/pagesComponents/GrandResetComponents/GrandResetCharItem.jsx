import { useFetchAccountCharGrandresetMutation } from "../../../services/userApi";
import { grCheck3rdProff, grCheckLevel, grCheckOnline, grCheckReset, grCheckValid, grCheckZen } from "../../../utils/functions";
import GrandResetCheck from "./GrandResetCheck";
import SpinnerSmall from '../../../components/SpinnerSmall'


const GrandResetCharItem = ({cName, cClass, cLevel, cReset, cGrandReset, cZen, cOnline}) => {
    const [fetchAccountCharGrandReset, { data, isLoading, isSuccess, isError, error }] = useFetchAccountCharGrandresetMutation()

    async function handlerGrandReset(e) {
        e.preventDefault()
        const character = {name: cName}
        await fetchAccountCharGrandReset(character)
    }
    const name = 'alex'
    const greeting = `Hello - ${name}`
    // if(isError) {
    //     console.log(error.data.error);

    // }
    if(isSuccess) {
        console.log(data);

    }
    return (
        <div className='grand_reset_item_container'>
            <div className='grand_reset_item_head'>
                <h5>{cName}</h5>
                <div className='grand_reset_item_btn_wrapper'>
                <>{isLoading ? <SpinnerSmall/>
                :
                    <button 
                        className={grCheckValid(cLevel, cReset, cZen, cClass, cOnline) ? 'grand_reset_btn_active' : 'grand_reset_btn_disable'}
                        disabled = {!grCheckValid(cLevel, cReset, cZen, cClass, cOnline)}
                        onClick={(e) => handlerGrandReset(e)}    
                    >Grand Reset</button>
                }</>
                </div>
            </div>
            <div className='grand_reset_item_body'>
                <GrandResetCheck title="3rd Prof" check={grCheck3rdProff(cClass)} />
                <GrandResetCheck title="Level" check={grCheckLevel(cLevel)} />
                <GrandResetCheck title="Reset" check={grCheckReset(cReset)} />
                <GrandResetCheck title="Zen" check={grCheckZen(cZen)} />
                <GrandResetCheck title="Offline" check={grCheckOnline(cOnline)} />
            </div>
            <div className="grand_reset_item_footer">
                {!grCheck3rdProff(cClass) &&
                    <span className="grand_reset_tip">🔸 You need to proceed final class change Quest!</span>
                }
                {!grCheckLevel(cLevel) &&
                    <span className="grand_reset_tip">🔸 Your character should be 400lvl!</span>
                }
                {!grCheckReset(cReset) &&
                    <span className="grand_reset_tip">🔸 Your character should have 20 Resets!</span>
                }
                {!grCheckZen(cZen) &&
                    <span className="grand_reset_tip">🔸 Your should have 2kkk zen in your inventory!</span>
                }
                {!grCheckOnline(cOnline) &&
                    <span className="grand_reset_tip">🔸 Your character should be offline!</span>
                }
                {isError && <span className="grand_reset_tip">Error: {error.data.error}</span>}
                {isSuccess && <span className="grand_reset_tip_success">🎉Success: {data.message}🎁</span>}
            </div>
        </div>
    );
}

export default GrandResetCharItem;
