import { useFetchOneCharQuery } from '../../../services/charApi';
import { useParams } from 'react-router';
import Images from '../../../assets/Images';
import { checkCharClass, checkLocation } from '../../../utils/functions';

const CharacterCard = () => {
    const {id} = useParams()
    const {data, isLoading} = useFetchOneCharQuery(id)
    console.log(data);
    function setImg(){
        let img = ''
        if(!isLoading && (data[0].cClass === 16 || data[0].cClass === 17 || data[0].cClass === 18)) {
            img = Images.dk
        }
        else if(!isLoading && (data[0].cClass === 0 || data[0].cClass === 1 || data[0].cClass === 2)) {
            img = Images.wiz
        }
        else if(!isLoading && (data[0].cClass === 32 || data[0].cClass === 33 || data[0].cClass === 34)) {
            img = Images.elf
        } 
        else if(!isLoading && (data[0].cClass === 80 || data[0].cClass === 81 || data[0].cClass === 82)) {
            img = Images.summ
        } 
        else if (!isLoading && (data[0].cClass === 48 || data[0].cClass === 50)){
            img = Images.mg
        }
        else if (!isLoading && (data[0].cClass === 64 || data[0].cClass === 66)){
            img = Images.dl
        }
        else if (!isLoading && (data[0].cClass === 96 || data[0].cClass === 98)){
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
                                    <th className='th'>{data[0].cName}</th>
                                </tr>
                            </thead>
                            <tbody className='tbody'>
                                <tr>
                                    <td>Class</td>
                                    <td>{checkCharClass(data[0].cClass)}</td>
                                </tr>
                                <tr>
                                    <td>Reset</td>
                                    <td>{data[0].cReset}</td>
                                </tr>
                                <tr>
                                    <td>Level</td>
                                    <td>{data[0].cLevel}</td>
                                </tr>
                                <tr>
                                    <td>Strength</td>
                                    <td>{data[0].cStr}</td>
                                </tr>
                                <tr>
                                    <td>Agility</td>
                                    <td>{data[0].cAgi}</td>
                                </tr>
                                <tr>
                                    <td>Vitality</td>
                                    <td>{data[0].cVit}</td>
                                </tr>
                                <tr>
                                    <td>Energy</td>
                                    <td>{data[0].cEne}</td>
                                </tr>
                                {data[0].cCmd !== 0 &&
                                <tr>
                                    <td>Command</td>
                                    <td>{data[0].cCmd}</td>
                                </tr>  
                                }
                                <tr>
                                    <td>Map</td>
                                    <td>{checkLocation(data[0].mapNumber)}</td>
                                </tr>
                                <tr>
                                    <td>Coord</td>
                                    <td>{`${data[0].mapPosX}x${data[0].mapPosY}`} </td>
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
