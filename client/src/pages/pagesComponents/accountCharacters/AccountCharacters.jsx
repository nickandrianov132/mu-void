import { useEffect } from "react";
import { useFetchAccountCharQuery } from "../../../services/userApi";
import UserCharCard from "./UserCharCard";
import Spinner from "../../../components/Spinner";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { HOME_ROUTE } from "../../../utils/constants";

const AccountCharacters = () => {
    const {data: characters, error, isLoading, isSuccess, isError} = useFetchAccountCharQuery()
    const {accessToken} = useSelector(state => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if(isSuccess){
            console.log(characters);
        }
        if(!accessToken) {
            navigate(HOME_ROUTE)
        }
    },[isSuccess, accessToken])
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
