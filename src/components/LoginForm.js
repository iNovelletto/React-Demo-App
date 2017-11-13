import React from 'react';
import PropTypes from 'prop-types';

import {TextField, List, ListItem, Button} from 'material-ui';

class LoginForm extends React.Component {
  constructor(props,context){
    super(props, context);
  }

  state = {
    userName: '',
    password: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render () {
    return (
      <div>
      <List>
        <ListItem>
          <TextField
            required
            id="userName"
            label="Login"
            value={this.state.userName}
            onChange={this.handleChange('userName')}
            className={this.props.textField}
          />
        </ListItem>
        <ListItem>
          <TextField
            required
            id="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange('password')}
            className={this.props.textField}
          />
        </ListItem>
      </List>
      <Button>
        Login
      </Button>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default LoginForm;
