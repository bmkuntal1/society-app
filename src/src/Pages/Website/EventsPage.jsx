
import { db } from "../../firebase.config";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where, or, orderBy, limit } from "firebase/firestore";
import EventCard from "./components/EventCard";
import { useSearchParams } from "react-router-dom";

function EventsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const eventType = searchParams.get('q') == 'meeting' ? 'Meeting' : searchParams.get('q') == 'activity' ? 'Activity' : 'All';
    const query1 = query(collection(db, 'events'), where('active', '==', true));
    const [value, loading, error] = useCollection(query1, searchParams.get('q') && where('eventType', '==', eventType), orderBy('eventDate', 'desc'), limit(10));

    return (
        <>
            {value &&
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Events</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            {error && <span className="text-center text-danger p-2">Error: {error}</span>}
                            {loading ? <span className="text-center p-2">Loading...</span> :
                                <section>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <h2 className="text-primary fw-bolder mb-0">{eventType == 'Meeting' ? 'Meetings' : eventType == 'Activity' ? 'Activities' : 'All'}</h2>

                                        <div>
                                            {/*pill button smal for tags  */}
                                            <button type="button" onClick={() => setSearchParams({})} className="btn btn-outline-primary btn-sm me-2">All</button>
                                            <button type="button" onClick={() => setSearchParams({ q: 'meeting' })} className="btn btn-outline-primary btn-sm me-2">Meetings</button>
                                            <button type="button" onClick={() => setSearchParams({ q: 'activity' })} className="btn btn-outline-primary btn-sm me-2">Activities</button>
                                        </div>
                                    </div>
                                    {value && value.docs && value.docs.map((doc, index) => <EventCard data={doc.data()} key={index} />)}
                                </section>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default EventsPage