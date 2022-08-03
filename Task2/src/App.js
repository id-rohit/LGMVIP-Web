import React, {Component}from 'react'
import './App.css';
import LGM from './LGM.jpg'
import Users from './components/user';

class App extends Component {
  constructor(props){
	super(props)
	this.state = {users_data :[],
                loading : true                
  }
	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                        loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
        <nav className="nav">
          <img src={LGM} alt=""></img>
          <button onClick={this.updateState}>Get Users</button>
        </nav>
        <div className="box2">
         <Users loading={this.state.loading} users={this.state.users_data}/>
        </div>
    </>
    )
  }
}
	
export default App;
