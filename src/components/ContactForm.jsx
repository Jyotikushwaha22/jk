/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";

import leftImage from "../assets/images/home.jpg";
import image7 from "../assets/images/bg.jpg";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{ padding: "5% 0", marginTop: "3%", height: "100vh" }}
    >
      <Row>
        <Col xs={12} md={6} className="text-center">
          <img
            src={leftImage}
            alt="Left Image"
            style={{ width: "100%", height: "100%" }}
            className="img-fluid"
          />
        </Col>
        <Col xs={12} md={6}>
          <div
            style={{
              padding: "5% 0",
              textAlign: "center",
              background: `url(${image7})`, // Set image7 as the background
              backgroundSize: "cover", // Optional: Adjust background size as needed
            }}
          >
            <h1>Book your Dream Life.</h1>
            <div>
              We’d love to hear from you! Send us a message using the form
              opposite, or email us.
            </div>
          </div>

          <Form.Group controlId="formFirstName" className="mb-1">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              {...register("First name", { required: true, maxLength: 80 })}
              style={{ width: "80%", margin: "0", padding: "0.375rem" }}
            />
          </Form.Group>

          <Form.Group controlId="formLastName" className="mb-1">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              {...register("Last name", { required: true, maxLength: 100 })}
              style={{ width: "80%", margin: "0", padding: "0.375rem" }}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              {...register("Email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              style={{ width: "80%", margin: "0", padding: "0.375rem" }}
            />
          </Form.Group>

          <Form.Group controlId="formMobileNumber" className="mb-1">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Mobile number"
              {...register("Mobile number", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
              style={{ width: "80%", margin: "0", padding: "0.375rem" }}
            />
          </Form.Group>

          <Form.Group controlId="formComments" className="mb-1">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Comments"
              {...register("Comments", {})}
              style={{ width: "80%", margin: "0", padding: "0.375rem" }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-1">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
