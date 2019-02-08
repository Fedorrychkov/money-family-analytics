import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import './todo.scss';

export default class Todo extends React.Component {
  state = {
    checked: false
  }
  
  handleToggle = value => () => {
    this.setState({checked: value});
  };
  render() {
    return (
      <Fragment>
        <ListItem className={this.state.checked ? 'checked item' : 'item'}
          key={this.props.item.id} role={undefined} dense button onClick={this.handleToggle(!this.state.checked)}>
          <Checkbox
            checked={this.state.checked}
            tabIndex={-1}
            disableRipple
          />
          <ListItemText primary={this.props.item.value} />
        </ListItem>
      </Fragment>
    )
  }
}
