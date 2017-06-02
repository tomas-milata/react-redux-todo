import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

class App extends Component {

  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      text: '',
      items: [{
        id: Date.now(), text: 'learn React+Redux'
      }]
    };
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      text: '',
      items: prevState.items.concat({
        id: Date.now(),
        text: this.state.text
      })
    }));
  }

  deleteItem(id) {
    this.setState((prevState) => {
      const index = prevState.items.findIndex((item) => item.id === id);
      const newItems = prevState.items;
      newItems.splice(index, 1);
      return {
        text: prevState.text,
        items: newItems
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>react-redux-todo</h2>
        </div>

        <TodoList items={this.state.items} deleteItem={this.deleteItem}/>

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text}/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default App;
