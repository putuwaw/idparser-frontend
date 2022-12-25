import React from "react";
import { Container, Row, Col, Card, Figure } from "react-bootstrap";
import robotside from "../images/robotside.png";
import reactlogo from "../images/react.png";
import pythonlogo from "../images/python.png";
import flasklogo from "../images/flask.png";
import bootstraplogo from "../images/bootstrap.png";
import putu from "../images/putu.png";
import kevin from "../images/kevin.png";
import ata from "../images/ata.png";
import yoga from "../images/yoga.png";
import github from "../images/github.png";

function About() {
  return (
    <Container fluid="lg" className="font-poppins box-border">
      <section
        id="selengkapnya"
        className="min-h-screen flex items-center justify-center flex-col"
      >
        <Row className="justify-center my-auto">
          <h1 className="mb-4 md:mb-0 text-center text-xl lg:text-3xl font-bold">
            Tentang <span className="text-blue-500">idParser</span>
          </h1>
          <Col
            md={{ span: 5, order: 1 }}
            xs={{ order: 2 }}
            className="justify-center my-auto"
          >
            <div className="h-full flex-row items-center justify-center justify-items-center">
              <p className="leading-normal lg:leading-loose">
                Aplikasi idParser berasal dari dua kata, yaitu id yang
                menandakan Indonesia, dan parser yang artinya parsing. Aplikasi
                ini dibuat dalam rangka memenuhi tugas akhir mata kuliah Teori
                Bahasa dan Otomata program studi Informatika tahun 2022.
              </p>
            </div>
          </Col>
          <Col
            md={{ span: 5, order: 2 }}
            xs={{ order: 1 }}
            className="justify-end my-auto mb-4 md:mb-0"
          >
            <div className="flex items-center justify-end lg:justify-end">
              <img
                src={robotside}
                alt="Hero"
                className="max-h-40 lg:max-h-80"
              />
            </div>
          </Col>
        </Row>
      </section>
      <section className="min-h-screen flex items-center justify-center flex-col">
        <Row className="justify-around my-auto space-y-4">
          <h1 className="lg:pb-10 text-center text-xl lg:text-3xl font-bold">
            Pengembang <span className="text-blue-500">idParser</span>
          </h1>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" className="max-h-60" src={putu} />
              <Card.Body>
                <Card.Title>Putu Widyantara</Card.Title>
                <Card.Text>NIM. 2108561005</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" className="max-h-60" src={ata} />
              <Card.Body>
                <Card.Title>Antonius Ata</Card.Title>
                <Card.Text>NIM. 2108561080</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" className="max-h-60" src={kevin} />
              <Card.Body>
                <Card.Title>Kevin Moses</Card.Title>
                <Card.Text>NIM. 2108561100</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" className="max-h-60" src={yoga} />
              <Card.Body>
                <Card.Title>Yoga Laksana</Card.Title>
                <Card.Text>NIM. 2108561120</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <section className="min-h-screen flex items-center justify-center flex-col">
        <Row className="justify-center items-center my-auto mx-auto space-y-4">
          <h1 className="lg:pb-10 pt-6 text-center text-xl lg:text-3xl font-bold">
            Teknologi <span className="text-blue-500">idParser</span>
          </h1>
          <Col
            md={3}
            className="flex justify-center items-center mx-auto justify-items-center"
          >
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={reactlogo}
                className="rounded-full border-2 border-slate-50 shadow-lg mx-auto"
              />
            </Figure>
          </Col>
          <Col
            md={3}
            className="flex justify-center items-center mx-auto justify-items-center"
          >
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={bootstraplogo}
                className="rounded-full border-2 border-slate-50 shadow-lg"
              />
            </Figure>
          </Col>
          <Col
            md={3}
            className="flex justify-center items-center mx-auto justify-items-center"
          >
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={flasklogo}
                className="rounded-full border-2 border-slate-50 shadow-lg"
              />
            </Figure>
          </Col>
          <Col
            md={3}
            className="flex justify-center items-center mx-auto justify-items-center"
          >
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={pythonlogo}
                className="rounded-full border-2 border-slate-50 shadow-lg"
              />
            </Figure>
          </Col>
        </Row>
      </section>
      <section className="min-h-screen flex items-center justify-center flex-col">
        <Row className="justify-center my-auto">
          <h1 className="mb-4 md:pb-6 text-center text-xl lg:text-3xl font-bold">
            Dokumentasi <span className="text-blue-500">idParser</span>
          </h1>
          <Col
            md={{ span: 5, order: 1 }}
            xs={{ order: 2 }}
            className="justify-center my-auto"
          >
            <div className="h-full flex-row items-center justify-center justify-items-center">
              <p className="leading-normal lg:leading-loose">
                Seluruh source code dari idParser tersedia di Github dan dapat
                dilihat pada link berikut:
              </p>
              <a
                className="no-underline block"
                href="https://github.com/putuwaw/idparser-frontend"
              >
                Source Code Frontend
              </a>
              <a
                className="no-underline block"
                href="https://github.com/putuwaw/idparser-backend"
              >
                Source Code Backend
              </a>
              <a
                className="no-underline block"
                href="https://github.com/putuwaw/idparser-backend/tree/main/docs"
              >
                Laporan
              </a>
            </div>
          </Col>
          <Col
            md={{ span: 5, order: 2 }}
            xs={{ order: 1 }}
            className="justify-center my-auto mb-4 md:mb-0"
          >
            <div className="flex items-center justify-center lg:justify-center">
              <img src={github} alt="Hero" className="max-h-30 lg:max-h-40" />
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}
export default About;
