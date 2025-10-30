import { useFetchCastleInfoQuery } from "../../../services/castleApi";
import Images from "../../../assets/Images";

const CastleInfo = () => {
    const {data: castleInfo, isSuccess, isError, isLoading, error } = useFetchCastleInfoQuery()

    return (
        <>
        {isSuccess &&
            <div className="castle_info_container">
                <div className="castle_header_wrapper">
                    <img className="shield_logo" src={Images.swords_shield3} />
                    {/* <GiMazeSaw className="castle_emblem"/> */}
                    <h4>Castle Siege:</h4>
                </div>
                <div className="cs_info_wrapper">
                    <div className="cs_title">CS Start: </div>
                    <div className="cs_info">{new Date(castleInfo.startDate).toUTCString().slice(5, 17)}</div>
                </div>
                <div className="cs_info_wrapper">
                    <div className="cs_title">CS End: </div>
                    <div className="cs_info">{new Date(castleInfo.endDate).toUTCString().slice(5, 17)}</div>
                </div>
                <div className="cs_info_wrapper">
                    <div className="cs_title_owner">
                        <span>CS Owner:</span>
                    </div>
                    {castleInfo.occupy ?
                        // <div className="cs_info_owner"><b>{castleInfo.ownerGuild}</b><GiLaurelCrown  className="owner_guild_emblem"/></div>
                        <div className="cs_info_owner">
                            <span>{castleInfo.ownerGuild}</span>
                            <img src={Images.crown3}/>
                        </div>
                        :
                        <div className="cs_info_owner">N/A</div>
                    }
                </div>
            </div>
        }
        </>
    );
}

export default CastleInfo;
