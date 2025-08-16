import Images from "../assets/Images";
import DownloadLink from "./pagesComponents/DownloadComponents/DownloadLink";

const Download = () => {
    return (
        <div className='download_container'>
            <DownloadLink
                image={Images.mega_cloud1}
                url="https://mega.io/"
                text="Download from MEGA👈"
            />
            <DownloadLink
                image={Images.google_drive}
                url="https://drive.google.com/file/d/108zoyGXOB_D7LjSzlxNcbHuNhNcWMRNg/view?usp=sharing"
                text="Download from Google Drive👈"
            />
        </div>
    );
}

export default Download;
