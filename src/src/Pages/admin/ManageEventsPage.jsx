import React from 'react'
import { db } from "../../firebase.config";
import { query, collection, orderBy, limit } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { format } from 'date-fns';
import EventTitleModal from './EventModal';
import { useState } from 'react';

function ManageEventsPage() {
    const [value, loading, error] = useCollection(query(collection(db, 'events'), orderBy('eventDate', 'desc'), limit(3)));
    const [showEventModal, setShowEventModal] = useState(false);

    return (
        <>
            <div className="container mt-4">
                <div class="d-flex justify-content-between">
                    <h2 class="mb-1">Manage events</h2>
                    <div>
                        <button onClick={() => setShowEventModal(true)} className="btn btn-primary mb-3"> Add </button>
                    </div>
                </div>
                <table class="table table-bordered">
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
                                <tr>
                                    <th scope="row">{format(data?.eventDate.toDate(), 'dd-MM-yyyy')}</th>
                                    <td>{data?.title}</td>
                                    <td>{data?.eventType}</td>
                                    <td>{data.organizer}</td>
                                    <td>
                                        <div className="hstack gap-2">
                                            <button type="button" class="btn btn-sm btn-dark"><i class="bi bi-file-earmark-richtext"></i></button>
                                            <button type="button" class="btn btn-sm btn-success"><i class="bi bi-pencil"></i></button>
                                            <button type="button" class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
            {showEventModal && <EventTitleModal show={showEventModal} onClose={() => setShowEventModal(false)} />}
        </>
    )
}

export default ManageEventsPage