import DescriptionIcon from "./DescriptionIcon";

const DescriptionItem = ({children}) => {
    return (
        <div className="info_description_item_wrapper">
            <DescriptionIcon/>
            {children}
        </div>
    );
}

export default DescriptionItem;
