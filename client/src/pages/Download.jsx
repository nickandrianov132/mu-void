import Images from "../assets/Images";
import DownloadLink from "./pagesComponents/DownloadComponents/DownloadLink";

const Download = () => {
    return (
        <div className='download_container'>
            <DownloadLink
                image={Images.mega_cloud1}
                url="https://mega.nz/file/vV8RAYBI#MAfjXFMZiovDujge9VU9YMp8985jMS2s4S_jsV3jT78"
                text="Download Client from MEGA👈"
                className="download_links_logo_wrapper"
                imgClass="img_logo"
            />
            <DownloadLink
                image={Images.mega_cloud1}
                url="https://mega.nz/file/fYFDGagJ#8hNMZ4HGDUWftmAJLjKn40tUAWmyPd_A5M_y3WDZzBw"
                text="Fix transparent UI from MEGA👈"
                className="download_links_logo_wrapper"
                imgClass="img_logo"
            />
            <DownloadLink
                image={Images.google_drive}
                url="https://drive.google.com/file/d/1qhVjLvkf2RT5r4tG0YYM63sHxFyw9tHN/view?usp=drive_link"
                text="Download Client from Google Drive👈"
                className="download_links_logo_wrapper"
                imgClass="img_logo"
            />
            <DownloadLink
                image={Images.google_drive}
                url="https://drive.google.com/file/d/1gkcdOOjISHwGNk9qXeMMT9O91mU1xThA/view?usp=drive_link"
                text="Fix transparent UI from Google Drive👈"
                className="download_links_logo_wrapper"
                imgClass="img_logo"
            />
            <DownloadLink
                image={Images.pcloud}
                url="https://e.pcloud.link/publink/show?code=XZi54IZ2tKKu02nDjJPpThpCefqrHkbl6rX"
                text="Download Client from pCloud👈"
                className="download_links_logo_wrapper"
                imgClass="pcloud_logo"
            />
            <DownloadLink
                image={Images.pcloud}
                url="https://e.pcloud.link/publink/show?code=XZqJ4IZeXC7soSWpgXY8a2AnmQIwkCIdXeV"
                text="Fix transparent UI from pCloud👈"
                className="download_links_logo_wrapper"
                imgClass="pcloud_logo"
            />
            <div className="download_remark_wrapper">
                <p className="download_remark_p">* In case you have got any issues with downloading or using the game client arguing antivirus protection, stop your antivirus protection for the time you download the client and add client folder to the exclusions of your antivirus protection system. There’s no threats in game client for your system. Some antivirus systems may recognize client’s .dll files as potential threats.</p>
            </div>
        </div>
    );
}

export default Download;
