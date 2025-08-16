import Online from './modals/Online';
import TopPlayers from './modals/TopPlayers';

const Aside = () => {
    return (
        <aside className='right_sidebar_container'>
            <Online />
            <TopPlayers />
            {/* <div className="aside_container_2">2</div>
            <div className="aside_container_3">3</div> */}
        </aside>
    );
}

export default Aside;
