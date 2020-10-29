import React from "react";


import Login from './Login';


class Exec extends React.Component {

    componentWillMount() {

    }
    //<Status />

    Contenido = () => {
        return (
            <>

                <div>
                   
                        
                        
                        <Login />
                        
                  
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
export default Exec;