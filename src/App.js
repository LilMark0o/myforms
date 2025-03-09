import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    favClass: "1"
  });
  const [validationStates, setValidationStates] = useState({
    emailValid: true,
    passwordValid: true
  });

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormValues({ ...formValues, password });
    setValidationStates({ ...validationStates, passwordValid: password.length >= 9 && /[A-Za-z]/.test(password) && /[0-9]/.test(password) });
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const clickSubmit = () => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email);
    setValidationStates({ ...validationStates, emailValid });
    if (emailValid) {
      alert(JSON.stringify(formValues));
    }
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} isInvalid={!validationStates.emailValid} />
          {!validationStates.emailValid && <Form.Text className="text-danger">Ingrese un correo válido.</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} isInvalid={!validationStates.passwordValid} />
          {!validationStates.passwordValid && <Form.Text className="text-danger">La contraseña debe tener al menos 9 caracteres, incluyendo letras y números.</Form.Text>}
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange} value={formValues.favClass}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologías web</option>
          </Form.Select>
        </Form.Group>
        
        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
