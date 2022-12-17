import { Container, Row, Col, Form } from "react-bootstrap";
import heroImg from "./images/hero.png";
import axios from "axios";
import { useState } from "react";
import { Graphviz } from "graphviz-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null)
    const [graph, setGraph] = useState(null);
    const [staticInput, setStaticInput] = useState("");

    const parser = async (e) => {
        e.preventDefault();
        if (input === "") { return; }
        const Response = await axios.post(process.env.REACT_APP_API_PATH_PARSER , { string: input });
        setResult(Response.data.result);
        setGraph(Response.data.graph);
        setInput("");
        setStaticInput(input);
    }

    return (
        <>
            <Container fluid className="box-border bg-[#DCEFFD] lg:rounded-b-full h-[100vh] lg:h-[75vh] z-0">
                <Container fluid="lg" className="h-[100vh] lg:h-[vh] z-10 font-poppins">
                        <Row>
                            <Col lg={8} className="m-auto text-center z-50">
                                <h1 className="text-slate-900 font-bold py-3 lg:mt-10">
                                    Parsing Kalimat
                                </h1>
                                <p className="lg:text-lg">
                                    Periksa kalimat dengan pola dasar dalam bahasa Indonesia <br />
                                    dengan algoritma Cocke-Younger-Kasami (CYK)
                                </p>
                                <div className="pt-3">
                                    <Form>
                                        <Form.Group className="w-full text-left">
                                            <Form.Control className="p-3" value = {input} placeholder="Masukkan kalimat..." type="text" onChange={(e) => setInput(e.target.value)}/>
                                            <Form.Label className="text-[#BBBFC7] mt-2">Contoh: Saya sedang belajar di kampus</Form.Label>
                                        </Form.Group>
                                        <button className="bg-[#5A54F2] hover:bg-[#4d47ea] sm:w-full md:w-auto text-white rounded-md m-auto py-3 ms-2 px-24 mt-3" onClick={(e) => parser(e)}>Periksa</button>
                                    </Form>
                                </div>
                            </Col>
                            <Col lg={4} className=" hidden lg:block absolute right-28 top-10 z-10">
                                <img src={heroImg} alt="Hero" className="w-full" />
                            </Col>
                        </Row>
                </Container>
                <Container fluid="lg" className="z-10 font-poppins">
                    {result === null ? null : 
                        <div className = "mt-3 lg:p-20 font-poppins">
                            <h1 className = "text-center font-bold lg:mb-6">Hasil Parsing</h1>
                            <div className = {`text-center ${result ? "bg-green-300" : "bg-red-300" } rounded-lg py-4`}>
                                <p className="lg:text-lg">Berdasarkan hasil pemeriksaan, kalimat <span className="font-semibold">{staticInput}</span></p>
                                {result 
                                    ? <h5 className = "text-green-600 uppercase text-2xl font-extrabold">Valid</h5>
                                    : <h5 className = "text-red-600 uppercase text-2xl font-extrabold">Tidak Valid</h5>
                                }
                                <p className="lg:text-lg">Sesuai dengan pola dasar bahasa Indonesia</p>
                            </div>
                            {graph === null ? null :
                                <div>
                                    <h1 className = "text-center font-bold mt-10">Pohon Parsing</h1>
                                    <div className="mx-auto w-full my-6 border-green-500 border-2 p-4 rounded-lg text-center flex items-center justify-center">
                                        <Graphviz dot={graph} />
                                    </div>
                                </div>
                            }
                        </div> 
                    }
                </Container>
            </Container>
        </>
    )
}