import Images from '../../../assets/Images';
import { useFetchAccountCharResetMutation } from '../../../services/userApi';
import { validateCharReset, checkLocation, checkCharClass, checkResLvl, tipResLvl, checkZenRes, tipZenRes } from '../../../utils/functions'
import SpinnerSmall from '../../../components/SpinnerSmall'


const UserCharCard = ({ cStatus, cGuild, cName, cClass, cLevel, mLevel, cReset, cStr, cAgi, cVit, cEne, cCmd, cGrandReset, mapNumber, cZen}) => {
    const [fetchAccountCharReset, { isLoading, isSuccess, isError}] = useFetchAccountCharResetMutation()

    function setImg(){
        let img = ''
        if(cClass === 16 || cClass === 17 || cClass === 18 ) {
            img = Images.dk
        }
        else if(cClass === 0 || cClass === 1 || cClass === 2 ) {
            img = Images.wiz
        }
        else if(cClass === 32 || cClass === 33 || cClass === 34 ) {
            img = Images.elf
        } 
        else if(cClass === 80 || cClass === 81 || cClass === 82 ) {
            img = Images.summ
        } 
        else if (cClass === 48 || cClass === 50 ){
            img = Images.mg
        }
        else if (cClass === 64 || cClass === 66 ){
            img = Images.dl
        }
        else if (cClass === 96 || cClass === 98 ){
            img = Images.rf
        }
        return img
    }
    let image = setImg();

    function pretyZen(zen) {
        const arr = []
        const arrZen = zen.toString().split('')
        for (let a =[], i = arrZen.length; i > 0; i--) {
            a.push(arrZen[i - 1])
            // console.log(a);
            if(a.length == 3) {
                arr.push(a.reverse().join(''))
                a = []
            }
            if(i < 2  && a.length !== 0) {
                arr.push(a.reverse().join(''))
            }
        }
        const pZen = arr.reverse().join(',')
        return pZen
    }
     async function handlerReset(e) {
        e.preventDefault()
        const character = {name: cName}
        await fetchAccountCharReset(character)
    }

    return (
        <div className='user_char_card_container'>
            <div className='user_char_wrapper_div'>
            <div className='user_char_card_img_div'>
                <img className='user_char_img' src={image} />
            </div>     
            <div className='user_char_card_table_div'>
                <table className='user_char_table'>
                    <thead>
                        <tr>
                            <th className='user_th'>{cName}</th>
                            <th className='user_th'></th>
                        </tr>
                    </thead>
                    <tbody className='user_tbody'>
                        <tr>
                            <td>Class</td>
                            <td>{checkCharClass(cClass)}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            {cStatus == 1 ?
                                <td className='user_char_card_table_td_online'>Online</td>
                                :
                                <td className='user_char_card_table_td_offline'>Offline</td>
                            }
                        </tr>
                        <tr>
                            <td>Guild</td>
                            <td>{cGuild ? <em className='em_char_guild'>{cGuild}</em> : " — "}</td>
                        </tr>
                        <tr>
                            <td>Grand Reset</td>
                            <td>{cGrandReset}</td>
                        </tr>
                        <tr>
                            <td>Reset</td>
                            <td>{cReset}</td>
                        </tr>
                        <tr>
                            <td>Level</td>
                            <td>{cLevel}</td>
                        </tr>
                        <tr>
                            <td>Strength</td>
                            <td>{cStr}</td>
                        </tr>
                        <tr>
                            <td>Agility</td>
                            <td>{cAgi}</td>
                        </tr>
                        <tr>
                            <td>Vitality</td>
                            <td>{cVit}</td>
                        </tr>
                        <tr>
                            <td>Energy</td>
                            <td>{cEne}</td>
                        </tr>
                        {cCmd !== 0 &&
                          <tr>
                            <td>Command</td>
                            <td>{cCmd}</td>
                        </tr>  
                        }
                        <tr>
                            <td>Map</td>
                            <td>{checkLocation(mapNumber)}</td>
                        </tr>
                        <tr>
                            <td>Zen</td>
                            <td>{pretyZen(cZen)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div> 
            <div className='user_char_btn_wrapper'>
                {!validateCharReset(cStatus, cLevel, cReset, cGrandReset, cZen) && 
                    <div className='user_char_res_warning'>
                        {cReset >= 15 ?
                            <p className='res_warn_p_max_res'><em>🔹</em> You have reached maximum Reset <em>🎉🎉</em></p>
                        :
                        <>
                            {!checkResLvl(cLevel, cReset, cGrandReset) &&
                                <div className='user_char_res_warning'>{tipResLvl(cLevel, cReset, cGrandReset)}</div>
                            }
                            {!checkZenRes(cZen, cReset, cGrandReset) &&
                                <div className='user_char_res_warning'>
                                    {tipZenRes(cZen, cReset, cGrandReset) &&
                                        <>
                                            ⛔ Required <em className='em_zen'>{pretyZen(tipZenRes(cZen, cReset, cGrandReset))} Zen</em> more!
                                        </>
                                    }
                                </div>
                            }
                            {cStatus === 1 &&
                            <div className='user_char_res_warning'>⚠️Character should be offline!</div>
                            }
                        </>
                        }
                        
                    </div>
                    
                }
                    
                <div className='user_char_btn_div'>
                    {!validateCharReset(cStatus, cLevel, cReset, cGrandReset, cZen) ?
                        <>{isLoading ? <SpinnerSmall/>
                            :
                            <button 
                            disabled={true}
                            className='user_char_btn_disabled'
                            >Make Reset</button>
                        }</>
                        : 
                        <>{isLoading ? <SpinnerSmall/>
                        :
                        <button 
                            disabled={false}
                            className='user_char_btn'
                            onClick={(e) => handlerReset(e)}
                        >Make Reset</button>
                        }</>
                    }
                </div>
            </div>
        </div>
    );
}

export default UserCharCard;
