import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function App() {
  return (
    <Container style={{ width: 300, marginTop: 100 }} >
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="Senha" />
        </Form.Group>
      </Form>
      <Button style={{ width: 275, color: "white", backgroundColor: "#0e6cf7" }} variant="button">Acessar</Button>{' '}

    </Container>

  );
}

export default App;
