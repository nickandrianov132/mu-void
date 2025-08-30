import { useNavigate } from "react-router";
import { useFetchAllCharQuery } from "../services/charApi";
import { CHARACTER_CARD_ROUTE } from "../utils/constants";
import OnlineIndicator from "./pagesComponents/RankingsComp/OnlineIndicator";
import { GiAxeSword, GiBarbute, GiRibbonMedal, GiStarsStack } from 'react-icons/gi';
import RankingsSortPanel from "./pagesComponents/RankingsComp/RankingsSortPanel";
import { addCharacters } from "../store/slices/characterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkCharClass, filterChars, grToMlConvert } from "../utils/functions";
import Spinner from "../components/Spinner";


const Rankings = () => {
    const {data: chars, isSuccess, isLoading, isError} = useFetchAllCharQuery(undefined, {
        selectFromResult: ({ data, isSuccess, isError, isLoading }) => ({
            data: data?.filter((e) => filterChars(e.id)),
            isLoading: isLoading,
            isSuccess: isSuccess,
            isError: isError,
        })
    })
    const characters = useSelector(state => state.characters)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    console.log(isError);
    console.log(isSuccess);
    console.log(chars);
    useEffect(()=> {
        if(isSuccess == true) {
        console.log(chars)
        dispatch(addCharacters(chars))
    }
    }, [isSuccess])
    console.log(characters);
    return (
        <>{isLoading ? 
            <Spinner/> 
            :
            <div className="rankings_container">
                <RankingsSortPanel />
                <table className="rankings_table">
                    <thead>
                        <tr>
                            <th className="th_num"># Top</th>
                            <th className="th_status"></th>
                            <th className="th_name">Name</th>
                            <th className="th_class">Class</th>
                            <th className="th_lvl">Level<sup className="sup_mLevel">ML</sup></th>
                            <th className="th_reset">Reset<sup className="sup_mLevel">GR</sup></th>
                        </tr>
                    </thead>
                    <tbody className="rankings_tbody">
                        {characters?.map((char, i) => 
                            <tr key={char.name} onClick={() => navigate(CHARACTER_CARD_ROUTE + '/' + char.name)}>
                                <td>{i === 0 ?
                                    <div className="rank_star"><GiStarsStack className="top_star_gold" /> {i + 1}</div>
                                    : i === 1 ? 
                                    <div className="rank_star"><GiStarsStack className="top_star_silver" /> {i + 1}</div>
                                    : i === 2 ?
                                    <div className="rank_star"><GiStarsStack className="top_star_cooper" /> {i + 1}</div>
                                    : <div className="rank_star"><GiAxeSword className="top_sword_axe"/>{i + 1}</div>}
                                 {/* <div><GiBarbute size={'10'}/>i+1</div>>} */}
                                </td>
                                <td><OnlineIndicator online={char.online} /></td>
                                <td className="td_name">{char.name}</td>
                                <td className="td_class">{checkCharClass(char.class)}</td>
                                <td>{char.cLevel}<sup className="sup_mLevel">{grToMlConvert(char.gReset)}</sup></td>
                                <td>{char.reset}<sup className="sup_mLevel">{char.gReset}</sup></td>

                            </tr>  
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="table_footer_td" colSpan={6}>Top 100 Players</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        
        }
    </>
    );
}

export default Rankings;
