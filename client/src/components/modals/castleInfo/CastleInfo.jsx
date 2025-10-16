import { useEffect } from "react";
import { useFetchCastleInfoQuery } from "../../../services/castleApi";
import { GiCastle, GiCrown, GiLaurelCrown, GiMazeSaw } from "react-icons/gi";

const CastleInfo = () => {
    const {data: castleInfo, isSuccess, isError, isLoading, error } = useFetchCastleInfoQuery()
    useEffect(() => {
        if(isSuccess) {
            console.log(castleInfo) 
        }
    }, [isSuccess])

    return (
        <>
        {isSuccess &&
            <div className="castle_info_container">
                <div className="castle_header_wrapper">
                    <GiMazeSaw className="castle_emblem"/>
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
                    <div className="cs_title_owner">CS Owner: </div>
                    {castleInfo.occupy ?
                        <div className="cs_info_owner"><b>{castleInfo.ownerGuild}</b><GiLaurelCrown  className="owner_guild_emblem"/></div>
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
