
const EventsBody = ({sec1desc1, sec1desc2, sec2desc1, sec2desc2, sec1img1, sec1img2, thead1, tbody1, sec3desc1, thead2, tbody2, sec4desc1, thead3, tbody3}) => {
    return (
        <div className="events_body_container">
            <div className="body_description">
                <p>{sec1desc1}</p>
            </div>
            <div className="body_img1">
                <img src={sec1img1}/>
            </div>
            {sec1desc2 &&
                <div className="body_description">
                    <p>{sec1desc2}</p>
                </div>
            }
            {sec1img2 &&
            <div className="body_img2">
                <img src={sec1img2}/>
            </div>
            }
            <div className="body_description">
                <p>{sec2desc1}</p>
            </div>
            {sec2desc2 &&
                <div className="body_description">
                    <p>{sec2desc2}</p>
                </div>
            }
            <div className="body_description">
                <table>
                    <thead>
                        <tr>
                            {thead1?.map((e) =>
                                <th className={e.className} key={e.title}>{e.title}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {tbody1?.map((e) =>
                            <tr key={e.num}>
                                <td>{e.num}</td>
                                <td>{e.regularLvL}</td>
                                <td>{e.mgdlrfLvl}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="body_description">
                <p>{sec3desc1}</p>
            </div>
            <div className="body_description">
                <table>
                    <thead>
                        <tr>
                            {thead2?.map((e) =>
                                <th className={e.className} key={e.title}>{e.title}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {tbody2?.map((e) =>
                            <tr key={e.num}>
                                <td>{e.num}</td>
                                <td className={e.className}>{e.monster1}</td>
                                <td className={e.className}>{e.monster2}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {sec4desc1 &&
                <div className="body_description">
                    <p>{sec4desc1}</p>
                </div>
            }
            {thead3 &&
                <div className="body_description">
                    <table>
                        <thead>
                            <tr>
                                {thead3?.map((e) =>
                                    <th className={e.className} key={e.title}>{e.title}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {tbody3?.map((e) =>
                                <tr key={e.num}>
                                    <td>{e.num}</td>
                                    <td className={e.className}>{e.first}</td>
                                    <td className={e.className}>{e.second}</td>
                                    <td className={e.className}>{e.third}</td>
                                    <td className={e.className}>{e.fourth}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default EventsBody;
