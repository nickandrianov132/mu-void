import { useState } from "react";
import ButtonsDiv from "./ButtonsDiv";

const PictureCarusel = ({images}) => {
    const [index, setIndex] = useState(0)
    // function handlerPrevClick(){
    //     if(index === 0) {
    //        setIndex((images.length -1))
    //     }
    //     if(index > 0) {
    //         setIndex((index - 1) % images.length)
    //     }
    // }
    return(
        <div className="carousel_container">
        <div className="imgDiv">
            {/* <button className="button-left" 
                onClick={handlerPrevClick}
            ><span>Prev</span></button> */}
            <img alt={`${images[index]} ${index +1}`} src={images[index]}/>
            {/* <button className="button-right"
                onClick={()=>setIndex(i => (i + 1) % images.length)}
            ><span>Next</span></button> */}
        </div>
        <ButtonsDiv 
            itemsArr={images}
            index={index}
            setIndex={setIndex}
        />
        </div>
    );
}

export default PictureCarusel;
