import { useSelector } from "react-redux";
import Images from "../../../../assets/Images";
import { useFetchAccountInfoQuery } from "../../../../services/userApi";
import VoteItem from "./VoteItem";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { HOME_ROUTE } from "../../../../utils/constants";

const VoteContainer = () => {
    const {data: userInfo, isSuccess, isError, isLoading} = useFetchAccountInfoQuery()
    console.log(userInfo);
    const {accessToken} = useSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if(!accessToken) {
            navigate(HOME_ROUTE)
        }
    }, [accessToken])
    return (
        <div className="vote_container">
            <div className="vote_header_wrapper">
                <h4 className="vote_h4">👍📢 Vote for our Server and get reward <em className="vote_em">5 WCoins</em>!</h4>
            </div>
            {isSuccess &&
            <>
            <VoteItem
                title="Vote on TOPG!"
                link={`https://topg.org/ru/mu-private-servers/server-675336-${userInfo.accName}`}
                img={Images.topg_banner}
            />
            <VoteItem
                title="Vote on ExtremeTop100!"
                link={`https://www.xtremetop100.com/in.php?site=1132377759&postback=${userInfo.accName}`}
                img={Images.xtremetop100_banner}
            />
            <VoteItem
                title="Vote on Top100Arena!"
                link={`https://www.top100arena.com/listing/101647/vote?incentive=${userInfo.accName}`}
                img={Images.top100arena_banner}
            />
            <VoteItem
                title="Vote on ArenaTop100!"
                link={`https://www.arena-top100.com/index.php?a=in&u=nick132&id=${userInfo.accName}`}
                img={Images.arena_top100_banner}
            />
            
            </>
            
            }
        </div>
    );
}

export default VoteContainer;
