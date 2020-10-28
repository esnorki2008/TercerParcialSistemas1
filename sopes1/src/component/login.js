import React from "react";

import { Form, Col, Row, Button } from "react-bootstrap";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.TextoServerA = React.createRef();
        this.TextoServerB = React.createRef();
        this.state = {
            //chartData:props.chartData,
            ipA: "",
            ipB: "",
            MostrarGrafica: false,
            MostrarMensajes: false,
        };
    }
    componentWillMount() {
        // this.getchartData(); // this should be this.getChartData();
        //this.getChartData();
    }


    Formulario = () => {
        return (
            <>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div><h1>Servidor Web</h1></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <Form className="justify-content-end col-6" activeKey="/home" >
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
                                    ref={this.TextoServerA}
                                    type="text"
                                    placeholder="Username"
                                />
                            </Col>
                            <Col className="col-6">
                                <Form.Control
                                    ref={this.TextoServerB}
                                    type="text"
                                    placeholder="Password"
                                />
                            </Col>
                        </Row>
                        <Row><p></p></Row>
                        <Row className="col-12 justify-content-center">
                            <Col className="col-6 ">
                                <Button className="col-12" variant="primary">Crear Usuario</Button>{' '}
                            </Col>
                            <Col className="col-6 ">
                                <Button className="col-12" variant="primary">Loggearse</Button>{' '}
                            </Col>
                        </Row>
                    </Form>
                </div>
                <br></br>

            </>
        );
    };

    render() {
        return (
            <div >
                {
                    this.Formulario()

                /*
                style={{ backgroundImage: `url(${fondo})` }}
                {this.state.MostrarGrafica ? (
                  <Graph
                    ipA={this.state.ipA}
                    ipB={this.state.ipB}
                    cadena="Valores Del Uso De"
                    legendPosition="bottom"
                  />
                ) : null}
                        {this.state.MostrarMensajes ? <Tarjeta ipA={this.state.ipA} ipB={this.state.ipB} /> : null}
                
                */
                }




            </div>
        );
    }
}
export default Login;