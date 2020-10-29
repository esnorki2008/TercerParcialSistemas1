import React from 'react';
import { authenticate, logout, getSession } from './Accounts';
import Aplicacion from './aplicacion'
import { Form, Col, Row, Button, Alert } from "react-bootstrap";
import UserPool from '../UserPool';
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.TextoEmail = React.createRef();
    this.TextoPassword = React.createRef();
    this.state = { status: false,nombre : '' }
    this.verSesion();
  }

  Registrarse = event => {
    event.preventDefault();
    var email = this.TextoEmail.current.value
    var password = this.TextoPassword.current.value
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };


  Loggearse = event => {
    event.preventDefault();
    var email = this.TextoEmail.current.value
    authenticate(email, this.TextoPassword.current.value)
      .then(data => {
        console.log('Ingresando!', data);
        this.setState(state => ({ status: true,nombre : email}));
      })
      .catch(err => {
        console.error('Error en el login!', err);
        return false
      })


  };

  verSesion = () => {
    getSession()
      .then(session => {
        console.log('Session:', session);
        this.setState(state => ({ status: true }));
      }).catch(session => {
        console.log('Error en Status Catch: ', session)
      })
  }
  Formulario = () => {
    return (
      <>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div><h1>Servidor Web 1</h1></div>
        </div>
        <Row>
          <Col className='col-5' ></Col>
          <Col className='col-5'>
            {!this.state.status ? (
              <Form className="justify-content-end col-12" activeKey="/home" >
                <Row className="col-12">
                  <Col className="col-6">
                    <Form.Label>Username</Form.Label>
                  </Col>
                  <Col className="col-6">
                    <Form.Label>Password</Form.Label>
                  </Col>
                </Row>
                <Row className="col-12">
                  <Col className="col-6">
                    <Form.Control
                      ref={this.TextoEmail}
                      type="text"
                      placeholder="Username"
                    />
                  </Col>
                  <Col className="col-6">
                    <Form.Control
                      ref={this.TextoPassword}
                      type="text"
                      placeholder="Password"
                    />
                  </Col>
                </Row>
                <Row><p></p></Row>
                <Row className="col-12 justify-content-center">
                  <Col className="col-6 ">
                    <Button className="col-12" variant="primary" onClick={this.Registrarse}>Crear Usuario</Button>{' '}
                  </Col>
                  <Col className="col-6 ">
                    <Button className="col-12" variant="primary" onClick={this.Loggearse}>Loggearse</Button>{' '}
                  </Col>

                </Row>
                <Row>

                </Row>

              </Form>
            ) : <p></p>
            }
          </Col>
          <Col className='col-2'>
            {this.state.status ? (
              <div>
                <Row className="col-12">
                  <Col >
                    <Button className="col-12" variant="primary" onClick={this.Salir.bind(this)}>Cerrar Sesion</Button>{' '}

                  </Col>
                </Row>

              </div>
            ) :
              (
                <Row className="col-12">
                  <Alert variant="danger" >
                    <Alert.Heading>No Se Ha Encontrado Un Usuario</Alert.Heading>
                    <p>
                      No se ha loggeado en la pagina
        </p>
                  </Alert>
                </Row>
              )
            }
          </Col>
        </Row>
        <br></br>

      </>
    );
  };
  Salir() {
    this.setState(state => ({ status: false }));
    logout()
  }
  render() {
    return (
      <div >
        {
          this.Formulario()
        }

        <div>
          {this.state.status ? (
            <div>
              <Aplicacion />

            </div>
          ) : 'CUERPO DE BIENVENIDA'}
        </div>
      </div>


    );
  }
}
export default Login;



