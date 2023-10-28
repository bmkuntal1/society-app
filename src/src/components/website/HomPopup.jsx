import { Button, Modal } from "react-bootstrap";
import banner from "../../assets/images/banner1.png";
import { useState } from "react";

function HomPopup() {
    const [show, setShow] = useState(true);
    return (
        <Modal show={show} size="auto" centered={true} className="home-popup p-0">
            <Modal.Body className="p-0">
                <img src={banner} alt="Background Image" className="img-fluid" />
                {/* ovelay close button */}
                <Button onClick={() => setShow(false)} variant="transparent" className="position-absolute top-0 end-0 m-3">
                    <i className="bi bi-x-lg"></i>
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export default HomPopup