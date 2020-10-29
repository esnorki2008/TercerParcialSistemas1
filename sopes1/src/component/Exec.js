import React from "react";
import { Account } from './Accounts';
import Signup from './Signup';
import Login from './Login';
import Status from './Status';

class Exec extends React.Component {

    componentWillMount() {

    }


    Contenido = () => {
        return (
            <>

                <div>
                    <Account>
                        <Status />
                        <Signup />
                        <Login />
                    </Account>
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