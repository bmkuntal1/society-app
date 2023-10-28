import { db } from "../../firebase.config";
import { query, collection, orderBy, limit, doc, deleteDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { format } from 'date-fns';
import EventTitleModal from './EventModal';
import { useState } from 'react';
import DocumentModal from './DocumentModal';


function ManageEventsPage() {
    const [value, loading, error] = useCollection(query(collection(db, 'events'), orderBy('eventDate', 'desc'), limit(20)));
    const [showEventModal, setShowEventModal] = useState(false);
    const [showDocumentModal, setShowDocumentModal] = useState(false);
    const [id, setId] = useState(null);

    const handleShowEvent = (id) => {
        setId(id);
        setShowEventModal(true);
    }

    const handleDelete = (id) => {
        deleteDoc(doc(db, 'events', id)).then((result) => {
            console.log(result);
        }).catch((error) => { 
            console.log(error);
        });
    }

    const handleShowDocuments = (id) => {
        setId(id);
        setShowDocumentModal(true);
    }

    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-between">
                    <h2 className="mb-1">Manage events</h2>
                    <div>
                        <button onClick={() => handleShowEvent()} className="btn btn-primary mb-3"> Add </button>
                    </div>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Event Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Organizer</th>
                            <th scope="col" width="60">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value && value.docs && value.docs.map((doc, index) => {
                            const data = doc.data();
                            return (
                                <tr key={index}>
                                    <th scope="row">{format(data?.eventDate.toDate(), 'dd-MM-yyyy')}</th>
                                    <td>{data?.title}</td>
                                    <td>{data?.eventType}</td>
                                    <td>{data.organizer}</td>
                                    <td>
                                        <div className="hstack gap-2">
                                            <button type="button" onClick={() => handleShowDocuments(doc.id)} className="btn btn-sm btn-dark"><i className="bi bi-file-earmark-richtext"></i></button>
                                            <button type="button" onClick={() => handleShowEvent(doc.id)} className="btn btn-sm btn-success"><i className="bi bi-pencil"></i></button>
                                            <button type="button" onClick={() => handleDelete(doc.id)} className="btn btn-sm btn-danger"><i className="bi bi-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
            {showEventModal && <EventTitleModal show={showEventModal} onClose={() => setShowEventModal(false)} id={id} />}
            {showDocumentModal && <DocumentModal show={showDocumentModal} onClose={() => setShowDocumentModal(false)} id={id} />}
        </>
    )
}

export default ManageEventsPage