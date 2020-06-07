import React from 'react'
import List from './List'

export default class Lister extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddAccount = this.handleAddAccount.bind(this)
    this.state = {
      itemList: [
        {
          username: 'sillydance',
          password: 'ribbit'
        }
      ]
    }
    
  }

  handleAddAccount(){
    const billy = {
      username: document.getElementById('un').value,
      password: document.getElementById('pw').value
    } 
    this.setState({
      itemList: this.state.itemList.concat(billy)
    })

    console.log('Account added')
  }

  componentDidMount() {
    console.log('component mounted')
  }

componentDidUpdate(prevProps, prevState) {
  console.log('component updated')
}

  render(){
 
    return (
    <div>
     <h1>Lister</h1>
     <List itemList = {this.state.itemList}/>
     <div className='acct_form'>
        <h3>Form Here</h3>
        <label>Username: </label>
        <input type='text' id='un'></input><br></br>
        <label>Password: </label>
        <input type='text' id='pw'></input><br></br>
        <button onClick={this.handleAddAccount}> click me </button>
     </div>
   </div>
    );
  }
}
