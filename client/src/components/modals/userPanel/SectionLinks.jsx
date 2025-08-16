import { useNavigate } from "react-router";
import { ACCOUNT_VIP_ROUTE } from "../../../utils/constants";

const SectionLinks = () => {
    const navigate = useNavigate()
    return (
        <div className="user_panel_links">
                <a className="link-vote" href="#">Vote & get Coins</a>
                <a className="link-vip" onClick={() => navigate(ACCOUNT_VIP_ROUTE)}>Buy VIP</a>
                <a className="link-discord" href="#">Discord</a>
                {/* <a className="link-report" href="#">Report Bug</a>  */}
        </div>
    );
}

export default SectionLinks;

