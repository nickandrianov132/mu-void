import { useState } from "react";
import { ancSets } from "../../../../../../utils/ancientSets";
import SetItemsCard from "./SetItemsCard";
import SetItemsNavPanel from "./SetItemsNavPanel";


const SetItemsInfo = () => {
    const [sets, setSets] = useState(ancSets.filter(s => s.cat === "dk"));

    return (
        <div className="guide_sets_info_container">
            <h1 className="sets_info_header">Ancient Sets Info:</h1>
            <SetItemsNavPanel setCategory={setSets}/>
            <div className="set_items_container">
                {sets.map((set) => (
                    <SetItemsCard
                        key={set.name}
                        title={set.name}
                        options={set.full}
                        images={set.img}
                    />
                ))}
            </div>

        </div>
    );
}

export default SetItemsInfo;
