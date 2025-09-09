import EventTimerItem from "./EventTimerItem";

const EventTimersDashboard = () => {
    return (
        <div className="eventTimersDashboard_container">
            <div className="event_header_wrapper">
                <h4>⌛ Event Timers</h4>
            </div>
            <EventTimerItem event="Blood Castle" eventOffset={7200} eventDelay={-1770} />
            <EventTimerItem event="Devil Square" eventOffset={7200} eventDelay={-30} />
            <EventTimerItem event="Chaos Castle" eventOffset={7200} eventDelay={3630} />
            <EventTimerItem event="Illusion Temple" eventOffset={3600} eventDelay={2700} />
            <EventTimerItem event="Golden Dragons" eventOffset={14400} eventDelay={-300} />
            <EventTimerItem event="Red Dragons" eventOffset={10800} eventDelay={-4740} />
            <EventTimerItem event="Skeleton King" eventOffset={21600} eventDelay={-270} />
            <EventTimerItem event="White Wizard" eventOffset={7200} eventDelay={-5670} />
            <EventTimerItem event="Cursed Santa" eventOffset={10800} eventDelay={-2070} />
            <EventTimerItem event="CryWolf Event" eventOffset={86400} eventDelay={-65670} />
            <EventTimerItem event="Loren Event" eventOffset={86400} eventDelay={-68400} />
        </div>
    );
}

export default EventTimersDashboard;
