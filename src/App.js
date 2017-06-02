import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

class App extends Component {

  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      text: '',
      items: [{index: 0, text: 'learn React+Redux'}]
    };
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
        text: '',
        items: prevState.items.concat({text: this.state.text})
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>react-redux-todo</h2>
        </div>

        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text}/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default App;
