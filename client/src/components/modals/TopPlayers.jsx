import { GiStarsStack, GiAxeSword } from "react-icons/gi";
import { useFetchTop3CharQuery } from "../../services/charApi";

const TopPlayers = () => {
    const {data: top3Players, isSuccess} = useFetchTop3CharQuery()
    console.log(top3Players);
    return (
        <div className="top3_container">
            <table className="top3_table">
                <thead>
                    <tr>
                        <th className="th_num">#</th>
                        <th className="th_name">Name</th>
                        <th className="th_reset">Reset<sup className="sup_mLevel">GR</sup></th>
                        <th className="th_lvl">lvl<sup className="sup_mLevel">ML</sup></th>
                    </tr>
                </thead>
                <tbody>
                {isSuccess && top3Players?.map((char, i) => 
                    <tr key={char.name}>
                        <td>{i === 0 ?
                                <div className="rank_star_top5"><GiStarsStack className="top5_star_gold" /> {i + 1}</div>
                                : i === 1 ? 
                                <div className="rank_star_top5"><GiStarsStack className="top5_star_silver" /> <p>{i + 1}</p></div>
                                : i === 2 ?
                                <div className="rank_star_top5"><GiStarsStack className="top5_star_cooper" /> <p>{i + 1}</p></div>
                                :
                                <div className="rank_star_top5"><GiAxeSword size={'10'}/>{i + 1}</div>
                            }
                            </td>
                        <td className="td_name">{char.name}</td>
                        <td>{char.reset}<sup className="sup_mLevel">{char.gReset}</sup></td>
                        <td>{char.cLevel}<sup className="sup_mLevel">{char.mLevel}</sup></td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default TopPlayers;
