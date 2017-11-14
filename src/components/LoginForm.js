import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tooltip from 'material-ui/Tooltip';

import {TextField, Button} from 'material-ui';

class LoginForm extends React.Component {  
  state = {
    userName: '',
    password: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitLogin = () => {
    alert("hello");
  };

  render () {    
    return (
      <div> 
        <Grid 
        container
        justify="center">   
          <Paper className="loginFormPaper">        
            <Grid 
            container 
            alignItems="center"
            alignContent="center"
            justify="center"
            direction="column"
            spacing="24">                          
                <Grid item> 
                  <Tooltip title="Insert your Login!" placement="bottom" enterDelay={300} leaveDelay={100}>           
                  <TextField                                        
                    id="userName"
                    label="Login"
                    value={this.state.userName}
                    onChange={this.handleChange('userName')}                
                  /> 
                  </Tooltip>           
                </Grid>
                <Grid item>
                  <Tooltip title="Insert your Password!" placement="bottom" enterDelay={300} leaveDelay={100}>         
                  <TextField                    
                    id="password"
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}                
                  />     
                  </Tooltip>       
                </Grid >          
                <Grid item>
                  <Tooltip title="Login to Apple" placement="right" enterDelay={300} leaveDelay={100}>
                    <Button onClick={() => this.submitLogin()}>
                      Login
                    </Button>
                  </Tooltip>
                </Grid>            
          </Grid>     
        </Paper>
      </Grid>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default LoginForm;
