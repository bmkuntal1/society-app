import React from 'react'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useForm } from "react-hook-form";

function ContactPage() {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <Container className="px-5 my-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Contact Us</span></h1>
            </div>
            <Row className="gx-5 justify-content-center">
                <Col lg="11" xl="9" xxl="8">
                    <Card className="shadow border-0 rounded-4 mb-5">
                        <CardBody className="p-5">
                            <Form onSubmit={handleSubmit(onSubmit)} className="mb-5 mb-lg-0">
                                <Row>
                                    <Col xs="12" md="6">
                                        <FormGroup className="mb-4">
                                            <Label for="contactName">Full Name</Label>
                                            <Input type="text" id="contactName" placeholder="Full Name" {...register('name', { required: true, minLength: 5, maxLength: 40 })} className={errors.name && 'is-invalid'} />
                                            {errors.name && errors.name.type === "required" && <span className="text-danger">This field is required</span>}
                                            {errors.name && errors.name.type === 'minLength' && <span className="text-danger">Min length exceeded</span>}
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <FormGroup className="mb-4">
                                            <Label for="contactEmail">Email</Label>
                                            <Input type="email" id="contactEmail" placeholder="Email" {...register('email', { required: true, pattern: { value: /\S+@\S+\.\S+/, message: "Please enter a valid email address" } })} className={errors.email && 'is-invalid'} />
                                            {errors.email && errors.email.type === "required" && <span className="text-danger">This field is required</span>}
                                            {errors.email && errors.email.type === 'pattern' && <span className="text-danger">{errors.email.message}</span>}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup className="mb-4">
                                    <Label for="contactSubject">Subject</Label>
                                    <Input type="text" id="contactSubject" placeholder="Subject" {...register('subject', { required: true, minLength: 5, maxLength: 40 })} className={errors.subject && 'is-invalid'} />
                                    {errors.subject && errors.subject.type === "required" && <span className="text-danger">This field is required</span>}
                                    {errors.subject && errors.subject.type === 'minLength' && <span className="text-danger">Min length exceeded</span>}
                                </FormGroup>
                                <FormGroup className="mb-4">
                                    <Label for="contactMessage">Message</Label>
                                    <Input type="textarea" id="contactMessage" placeholder="Message" {...register('message', { required: true, minLength: 5, maxLength: 40 })} className={errors.message && 'is-invalid'} />
                                    {errors.message && errors.message.type === "required" && <span className="text-danger">This field is required</span>}
                                    {errors.message && errors.message.type === 'minLength' && <span className="text-danger">Min length exceeded</span>}
                                </FormGroup>
                                <div className="d-flex justify-content-end gap-2">

                                    <Button color="info text-light" className="btn-lg px-5" type="button">Reset</Button>
                                    <Button color="primary" className="btn-lg px-5" type="submit">Submit</Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage