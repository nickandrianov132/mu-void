import { NavLink, useNavigate } from "react-router";
import { ACCOUNT_VIP_ROUTE, ACCOUNT_VOTE_ROUTE } from "../../../utils/constants";

const SectionLinks = () => {
    const navigate = useNavigate()
    return (
        <div className="user_panel_links">
                {/* <a className="link-vote" href="#">Vote & get WCoins</a> */}
                <NavLink className="link-vote" to={ACCOUNT_VOTE_ROUTE} >Vote & get WCoins</NavLink>
                <NavLink className="link-vip" to={ACCOUNT_VIP_ROUTE} >Buy VIP</NavLink>
                <a className="link-discord" href="https://discord.com/invite/9gXnu6n8" target="_blank">Discord</a>
                {/* <a className="link-report" href="#">Report Bug</a>  */}
        </div>
    );
}

export default SectionLinks;

