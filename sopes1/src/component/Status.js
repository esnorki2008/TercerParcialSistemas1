import React from 'react';
import { logout,getSession } from './Accounts';

class Status extends React.Component {
  constructor(props){
    super(props);
    this.state = {status : false }

    
    //console.log(getSession)

    //cors@gotmail.com
    getSession()
      .then(session => {
        console.log('Session:', session);
        this.setState({status:true});
    }).catch(session=>{
        console.log('Error en Status Catch: ',session)
    })
  }
  useEffect()  {
    getSession()
      .then(session => {
        console.log('Session:', session);
        this.setState({status:true});
      })
  };
  render() {
    return (
      <div>
        {this.state.status ? (
          <div>
            Loggeado
            <button onClick={logout}>Logout</button>
          </div>
        ) : 'Sin Loggearse'}
      </div>
    );
  }
}
export default Status;

