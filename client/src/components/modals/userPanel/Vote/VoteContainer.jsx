import { useSelector } from "react-redux";
import Images from "../../../../assets/Images";
import { useFetchAccountInfoQuery } from "../../../../services/userApi";
import VoteItem from "./VoteItem";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { HOME_ROUTE } from "../../../../utils/constants";

const VoteContainer = () => {
    const {data: userInfo, isSuccess, isError, isLoading} = useFetchAccountInfoQuery()
    // console.log(userInfo);
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
                <h4 className="vote_h4">👍📢 Vote for our Server and get reward <em className="vote_em"> WCoins</em>!</h4>
            </div>
            <div className="vote_announce">Will be available few hours before the opening, now free!</div>
            {isSuccess &&
            <>
            <VoteItem
                title="Vote on TOPG!"
                link={`https://topg.org/ru/mu-private-servers/server-675336-${userInfo.accName}`}
                img={Images.topg_banner}
                coins="3 WCoins!"
                coinsDesc="every 6 hours"
            />
            <VoteItem
                title="Vote on ExtremeTop100!"
                link={`https://www.xtremetop100.com/in.php?site=1132377759&postback=${userInfo.accName}`}
                img={Images.xtremetop100_banner}
                coins="5 WCoins!"
                coinsDesc="every 12 hours"
            />
            <VoteItem
                title="Vote on Top100Arena!"
                link={`https://www.top100arena.com/listing/101647/vote?incentive=${userInfo.accName}`}
                img={Images.top100arena_banner}
                coins="10 WCoins!"
                coinsDesc="every 24 hours"
            />
            <VoteItem
                title="Vote on ArenaTop100!"
                link={`https://www.arena-top100.com/index.php?a=in&u=nick132&id=${userInfo.accName}`}
                img={Images.arena_top100_banner}
                coins="5 WCoins!"
                coinsDesc="every 12 hours"
            />
            <VoteItem
                title="Vote on MMOTOP"
                link={`https://mu.mmotop.ru/en/servers/38919/votes/new`}
                img={Images.mmotop_small}
                coins="10 WCoins!"
                coinsDesc="every 24 hours"
            />
            <VoteItem
                title="Vote on MMOANONS"
                link={`https://www.mmoanons.com/mu-online/rating/mu-voidcom`}
                img={Images.mmoanons}
                coinsDesc="every 24 hours"
            />
            <VoteItem
                title="Vote on SupremeTop100"
                link={`https://supremetop100.com/en/vote/in/mu-void-classic-server-x35-open-24th-october`}
                img={`https://supremetop100.com/img/SupremeTop100_Vote_5.png`}
                coinsDesc="every 24 hours"
            />
            <VoteItem
                title="Vote on GTop100"
                link={`https://gtop100.com/mu-online-private-servers/server-105282?vote=1`}
                img={Images.votegtop100}
                coinsDesc="every 24 hours"
            />
            <div className="vote_tip_container">
                <em className="vote_tip_1">* Due to <b>MMOTOP</b> does not provide postback system, we automatically fetch all vote every <b>20 minutes</b> and add WCoins on your account.</em>
                <em className="vote_tip_2">* On <b>MMOTOP</b> you should indicate your account <b>Login</b> to get WCoins.</em>
            </div>
            </>
            
            }
        </div>
    );
}

export default VoteContainer;
