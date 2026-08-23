import Images from "../assets/Images";
import DownloadLink from "./pagesComponents/DownloadComponents/DownloadLink";

const Download = () => {
    return (
        <div className='download_container'>
            <h1 className="header"> Latest client is available for download: </h1>
            <DownloadLink
                image={Images.mega_cloud1}
                // url="https://mega.nz/file/2d0mjLBB#YmzbYZV4N-xjcO5SElFpq6CRQQVHvTooAJZCAb83vUY"
                url="#"
                text="Download Client from MEGA👈"
                className="download_links_logo_wrapper"
                imgClass="img_logo"
            />
            <DownloadLink
                image={Images.mega_cloud1}
                // url="https://mega.nz/file/fYFDGagJ#8hNMZ4HGDUWftmAJLjKn40tUAWmyPd_A5M_y3WDZzBw"
                url="#"
                text="Fix transparent UI from MEGA👈"
                className="download_links_logo_wrapper"
                imgClass="img_logo"
            />

            <DownloadLink
                image={Images.pcloud}
                // url="https://e.pcloud.link/publink/show?code=XZUKOy7Z65G1R6nhQ8y54MvtxdrHhz3fh5bV"
                url="#"
                text="Download Client from pCloud👈"
                className="download_links_logo_wrapper"
                imgClass="pcloud_logo"
            />
            <DownloadLink
                image={Images.pcloud}
                // url="https://e.pcloud.link/publink/show?code=XZqJ4IZeXC7soSWpgXY8a2AnmQIwkCIdXeV"
                url="#"
                text="Fix transparent UI from pCloud👈"
                className="download_links_logo_wrapper"
                imgClass="pcloud_logo"
            />
            <DownloadLink
                image={Images.limeWire}
                // url="https://limewire.com/d/1mmjM#jDOT8BWW3Z"
                url="#"
                text="Download Client from LimeWire🍋"
                className="download_links_logo_wrapper"
                imgClass="limeWire_logo"
            />
            <DownloadLink
                image={Images.limeWire}
                // url="https://limewire.com/d/1mmjM#jDOT8BWW3Z"
                url="#"
                text="Fix transparent UI from LimeWire🍋"
                className="download_links_logo_wrapper"
                imgClass="limeWire_logo"
            />
            <DownloadLink
                image={Images.filebin2}
                // url="https://filebin.net/0n7ebql6cfscz26w"
                url="#"
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
