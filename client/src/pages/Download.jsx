import Images from "../assets/Images";
import DownloadLink from "./pagesComponents/DownloadComponents/DownloadLink";

const Download = () => {
    return (
        <div className='download_container'>
            <DownloadLink
                image={Images.mega_cloud1}
                url="https://mega.nz/file/zd1TBR5A#F0yQI_aaC0L-NN8KACBu-UnwvulBecmpB5yDAqxL1Mg"
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
                url="https://drive.google.com/file/d/1b8mXnOKz09yS5o5RtwZscCpN4Z_LOSzX/view?usp=drive_link"
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
            <DownloadLink
                image={Images.limeWire}
                url="https://limewire.com/d/kVXHi#Hzqda32i1s"
                text="Download Client from LimeWire🍋"
                className="download_links_logo_wrapper"
                imgClass="limeWire_logo"
            />
            <DownloadLink
                image={Images.limeWire}
                url="https://limewire.com/d/dBAMo#3YmGSPpI2I"
                text="Fix transparent UI from LimeWire🍋"
                className="download_links_logo_wrapper"
                imgClass="limeWire_logo"
            />
            <DownloadLink
                image={Images.filebin2}
                url="https://filebin.net/bd7k5d9un118d8qo"
                text="Download Client from Filebin💾"
                className="download_links_logo_wrapper"
                imgClass="filebin_logo"
            />
            <div className="download_remark_wrapper">
                <p className="download_remark_p">* In case you have got any issues with downloading or using the game client arguing antivirus protection, stop your antivirus protection for the time you download the client and add client folder to the exclusions of your antivirus protection system. There’s no threats in game client for your system. Some antivirus systems may recognize client’s .dll files as potential threats.</p>
            </div>
        </div>
    );
}

export default Download;
