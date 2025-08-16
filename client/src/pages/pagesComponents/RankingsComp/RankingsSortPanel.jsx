import SortBtn from "./SortBtn";
import SortBtnAll from "./SortBtnAll";


const RankingsSortPanel = () => {

    return (
        <div className="rankings_sort_btns_container">
            <SortBtn title={'DW / SM / GM'} sortType={'DW'}/>
            <SortBtn title={'DK / BK / BM'} sortType={'DK'}/>
            <SortBtn title={'FE / ME / HE'} sortType={'FE'}/>
            <SortBtn title={'Sum / BS / DiM'} sortType={'Summ'}/>
            <SortBtn title={'MG / DM'} sortType={'MG'}/>
            <SortBtn title={'RF / FM'} sortType={'RF'}/>
            <SortBtn title={'DL / LE'} sortType={'DL'}/>
            <SortBtnAll title={'ALL'} />
        </div>
    );
}

export default RankingsSortPanel;
