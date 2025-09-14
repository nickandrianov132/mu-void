import Images from "../../../../assets/Images";
import { useFetchAccountInfoQuery } from "../../../../services/userApi";
import VoteItem from "./VoteItem";

const VoteContainer = () => {
    const {data: userInfo, isSuccess, isError, isLoading} = useFetchAccountInfoQuery()
    console.log(userInfo);
    return (
        <div className="vote_container">
            <div className="vote_header_wrapper">
                <h4 className="vote_h4">Vote for our Server and get reward <em>10 WC</em>!</h4>
            </div>
            {isSuccess &&
            <>
            <VoteItem
                title="Vote on TOPG!"
                link={`https://topg.org/ru/mu-private-servers/server-675336-${userInfo.accName}`}
                img={Images.topg_banner}
            />
            <VoteItem
                title="Vote on extremetop100!!"
                link={`https://www.xtremetop100.com/in.php?site=1132377759&postback=${userInfo.accName}`}
                img={Images.xtremetop100_banner}
            />
            
            </>
            
            }
        </div>
    );
}

export default VoteContainer;
