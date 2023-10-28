
import { db } from "../../firebase.config";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where, orderBy, limit } from "firebase/firestore";
import EventCard from "../../components/website/EventCard";
import { useSearchParams } from "react-router-dom";

function EventsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const eventType = searchParams.get('q') == 'meeting' ? 'Meetings' : searchParams.get('q') == 'activity' ? 'Activities' : searchParams.get('q') == 'announcement' ? 'Announcements' : 'All';
    const eventQuery = () => {
        if (searchParams.get('q')) {
            return query(collection(db, 'events'), where('active', '==', true), where('eventType', '==', searchParams.get('q')), orderBy('eventDate', 'desc'), limit(10));
        }
        return query(collection(db, 'events'), where('active', '==', true), orderBy('eventDate', 'desc'), limit(10));

    }
    const [value, loading, error] = useCollection(eventQuery());

    return (
        <>
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Events</span></h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">


                        <section>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h2 className="text-primary fw-bolder mb-0">{eventType}</h2>

                                <div>
                                    {/*pill button smal for tags  */}
                                    <button type="button" onClick={() => setSearchParams({})} className="btn btn-outline-primary btn-sm me-2">All</button>
                                    <button type="button" onClick={() => setSearchParams({ q: 'announcement' })} className="btn btn-outline-primary btn-sm me-2">Announcements</button>
                                    <button type="button" onClick={() => setSearchParams({ q: 'activity' })} className="btn btn-outline-primary btn-sm me-2">Activities</button>
                                    <button type="button" onClick={() => setSearchParams({ q: 'meeting' })} className="btn btn-outline-primary btn-sm me-2">Meetings</button>
                                </div>
                            </div>
                            {loading ? <span className="text-center p-2">Loading...</span> :
                                error ? <span className="text-center p-2">Error: {error.message}</span> :
                                    value && value.docs.length > 0 ? value.docs.map((doc, index) => {{console.log(doc.data())}return <EventCard data={doc.data()} key={index}/>}) :
                                        <span className="text-center p-2">No events found</span>
                            }
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventsPage