import { GiStarsStack, GiAxeSword } from "react-icons/gi";
import { useFetchTop3CharQuery } from "../../services/charApi";
import { filterChars, grToMlConvert } from "../../utils/functions";
const emptyTop5Players = [
    {cLevel: '-', gReset: '-', mLevel: '-', id: "0", name: '—', reset: '-'},
    {cLevel: '-', gReset: '-', mLevel: '-', id: "1", name: '—', reset: '-'},
    {cLevel: '-', gReset: '-', mLevel: '-', id: "2", name: '—', reset: '-'},
    {cLevel: '-', gReset: '-', mLevel: '-', id: "3", name: '—', reset: '-'},
    {cLevel: '-', gReset: '-', mLevel: '-', id: "4", name: '—', reset: '-'},
];
const TopPlayers = () => {
    const {data: top3Players, isSuccess} = useFetchTop3CharQuery(undefined, {
            selectFromResult: ({ data, isSuccess, isError, isLoading }) => ({
                data: data?.filter((e) => filterChars(e.id)),
                isLoading: isLoading,
                isSuccess: isSuccess,
                isError: isError,
            })
        })
    console.log(top3Players);
    return (
        <div className="top5_container">
            <table className="top5_table">
                <thead>
                    <tr>
                        <th className="th_num">#</th>
                        <th className="th_name">Name</th>
                        <th className="th_reset">Reset<sup className="sup_mLevel">GR</sup></th>
                        <th className="th_lvl">lvl<sup className="sup_mLevel">ML</sup></th>
                    </tr>
                </thead>
                <tbody>
                {isSuccess & top3Players?.length > 0 ?
                    top3Players?.map((char, i) => 
                    <tr key={char.name}>
                        <td>{i === 0 ?
                                <div className="rank_star_top5"><GiStarsStack className="top5_star_gold" /> <p>{i + 1}</p></div>
                                : i === 1 ? 
                                <div className="rank_star_top5"><GiStarsStack className="top5_star_silver" /> <p>{i + 1}</p></div>
                                : i === 2 ?
                                <div className="rank_star_top5"><GiStarsStack className="top5_star_cooper" /> <p>{i + 1}</p></div>
                                :
                                <div className="rank_star_top5"><GiAxeSword className="top5_axe_sword"/> <p>{i + 1}</p></div>
                            }
                        </td>
                        <td className="td_name">{char.name}</td>
                        <td>{char.reset}<sup className="sup_mLevel">{char.gReset}</sup></td>
                        <td>{char.cLevel}<sup className="sup_mLevel">{grToMlConvert(char.gReset)}</sup></td>
                    </tr>)
                    :
                    emptyTop5Players.map((char, i) =>
                    <tr key={char.id}>
                        <td>{i === 0 ?
                                <div className="rank_star_top5"><GiStarsStack className="top5_star_gold" /> {i + 1}</div>
                                : i === 1 ? 
                                <div className="rank_star_top5"><GiStarsStack className="top5_star_silver" /> <p>{i + 1}</p></div>
                                : i === 2 ?
                                <div className="rank_star_top5"><GiStarsStack className="top5_star_cooper" /> <p>{i + 1}</p></div>
                                :
                                <div className="rank_star_top5"><GiAxeSword/>{i + 1}</div>
                            }
                        </td>
                        <td className="td_name">{char.name}</td>
                        <td>{char.reset}<sup className="sup_mLevel">{char.gReset}</sup></td>
                        <td>{char.cLevel}<sup className="sup_mLevel">{char.mLevel}</sup></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
}

export default TopPlayers;
