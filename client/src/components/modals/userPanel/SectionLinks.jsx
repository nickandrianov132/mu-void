import { NavLink, useNavigate } from "react-router";
import { ACCOUNT_VIP_ROUTE, ACCOUNT_VOTE_ROUTE, BUY_WCOINS } from "../../../utils/constants";
import { GiCoins, GiTwoCoins } from "react-icons/gi";

const SectionLinks = () => {
    const navigate = useNavigate()
    return (
        <div className="user_panel_links">
                {/* <a className="link-vote" href="#">Vote & get WCoins</a> */}
                <NavLink className="link-vote" to={ACCOUNT_VOTE_ROUTE} >Vote & get WCoins <GiTwoCoins className="coins_icon" /></NavLink>
                <NavLink className="link-vip" to={ACCOUNT_VIP_ROUTE} >Buy VIP</NavLink>
                <a className="link-discord" href="https://discord.gg/ANTqvCrQCk" target="_blank">Discord</a>
                {/* <NavLink className="link-buyWcoins" to={BUY_WCOINS} >Buy WCoins!</NavLink> */}
                {/* <a className="link-bug" href="#">Report bug</a>  */}
        </div>
    );
}

export default SectionLinks;

