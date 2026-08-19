import { useState } from "react";
import { ancSets } from "../../../../../../utils/ancientSets";


const SetItemsNavPanel = ({setCategory}) => {
    const [cat, setCat] = useState('dk')
    return (
            <div className="set_items_nav">
                <button 
                className={cat === "dk" ? "search_item active" : "search_item"}
                onClick={() => {
                    setCategory(ancSets.filter(s => s.cat === "dk"))
                    setCat("dk")
                }}
                >DK</button>
                <button 
                    className={cat === "dw" ? "search_item active" : "search_item"}
                    onClick={() => {
                        setCategory(ancSets.filter(s => s.cat === "dw"))
                        setCat("dw")
                    }}
                >DW</button>
                <button 
                    className={cat === "elf" ? "search_item active" : "search_item"}
                    onClick={() => {
                        setCategory(ancSets.filter(s => s.cat === "elf"))
                        setCat("elf")
                    }}
                >Elf</button>
                <button 
                    className={cat === "mg" ? "search_item active" : "search_item"}
                    onClick={() => {
                        setCategory(ancSets.filter(s => s.cat === "mg"))
                        setCat("mg")
                    }}
                >MG</button>
                <button 
                    className={cat === "dl" ? "search_item active" : "search_item"}
                    onClick={() => {
                        setCategory(ancSets.filter(s => s.cat === "dl"))
                        setCat("dl")
                    }}
                >DL</button>
                <button 
                    className={cat === "sum" ? "search_item active" : "search_item"}
                    onClick={() => {
                        setCategory(ancSets.filter(s => s.cat === "sum"))
                        setCat("sum")
                    }}
                >Sum</button>
                <button 
                    className={cat === "rf" ? "search_item active" : "search_item"}
                    onClick={() => {
                        setCategory(ancSets.filter(s => s.cat === "rf"))
                        setCat("rf")
                    }}
                >RF</button>


            </div>
    );
}

export default SetItemsNavPanel;
