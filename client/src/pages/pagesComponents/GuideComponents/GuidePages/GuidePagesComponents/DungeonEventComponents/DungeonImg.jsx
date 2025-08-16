
const DungeonImg = ({img, imgClass}) => {
    return (
        <div className="dungeon_img_wrapper">
            <img className={imgClass} src={img}/>
        </div>
    );
}

export default DungeonImg;
