import { Button, Modal, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { db } from '../../firebase.config';
import { doc, getDoc, addDoc, updateDoc, collection, Timestamp } from 'firebase/firestore';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function EventTitleModal({ show, onClose, id }) {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm({ values: { date: new Date().toISOString().slice(0, -8) } });

    const onSubmit = (data) => {
        data.eventDate = Timestamp.fromDate(new Date(data.date));
        data.active = data.active ? true : false;
        delete data.date;
        if (id) {
            updateDoc(doc(db, 'events', id), data).then((result) => {
                console.log(result);
                onClose();
            }).catch((error) => {
                console.log(error);
            });
        }
        else {
            addDoc(collection(db, 'events'), data).then((result) => {
                console.log(result);
                onClose();
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    useEffect(() => {
        if (id) {
            getDoc(doc(db, 'events', id)).then((result) => {
                const docData = result.data();
                setValue('date', docData.eventDate.toDate().toISOString().slice(0, -8));
                setValue('eventType', docData.eventType);
                setValue('title', docData.title);
                setValue('description', docData.description);
                setValue('organizer', docData.organizer);
                setValue('location', docData.location);
                setValue('active', docData.active);
            }).catch((error) => {
                console.log(error);
            });
        }
    }, [id]);

    return (
        <>
            <Modal show={show} onHide={onClose}>
                <Modal.Header className="border-0" closeButton>
                    <Modal.Title>{id ? 'Edit' : 'Add'} Event</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body className="py-1">
                        <Form.Group controlId="eventDate" className="mb-2">
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type="datetime-local" placeholder="Enter event date" {...register("date", { required: true })} className={errors.date && 'is-invalid'} />
                            {errors.date && <small className="text-danger">This field is required</small>}
                        </Form.Group>

                        <Form.Group controlId="eventType" className="mb-2">
                            <Form.Label>Event Type</Form.Label>
                            <Form.Select aria-label="Default select example" {...register("eventType", { required: true })} className={errors.eventType && 'is-invalid'}>
                                <option value="">Select Event Type</option>
                                <option value="activity">Activity</option>
                                <option value="announcement">Announcement</option>
                                <option value="meeting">Meeting</option>
                            </Form.Select>
                            {errors.eventType && <small className="text-danger">This field is required</small>}
                        </Form.Group>

                        <Form.Group controlId="eventTitle" className="mb-2">
                            <Form.Label>Event Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter event title" {...register("title", { required: true, maxLength: 100 })} className={errors.title && 'is-invalid'} />
                            {errors.title && <small className="text-danger">This field is required</small>}
                            {errors.title && errors.title.type === 'maxLength' && <small className="text-danger">Max length exceeded</small>}
                        </Form.Group>

                        <Form.Group controlId="eventDescription" className="mb-2">
                            <Form.Label>Event Description</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Enter event description" {...register("description", { required: true, maxLength: 500 })} className={errors.description && 'is-invalid'} />
                            {errors.description && <small className="text-danger">This field is required</small>}
                            {errors.description && errors.description.type === 'maxLength' && <small className="text-danger">Max length exceeded</small>}
                        </Form.Group>

                        <Form.Group controlId="eventOrganizer" className="mb-2">
                            <Form.Label>Event Organizer</Form.Label>
                            <Form.Control type="text" placeholder="Enter event organizer" {...register("organizer", { required: true, maxLength: 30 })} className={errors.organizer && 'is-invalid'} />
                            {errors.organizer && <small className="text-danger">This field is required</small>}
                            {errors.organizer && errors.organizer.type === 'maxLength' && <small className="text-danger">Max length exceeded</small>}
                        </Form.Group>

                        <Form.Group controlId="eventLocation" className="mb-2">
                            <Form.Label>Event Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter event location" {...register("location", { required: true, maxLength: 30 })} className={errors.location && 'is-invalid'} />
                            {errors.location && <small className="text-danger">This field is required</small>}
                            {errors.location && errors.location.type === 'maxLength' && <small className="text-danger">Max length exceeded</small>}
                        </Form.Group>

                        <Form.Group controlId="eventActive" className="mb-2">
                            <Form.Check type="checkbox" label="Active" {...register("active")} />
                        </Form.Group>
                        
                    </Modal.Body>
                    <Modal.Footer className="border-0" >
                        <Button variant="secondary" type="button" onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default EventTitleModal;