import Images from "../assets/Images";
import DownloadLink from "./pagesComponents/DownloadComponents/DownloadLink";

const Download = () => {
    return (
        <div className='download_container'>
            <DownloadLink
                image={Images.mega_cloud1}
                url="https://mega.nz/file/KVFWHahQ#2REvmdfYxnmX1bjlby0tQ-MQGCkWuiaAScodZ6tmZZ4"
                text="Download from MEGA👈"
            />
            <DownloadLink
                image={Images.google_drive}
                url="https://drive.google.com/file/d/1DoAlD6b1dt6MYxJ0SDAcnV2mWUtEmHIq/view?usp=drive_link"
                text="Download from Google Drive👈"
            />
        </div>
    );
}

export default Download;
