import React from 'react'

function ContactPage() {
    return (
        <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Contact Us</span></h1>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-11 col-xl-9 col-xxl-8">
                    <div className="card shadow border-0 rounded-4 mb-5">
                        <div className="card-body p-5">
                            <form className="mb-5 mb-lg-0">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-4">
                                            <label className="form-label" htmlFor="contactName">Full Name</label>
                                            <input className="form-control" id="contactName" type="text" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-4">
                                            <label className="form-label" htmlFor="contactEmail">Email</label>
                                            <input className="form-control" id="contactEmail" type="email" placeholder="
                                        Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <label className="form-label" htmlFor="contactSubject">Subject</label>
                                    <input className="form-control" id="contactSubject" type="text" placeholder="Subject" />
                                </div>
                                <div className="form-group mb-4">
                                    <label className="form-label" htmlFor="contactMessage">Message</label>
                                    <textarea className="form-control" id="contactMessage" rows="5" placeholder="Tell us a few details and how can we help"></textarea>
                                </div>
                                <div className="form-group mb-0">
                                    <button className="btn btn-primary btn-lg px-5" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage