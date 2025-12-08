import { useFetchAccountCharGrandresetMutation } from "../../../services/userApi";
import { grCheck3rdProff, grCheckLevel, grCheckOnline, grCheckReset, grCheckValid, grCheckZen } from "../../../utils/functions";
import GrandResetCheck from "./GrandResetCheck";
import SpinnerSmall from '../../../components/SpinnerSmall'


const GrandResetCharItem = ({cName, cClass, cLevel, cReset, cGrandReset, cZen, cOnline}) => {
    const [fetchAccountCharGrandReset, { isLoading, isSuccess, isError}] = useFetchAccountCharGrandresetMutation()

    async function handlerGrandReset(e) {
        e.preventDefault()
        const character = {name: cName}
        await fetchAccountCharGrandReset(character)
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
                        disabled = {grCheckValid(cLevel, cReset, cZen, cClass, cOnline)}
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
        </div>
    );
}

export default GrandResetCharItem;
