import { Container, Col , Row , Form, Button} from 'react-bootstrap' ;
import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
    const [input , setInput] = useState('');
    const [result, setResult] = useState('');
    const [data , setData] = useState('');
    const [isPost , setPost] = useState(false);

    const palindromeCheck = async(e) => {
        e.preventDefault();
        const Response = await axios.post(process.env.REACT_APP_API_PATH_TEST , 
        { string : input });
        setData(Response.data.result);
        setPost(true);
        setResult(input);
    }
    
    return(
        <Container>
            <Row>
                <Col lg = {6}>
                    <Form>
                        <Form.Group controllid = "App">
                            <Form.Label><h5>String</h5></Form.Label>
                            <Form.Control type = "text" placeholder = "Masukkan string..." onChange = {(e) => setInput(e.target.value)} />
                        </Form.Group>
                        <Button type = 'submit' className = 'px-4 py-2 mt-3' onClick = {(e) => palindromeCheck(e)}> Periksa </Button>
                    </Form>
                    {isPost &&
                        <div className='mt-3'>
                            <h5>Hasil</h5>
                            <p>String <code>{ result }</code> adalah { data }</p>
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    )
}