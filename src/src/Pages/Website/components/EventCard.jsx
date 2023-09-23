import { format } from 'date-fns'
import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '../../../firebase.config'
import { Button } from 'react-bootstrap';

function EventCard({ data }) {
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
        <div className="card shadow border-0 rounded-4 mb-5">
            <div className="card-body p-4">
                <div className="row align-items-start gx-5">
                    <div className="col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
                        <div className="text-gradient text-center p-2 fs-20">Meeting</div>
                        <div className="card date-card shadow border-0 rounded-4 text-center bg-dark text-light">
                            <div className="card-body">
                                <h1 className="display-4 p-0 m-0 fw-bold">{format(data?.eventDate.toDate(), 'dd')}</h1>
                                <p className="lead p-0 m-0">{format(data?.eventDate.toDate(), 'MMM')}, {format(data?.eventDate.toDate(), 'yyyy')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <h3 className="lead text-center text-lg-start mb-0">{data?.title}</h3>
                        <p className="text-body text-muted text-center text-lg-start">By {data.organizer}, at {data?.location}</p>
                        <p className="mt-1">
                            {data?.description}
                        </p>
                        {/* add small download buttons at end for notice and MoM */}
                        <div className="mt-2 text-end">
                            {data?.documents && data.documents.map((doc, index) => {
                                return (
                                    <button className="btn btn-pill text-gradient px-4" key={index} onClick={()=>downloadFile(doc.url)}>{doc.name} <i className="bi bi-download"></i></button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard