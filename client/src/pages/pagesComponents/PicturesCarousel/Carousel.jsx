import { useEffect, useState } from "react";

const Carousel = ({images}) => {
    const [btn, setBtn] = useState(0);
    const [shift, setShift] = useState("shift0");
    const btn1 = document.getElementById('0')
    const btn2 = document.getElementById('1')
    const btn3 = document.getElementById('2')
    let shift0 = 'shift0'
    let shift1 = 'shift1'
    let shift2 = 'shift2'
            // setInterval(() => {
            //     if(shift == shift0){
            //         setShift(shift1)
            //     }
            //     if(shift == shift1){
            //         setShift(shift2)
            //     }
            //     if(shift == shift2){
            //         setShift(shift0)
            //     }
            // }, 1500)

    function movePic2(e) {
        if(e.id == 0){
            setShift(shift0)
            console.log(shift);
        }
        if(e.id == 1){
            setShift(shift1)
            console.log(shift);
        }
        if(e.id == 2){
            setShift(shift2)
            console.log(shift);
        }
    }

    function movePic(e) {
        let shift = e.id * 100
        console.log(shift);
        const arrImg = e.parentElement.parentElement.children[0].children;
        const btnArr = e.parentElement.children
        let newImgArr = [...arrImg];
        const newBtnArr = [...btnArr]
        newBtnArr.forEach((el) => {
            if(el.id === e.id) {
                el.className = "button--active"
            } else {
                el.className = "button"
            }
        })
        newImgArr.forEach((elem) => {
            elem.style.transform = `translateX(-${shift}%)`;
        })
    }
    return (
        <>
        {images &&
            <div className="carousel_base_container">
                    <div className="carousel_list">
                        {images?.map((img) =>{
                        // if(index === 0){
                        //         return(
                        //             <img key={img} id="show" className="carousel_item show" src={img}/>
                        //         )
                        //     }else{
                        //         return(
                        //             <img key={img} className="carousel_item" src={img}/>
                        //         )
                        //     }
                           return <img key={img} className={`carousel_item ${shift}`} src={img}/>
                        }
                        )}
                    </div>
                    <div className="buttonsDiv">
                        {images?.map((item, index) => {
                            if(btn == index){
                                return(
                                    <button
                                    id={index}
                                    className="button--active"
                                    onClick={(e) => {
                                        setBtn(index)
                                        movePic2(e.target)}}
                                    key={item}
                                    ></button>
                                )
                            } else{
                                return(
                                    <button
                                    id={index}
                                    className="button"
                                    onClick={(e) => {
                                        setBtn(index)
                                        movePic2(e.target)}}
                                    key={item}
                                    ></button>
                                )
                            }
                            
                        })}
                    </div>
            </div>
        }
        </>
    );
}

export default Carousel;
