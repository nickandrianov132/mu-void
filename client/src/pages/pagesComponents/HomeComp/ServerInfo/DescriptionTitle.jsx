import PComponent from "./PComponent";


const DescriptionTitle = ({title}) => {
    return (
        <div className="description_title_wrapper">
            <PComponent classN="description_title_p" content={title}/>
        </div>
    );
}

export default DescriptionTitle;
