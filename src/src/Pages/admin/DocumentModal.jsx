import { useUploadFile } from 'react-firebase-hooks/storage';
import { Modal, Button, Form } from 'react-bootstrap';
import { db, storage } from '../../firebase.config';
import { useForm } from "react-hook-form";
import { ref, getDownloadURL, deleteObject } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';


function DocumentModal({ show, onClose, id }) {
    const [event, eventLoading, evenError] = useDocumentData(doc(db, 'events', id), { snapshotListenOptions: { includeMetadataChanges: true } });
    const [uploadFile, uploading, snapshot, error] = useUploadFile();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        const fileRef = ref(storage, `docs/${data.documentUpload[0].name}`);
        await uploadFile(fileRef, data.documentUpload[0]).then((result) => {
            console.log(result);
            updateDoc(doc(db, 'events', id), {
                documents: [...event.documents||[], { name: data.title, url: result.ref.fullPath }]
            }).then((result) => {
                reset();
                console.log(result);
            }
            ).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    const handleDelete = (file) => {
        const fileRef = ref(storage, file);
        deleteObject(fileRef).then((result) => {
            console.log(result);
            //delete document from firestore
            const index = event.documents.findIndex((doc) => doc.url === file);
            updateDoc(doc(db, 'events', id), {
                documents: [...event.documents.slice(0, index), ...event.documents.slice(index + 1)]
            }).then((result) => {
                console.log(result);
            }
            ).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    const downloadFile = async (file) => {
        const fileRef = ref(storage, file);
        await getDownloadURL(fileRef).then((result) => {
            console.log(result);
            window.open(result);
        }
        ).catch((error) => {
            console.log(error);          
        });
    }
    
    return (
        <>
            <Modal show={show} onHide={onClose}>
                <Modal.Header className="border-0" closeButton>
                    <Modal.Title>Event Documents</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-1">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="documentTitle" className="mb-2">
                            <Form.Label>Document Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter document title" {...register("title", { required: true, maxLength: 30 })} className={errors.title && 'is-invalid'} />
                            {errors.title && <small className="text-danger">This field is required</small>}
                            {errors.title && errors.title.type === 'maxLength' && <small className="text-danger">Max length exceeded</small>}
                        </Form.Group>

                        <Form.Group controlId="documentUpload" className="mb-3">
                            <Form.Label>Choose a Document:</Form.Label>
                            <Form.Control type="file" placeholder="Enter document title" {...register("documentUpload", { required: true })} className={errors.documentUpload && 'is-invalid'} />
                            {errors.documentUpload && <small className="text-danger">This field is required</small>}
                        </Form.Group>

                        <div className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">Upload</Button>
                        </div>
                    </Form>
                    <div>
                        <h5>Uploaded Documents</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>File Name</th>
                                    <th>View</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!eventLoading && event && event.documents && event.documents.map((doc, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{doc.name}</td>
                                            <td>{doc.url}</td>
                                            <td><a href={doc.url} target='_blank' type="button" className="btn btn-sm btn-success"><i className="bi bi-eye"></i></a></td>
                                            <td><button onClick={() => downloadFile(doc.url)} type="button" className="btn btn-sm btn-success"><i className="bi bi-download"></i></button></td>
                                            <td><button onClick={() => handleDelete(doc.url)} type="button" className="btn btn-sm btn-danger"><i className="bi bi-trash"></i></button></td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
                <Modal.Footer className="border-0" >
                    <Button variant="secondary" type="button" onClick={onClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DocumentModal