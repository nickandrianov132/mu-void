import { useEffect } from "react";
import { useFetchAccountCharQuery } from "../../../services/userApi";
import GrandResetCharItem from "./GrandResetCharItem";
import Spinner from '../../../components/Spinner';


const GrandReset = () => {
    const {data: characters, error, isLoading, isSuccess, isError} = useFetchAccountCharQuery()
    useEffect(() => {
        if(isSuccess){
            console.log(characters);
        }
    },[isSuccess])
    return (
        <>{isLoading ? <Spinner />
            :
            <div className="grand_reset_container">
                {isSuccess && characters.length ? characters?.map((c)=> 
                    <GrandResetCharItem 
                        key={c.cName} 
                        cName={c.cName} 
                        cClass={c.cClass}
                        cLevel={c.cLevel}
                        cReset={c.cReset}
                        cGrandReset={c.cGrandReset}
                        cZen={c.cZen}
                        cOnline={c.online}
                    />
                )
                :
                    <div className="no_characters_div">
                        <h3>No Characters</h3>
                    </div>
                }
            </div>
        }
        </>
    );
}

export default GrandReset;
