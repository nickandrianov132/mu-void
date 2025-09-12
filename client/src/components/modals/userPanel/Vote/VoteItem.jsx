
const VoteItem = ({title, link, img}) => {
    return (
        <div className="vote_item_container">
            <div className="vote_img_wrapper">
                <a href={link} target="_blank">
                    <img className="vote_img" src={img} id="topgratingimg" alt="Vote on TopG"/>
                </a>
            </div>
            <div className="vote_link_wrapper">
                <a className="vote_link" href={link} target="_blank">
                {title}👈
                </a>
            </div>
        </div>
    );
}

export default VoteItem;
