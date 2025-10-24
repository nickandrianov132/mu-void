import { useFetchOneCharQuery } from '../../../services/charApi';
import { useParams } from 'react-router';
import Images from '../../../assets/Images';
import { checkCharClass, checkLocation } from '../../../utils/functions';

const CharacterCard = () => {
    const {id} = useParams()
    const {data, isLoading} = useFetchOneCharQuery(id)
    // console.log(data);
    function setImg(){
        let img = ''
        if(!isLoading && (data.cClass === 16 || data.cClass === 17 || data.cClass === 18)) {
            img = Images.dk
        }
        else if(!isLoading && (data.cClass === 0 || data.cClass === 1 || data.cClass === 2)) {
            img = Images.wiz
        }
        else if(!isLoading && (data.cClass === 32 || data.cClass === 33 || data.cClass === 34)) {
            img = Images.elf
        } 
        else if(!isLoading && (data.cClass === 80 || data.cClass === 81 || data.cClass === 82)) {
            img = Images.summ
        } 
        else if (!isLoading && (data.cClass === 48 || data.cClass === 50)){
            img = Images.mg
        }
        else if (!isLoading && (data.cClass === 64 || data.cClass === 66)){
            img = Images.dl
        }
        else if (!isLoading && (data.cClass === 96 || data.cClass === 98)){
            img = Images.rf
        }
        return img
    }
    let image = setImg();

    function pretyZen() {
        const arr = []
        const arrZen = char.zen.split('')
        for (let a =[], i = arrZen.length; i > 0; i--) {
            a.push(arrZen[i - 1])
            console.log(a);
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
    return (
        <>
        {!isLoading && 
        <div className='char_card_container'>
            <div className='char_card_img_div'>
                <img className='char_img' src={image} />
            </div>
                 
                <div className='char_card_table_div'>
                        <table className='char_table'>
                            <thead>
                                <tr>
                                    <th className='th'>{data.cName}</th>
                                </tr>
                            </thead>
                            <tbody className='tbody'>
                                <tr>
                                    <td>Class</td>
                                    <td>{checkCharClass(data.cClass)}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    {data.online == 1 ?
                                        <td className='user_char_card_table_td_online'>Online</td>
                                        :
                                        <td className='user_char_card_table_td_offline'>Offline</td>
                                    }
                                </tr>
                                <tr>
                                    <td>Guild</td>
                                    <td>{data.charGuild ? <em className='em_char_guild'>{data.charGuild}</em> : " — "}</td>
                                </tr>
                                <tr>
                                    <td>Reset</td>
                                    <td>{data.cReset}</td>
                                </tr>
                                <tr>
                                    <td>Grand Reset</td>
                                    <td>{data.cGrandReset}</td>
                                </tr>
                                <tr>
                                    <td>Level</td>
                                    <td>{data.cLevel}</td>
                                </tr>
                                <tr>
                                    <td>Strength</td>
                                    <td>{data.cStr}</td>
                                </tr>
                                <tr>
                                    <td>Agility</td>
                                    <td>{data.cAgi}</td>
                                </tr>
                                <tr>
                                    <td>Vitality</td>
                                    <td>{data.cVit}</td>
                                </tr>
                                <tr>
                                    <td>Energy</td>
                                    <td>{data.cEne}</td>
                                </tr>
                                {data.cCmd !== 0 &&
                                <tr>
                                    <td>Command</td>
                                    <td>{data.cCmd}</td>
                                </tr>  
                                }
                                <tr>
                                    <td>Map</td>
                                    <td>{checkLocation(data.mapNumber)}</td>
                                </tr>
                                <tr>
                                    <td>Coord</td>
                                    <td>{`${data.mapX}x${data.mapY}`} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

            
            
        </div>
}
        </>
    );
}


export default CharacterCard;
