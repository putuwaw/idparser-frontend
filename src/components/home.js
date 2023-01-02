import React, { useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import hero from "../images/hero.png";
import robot from "../images/robotask.png";
import robotsleep from "../images/robotsleep.png";
import fullstack from "../images/fullstack.png";
import cyk from "../images/cyk.png";
import opensource from "../images/opensource.png";
import Aos from "aos";
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <Container fluid="lg" className="font-poppins">
      <div data-aos="fade-up" className="mb-6 mt-2">
        <Row className="items-center min-h-screen flex flex-col lg:flex-row lg:justify-evenly">
          <Col lg={{ span: 5, order: 1 }} xs={{ span:12, order: 2 }}>
            <div className="flex text-center items-center lg:items-start flex-col h-full justify-center lg:justify-between pt-3">
              <p className="font-bold text-xl lg:text-3xl lg:text-left">
                <span className="text-blue-500"> Parsing </span> Kalimat Jadi
                Mudah dengan
                <span className="text-blue-500"> idParser </span>
              </p>
              <p className="pb-2 lg:text-left">
                Parsing kalimat terhadap pola dasar bahasa Indonesia dengan
                menggunakan algoritma CYK
              </p>
              <a
                href="#selengkapnya"
                className="no-underline bg-blue-400 p-3 rounded-md text-white shadow-md font-bold hover:bg-blue-500 hover:text-slate-800"
              >
                Selengkapnya
              </a>
            </div>
          </Col>
          <Col lg={{ span: 5, order: 2 }} xs={{  span:12, order: 1 }}>
            <div className="lg:pb-4 flex items-center h-full lg:justify-end justify-center">
              <img src={hero} alt="Hero" className="max-h-40 md:max-h-96" />
            </div>
          </Col>
        </Row>
      </div>
      <div
        data-aos="fade-up"
        id="selengkapnya"
        className="min-h-screen flex items-center justify-center flex-col"
      >
        <Row className="justify-center my-auto">
          <h1 className="mb-4 md:mb-0 text-center text-xl lg:text-3xl font-bold">
            Apa itu <span className="text-blue-500">idParser?</span>
          </h1>
          <Col
            md={{ span: 5, order: 1 }}
            xs={{ order: 2 }}
            className="my-auto"
          >
            <div className="h-full flex flex-col items-center justify-center text-center lg:text-start lg:items-start">
              <p className="leading-normal lg:leading-loose lg:text-start">
                idParser adalah aplikasi parsing sintaksis kalimat baku bahasa
                Indonesia. Dapat digunakan untuk menentukan apakah sebuah
                kalimat baku atau tidak terhadap pola dasar bahasa Indonesia.
                idParser dibuat dengan menggunakan CFG dan algoritma CYK.
              </p>
              <a data-aos="fade-up" href="/about">
                <button className="w-fit no-underline bg-blue-400 p-3 rounded-md text-white shadow-md font-bold hover:bg-blue-500">
                  Pelajari Lebih Lanjut
                </button>
              </a>
            </div>
          </Col>
          <Col
            md={{ span: 5, order: 2 }}
            xs={{ order: 1 }}
            className="justify-center my-auto mb-4 md:mb-0"
          >
            <div className="flex items-center justify-center lg:justify-end">
              <img src={robot} alt="Hero" className="max-h-40 lg:max-h-80" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="mt-20 md:mt-0 min-h-screen flex items-center justify-center flex-col">
        <Row data-aos="fade-up" className="justify-evenly my-auto">
          <h1 className="text-center text-xl lg:text-3xl font-bold mb-8 md:mb-14 ">
            Mengapa harus <span className="text-blue-500">idParser?</span>
          </h1>
          <Col data-aos="fade-up" md={3} className="justify-center mb-6">
            <Card className="shadow-lg">
              <Card.Img variant="top" src={opensource} className="max-h-40" />
              <Card.Body className="bg-blue-500 text-white rounded-b-md">
                <Card.Title className="font-bold">Open Source</Card.Title>
                <Card.Text>
                  idParser bersifat open source, sehingga siapa saja dapat
                  melihat kode sumber dari aplikasi ini.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col data-aos="fade-up" md={3} className="justify-center mb-6">
            <Card className="shadow-lg">
              <Card.Img variant="top" src={cyk} className="max-h-40" />
              <Card.Body className="bg-blue-500 text-white rounded-b-md">
                <Card.Title className="font-bold">Algoritma CYK</Card.Title>
                <Card.Text>
                  idParser menggunakan algoritma CYK yang sudah umum digunakan
                  dalam proses syntatic parsing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col data-aos="fade-up" md={3} className="justify-center mb-6">
            <Card className="shadow-lg">
              <Card.Img variant="top" src={fullstack} className="max-h-40" />
              <Card.Body className="bg-blue-500 text-white rounded-b-md">
                <Card.Title className="font-bold">Full Stack</Card.Title>
                <Card.Text>
                  idParser dibuat menggunakan frontend framework React dan
                  backend framework Flask.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div data-aos="fade-up" className="mt-6 md:mt-0 min-h-screen flex items-center justify-center flex-col">
        <Row data-aos="fade-up" className="justify-evenly">
          <Col md={{ span: 5, order: 1 }} xs={{ order: 2 }} className="my-auto">
            <div className="flex items-start flex-col h-full justify-center">
              <p className="font-bold text-xl lg:text-3xl">
                Ayo
                <span className="text-blue-500"> Parsing </span> Kalimatmu
                Sekarang dengan
                <span className="text-blue-500"> idParser! </span>
              </p>
              <a
                data-aos="fade-up"
                href="/parser"
                className="no-underline bg-blue-400 p-3 rounded-md text-white shadow-md font-bold hover:bg-blue-500 hover:text-slate-800"
              >
                Coba Sekarang
              </a>
            </div>
          </Col>
          <Col md={{ span: 5, order: 2 }} xs={{ order: 1 }}>
            <div className="pb-4 flex items-center h-full lg:justify-end justify-center">
              <img
                src={robotsleep}
                alt="Hero"
                className="sm:max-h-40 lg:max-h-80"
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Home;
