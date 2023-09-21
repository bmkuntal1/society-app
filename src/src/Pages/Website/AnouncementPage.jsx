import AnouncementCard from "./components/AnouncementCard"


function AnouncementPage() {
    return (
        <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Anouncements</span></h1>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-11 col-xl-9 col-xxl-8">
                    <section>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h2 className="text-primary fw-bolder mb-0">Meetings</h2>
                            <div>
                                {/*pill button smal for tags  */}
                                <button type="button" className="btn btn-outline-primary btn-sm me-2">All</button>
                                <button type="button" className="btn btn-outline-primary btn-sm me-2">Meetings</button>
                                <button type="button" className="btn btn-outline-primary btn-sm me-2">Activities</button>
                            </div>
                        </div>
                       <AnouncementCard/>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default AnouncementPage