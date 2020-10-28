import React from "react";
import foto from './foto.jpg';
import { Col, Row, Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Cantidad De Unidades Vendidas',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};
class Aplicacion extends React.Component {

    componentWillMount() {

    }


    Contenido = () => {
        return (
            <>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div><h1>Aplicacion De Usuario</h1></div>
                </div>
                <div className='col-12'>
                    <Row className='col-12'>
                        <Col className='col-3'>
                            <Card >
                                <Card.Img variant="top" src={foto} />
                                <Card.Body>
                                    <Card.Title><b>USR</b></Card.Title>
                                    <Card.Text>
                                        Bienvenido Usuario <b>USR</b> Desde Este Panel Puede Tener
                                    Acceso A Las Funcionalidades De La Aplicacion
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-9'>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div><h3>Reporte De Ventas</h3></div>
                                </div>
                                <Bar
                                    data={data}
                                    width={100}
                                    height={290}
                                    options={{
                                        maintainAspectRatio: false
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </>
        );
    };

    render() {
        return (
            <div >
                {
                    this.Contenido()
                }
            </div>
        );
    }
}
export default Aplicacion;