import { useEffect, useState } from "react";
import { useFetchServerTimeQuery } from "../../../services/serverTimeApi";
import EventTimerItem from "./EventTimerItem";
const eventsList = [
    {id: "bloodCastle", name: "Blood Castle", offset: 7200, delay: -1800},
    {id: "devilSquare", name: "Devil Square", offset: 7200, delay: 0},
    {id: "chaosCastle", name: "Chaos Castle", offset: 7200, delay: 3600},
    {id: "illusionTemple", name: "Illusion Temple", offset: 3600, delay: 2700},
    {id: "goldenInvasion", name: "Golden Invasion", offset: 14400, delay: 0},
    {id: "redDragons", name: "Red Dragons", offset: 10800, delay: -4800},
    {id: "skeletonKing", name: "Skeleton King", offset: 10800, delay: 0},
    {id: "whiteWizard", name: "White Wizrd", offset: 7200, delay: -5400},
    {id: "cursedSanta", name: "Cursed Santa", offset: 10800, delay: -1800},
    {id: "cryWolf", name: "Cry Wolf Event", offset: 86400, delay: -65400},
    {id: "lorenDeep1st", name: "Loren Event 1st", offset: 86400, delay: -64800},
    {id: "lorenDeep2nd", name: "Loren Event 2nd", offset: 86400, delay: -82800},
]
const EventTimersDashboard = () => {
    const {data, isSuccess, isError, isLoading} = useFetchServerTimeQuery()
    const [globalOffset, setGlobalOffset] = useState(null)
    console.log(`globalOffset: ${globalOffset}`);
    useEffect(() => {
        if (isSuccess && data) {
            const localTime = new Date()
            const serverTime = Date.parse(data)
            setGlobalOffset(Date.parse(localTime) - serverTime)
        }
    }, [data, isSuccess])

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Server error</div>
    if (globalOffset === null) return null

    return (
        <div className="eventTimersDashboard_container">
            <div className="event_header_wrapper">
                <h4>⌛ Event Timers</h4>
            </div>
            <>
            {eventsList.map((e) => (
                <EventTimerItem key={e.id} event={e.name} eventOffset={e.offset} eventDelay={e.delay} timeOffset={globalOffset} />
            ))}
            </>

            {/* <EventTimerItem event="Blood Castle"  eventOffset={7200} eventDelay={-1800} />
            <EventTimerItem event="Devil Square"  eventOffset={7200} eventDelay={0} />
            <EventTimerItem event="Chaos Castle"  eventOffset={7200} eventDelay={3600} />
            <EventTimerItem event="Illusion Temple"  eventOffset={3600} eventDelay={2700} />
            <EventTimerItem event="Golden Dragons"  eventOffset={14400} eventDelay={0} />
            <EventTimerItem event="Red Dragons"  eventOffset={10800} eventDelay={-4800} />
            <EventTimerItem event="Skeleton King"  eventOffset={21600} eventDelay={0} />
            <EventTimerItem event="White Wizard"  eventOffset={7200} eventDelay={-5400} />
            <EventTimerItem event="Cursed Santa"  eventOffset={10800} eventDelay={-1800} />
            <EventTimerItem event="CryWolf Event"  eventOffset={86400} eventDelay={-65400} />
            <EventTimerItem event="Loren Event 1st"  eventOffset={86400} eventDelay={-64800} />
            <EventTimerItem event="Loren Event 2nd"  eventOffset={86400} eventDelay={-82800} /> */}
        </div>
    );
}

export default EventTimersDashboard;
