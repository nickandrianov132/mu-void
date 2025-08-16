
const DownloadLink = ({image, text, url}) => {
    return (
        <div className="download_link_wrapper">
            <div className="download_links_logo_wrapper">
                <img src={image}/>
            </div>
            <a className="download_link_a" href={url} target="_blank">{text}</a>
        </div>
    );
}

export default DownloadLink;
