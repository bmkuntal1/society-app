import { Button, Modal, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Label } from 'reactstrap';

function EventTitleModal({ show, onClose, id }) {
    //useForm Hook
    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = () => {

        // Close the modal
        onClose()
    };

    return (
        <>
            <Modal show={show} onHide={onClose}>
                <Modal.Header className="border-0" closeButton>
                    <Modal.Title>{id ? 'Edit' : 'Add'} Event</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body className="py-1">
                        <Form.Group controlId="eventDate"  className="mb-2">
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter event date" {...register("date", { required: true })} className={errors.date && 'is-invalid'} />
                            {errors.date && <small className="text-danger">This field is required</small>}
                        </Form.Group>

                        <Form.Group controlId="eventType" className="mb-2">
                            <Form.Label>Event Type</Form.Label>
                            <Form.Select aria-label="Default select example" {...register("eventType", { required: true })} className={errors.eventType && 'is-invalid'}>
                                <option value="">Select Event Type</option>
                                <option value="Workshop">Activity</option>
                                <option value="Webinar">Meeting</option>
                            </Form.Select>
                            {errors.eventType && <small className="text-danger">This field is required</small>}
                        </Form.Group>

                        <Form.Group controlId="eventTitle"  className="mb-2">
                            <Form.Label>Event Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter event title" {...register("title", { required: true, maxLength: 30 })} className={errors.title && 'is-invalid'} />
                            {errors.title && <small className="text-danger">This field is required</small>}
                            {errors.title && errors.title.type === 'maxLength' && <small className="text-danger">Max length exceeded</small>}
                        </Form.Group>

                        <Form.Group controlId="eventDescription"  className="mb-2">
                            <Form.Label>Event Description</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Enter event description" {...register("description", { required: true, maxLength: 100 })} className={errors.description && 'is-invalid'} />
                            {errors.description && <small className="text-danger">This field is required</small>}
                            {errors.description && errors.description.type === 'maxLength' && <small className="text-danger">Max length exceeded</small>}
                        </Form.Group>

                        <Form.Group controlId="eventOrganizer"  className="mb-2">
                            <Form.Label>Event Organizer</Form.Label>
                            <Form.Control type="text" placeholder="Enter event organizer" {...register("organizer", { required: true, maxLength:30 })} className={errors.organizer && 'is-invalid'} />
                            {errors.organizer && <small className="text-danger">This field is required</small>}
                            {errors.organizer && errors.organizer.type === 'maxLength' && <small className="text-danger">Max length exceeded</small>}
                        </Form.Group>

                        <Form.Group controlId="eventLocation"  className="mb-2">
                            <Form.Label>Event Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter event location" {...register("location", { required: true, maxLength: 30 })} className={errors.location && 'is-invalid'} />
                            {errors.location && <small className="text-danger">This field is required</small>}
                            {errors.location && errors.location.type === 'maxLength' && <small className="text-danger">Max length exceeded</small>}
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