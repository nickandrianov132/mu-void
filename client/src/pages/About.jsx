import { useSelector } from "react-redux";
import DescriptionContent from "./pagesComponents/HomeComp/ServerInfo/DescriptionContent";
import DescriptionItem from "./pagesComponents/HomeComp/ServerInfo/DescriptionItem";
import DescriptionTitle from "./pagesComponents/HomeComp/ServerInfo/DescriptionTitle";
import Descriptionwrapper from "./pagesComponents/HomeComp/ServerInfo/Descriptionwrapper";
import HeaderInfo from "./pagesComponents/HomeComp/ServerInfo/HeaderInfo";
import InfoContainer from "./pagesComponents/HomeComp/ServerInfo/InfoContainer";
import MultiPComponentWrapepr from "./pagesComponents/HomeComp/ServerInfo/MultiPComponentWrapepr";
import PComponent from "./pagesComponents/HomeComp/ServerInfo/PComponent";


const About = () => {
    const serverInfo = useSelector(state => state.serverInfo);
    // console.log(serverInfo);

    return (
    <div className="about_content_container">
        <InfoContainer>
            <HeaderInfo />
            <Descriptionwrapper>
                {serverInfo?.map((elem) => 
                    <DescriptionItem key={elem.title}>
                        <DescriptionTitle title={elem.title}/>
                        <DescriptionContent>
                            {Array.isArray(elem.content) ?
                            <>
                                {elem.content.map((el, index) => 
                                <MultiPComponentWrapepr key={index}>
                                    {el.map((e) =>
                                    <PComponent 
                                        key={e.content}
                                        classN={e.className}
                                        content={e.content}
                                    />
                                    )}
                                </MultiPComponentWrapepr>
                                )}
                            </>
                            :
                            <PComponent 
                                classN={elem.content.className}
                                content={elem.content.content} 
                            />
                            }
                        </DescriptionContent>
                    </DescriptionItem>
                )}
            </Descriptionwrapper>
        </InfoContainer>
    </div>
    );
}

export default About;
