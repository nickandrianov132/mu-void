import Images from "../assets/Images";
import DownloadLink from "./pagesComponents/DownloadComponents/DownloadLink";

const Download = () => {
    return (
        <div className='download_container'>
            <DownloadLink
                image={Images.mega_cloud1}
                url="https://mega.nz/file/vV8RAYBI#MAfjXFMZiovDujge9VU9YMp8985jMS2s4S_jsV3jT78"
                text="Download Client from MEGA👈"
            />
            <DownloadLink
                image={Images.mega_cloud1}
                url="https://mega.nz/file/fYFDGagJ#8hNMZ4HGDUWftmAJLjKn40tUAWmyPd_A5M_y3WDZzBw"
                text="Fix transparent UI from MEGA👈"
            />
            <DownloadLink
                image={Images.google_drive}
                url="https://drive.google.com/file/d/1qhVjLvkf2RT5r4tG0YYM63sHxFyw9tHN/view?usp=drive_link"
                text="Download Client from Google Drive👈"
            />
            <DownloadLink
                image={Images.google_drive}
                url="https://drive.google.com/file/d/1gkcdOOjISHwGNk9qXeMMT9O91mU1xThA/view?usp=drive_link"
                text="Fix transparent UI from Google Drive👈"
            />
        </div>
    );
}

export default Download;
