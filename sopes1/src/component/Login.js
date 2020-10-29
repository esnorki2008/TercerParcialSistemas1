import React, { useState, useContext } from 'react';
import { AccountContext,authenticate } from './Accounts';






class Login extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {loggeado: false}
    this.TextoEmail = React.createRef();
    this.TextoPassword = React.createRef();
  }
  componentWillMount() {

  }

  onSubmit = event => {
    event.preventDefault();
   
    authenticate(this.TextoEmail.current.value, this.TextoPassword.current.value)
      .then(data => {
        console.log('Logged in!', data);
      })
      .catch(err => {
        console.error('Failed to login!', err);
      })
  };

  setEmail =() =>{

  }

  Contenido = () => {
    return (
      <>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              ref ={this.TextoEmail}
              
            />

            <input
              ref ={this.TextoPassword}
              
            />

            <button type='submit'>Login</button>
          </form>
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
export default Login;



