import { db } from "../../../firebase.config";
import { query, collection, orderBy, limit } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import EventCard from "./EventCard";

function RecentEvents() {

    const [value, loading, error] = useCollection(query(collection(db, 'events'), orderBy('eventDate', 'desc'), limit(3)));

    return (
        <>
            {value &&
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Recent Events</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            {error && <span className="text-center text-danger p-2">Error: {error}</span>}
                            {loading ? <span className="text-center p-2">Loading...</span> :
                                <section>
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

export default RecentEvents