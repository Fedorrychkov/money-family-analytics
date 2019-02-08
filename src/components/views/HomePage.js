import React from 'react';
import Todo from '../core/todos/Todo';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as uuid4 from 'uuid/v4';
import './todos.scss';

export default class HomePage extends React.Component {
  state = {
    value: '',
    todos: []
  }

  handleValue = (e) => {
    e.preventDefault();
    this.setState({value: e.target.value})
  }

  addValue = () => {
    const todos = this.state.todos;
    this.state.value.length > 0 && todos.push({id: uuid4(), value: this.state.value});
    this.setState({todos: todos, value: ''});
  }

  render() {
    return (
      <div className="home-page">
        <form onSubmit={(e) => e.preventDefault()} className="home-page__form" noValidate autoComplete="off">
          <TextField
            className="input"
            id="standard-name"
            label="Добавить тудушку"
            value={this.state.value}
            onChange={this.handleValue}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" onClick={this.addValue}>
            Add
          </Button>
        </form>

        <List className="todo-list">
          {
            this.state.todos.map(item => <Todo key={item.id} item={item} />)
          }
        </List>
      </div>
    )
  }
}