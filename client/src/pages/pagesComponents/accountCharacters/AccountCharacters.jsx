import { useEffect } from "react";
import { useFetchAccountCharQuery } from "../../../services/userApi";
import UserCharCard from "./UserCharCard";
import Spinner from "../../../components/Spinner";

const AccountCharacters = () => {
    const {data: characters, error, isLoading, isSuccess, isError} = useFetchAccountCharQuery()
    useEffect(() => {
        if(isSuccess){
            console.log(characters);
        }
    },[isSuccess])
    return (
        <>
        {isLoading ? 
            <Spinner />
            :
        <div  className="acc_characters_container">
            {isSuccess && (characters.length ? characters?.map((char) => 
                <UserCharCard 
                    key={char.cName}
                    cStatus={char.online} 
                    cName={char.cName}
                    cClass={char.cClass}
                    cLevel={char.cLevel}
                    mLevel={char.mLevel}
                    cReset={char.cReset}
                    cStr={char.cStr}
                    cAgi={char.cAgi}
                    cVit={char.cVit}
                    cEne={char.cEne}
                    cCmd={char.cCmd}
                    cGrandReset={char.cGrandReset}
                    mapNumber={char.mapNumber}
                    cZen={char.cZen}
                />
            )
            :
            <div className="no_characters_div">
                <h3>No Characters</h3>
            </div>
            )}
        </div>
        }
        </>
    );
}

export default AccountCharacters;
