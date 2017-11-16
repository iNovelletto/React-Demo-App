import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tooltip from 'material-ui/Tooltip';
import {AccountCircle} from 'material-ui-icons';
import {TextField, Button} from 'material-ui';
import CustomInfoDialog from './CustomInfoDialog';

class LoginForm extends React.Component {
  state = {
    userName: '',
    password: '',
    dialogOpen: false,
    dialogTitle: '',
    dialogMessage: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  submitLogin = () => {
    if(this.state.userName === 'vitor') {
      this.setState({
        dialogTitle: 'Wrong Username!',
        dialogMessage: 'Correct User name is VICTOR'
      });
    } else {
      this.setState({
        dialogTitle: 'Error!',
        dialogMessage: 'Wrong Username or Password'
      });
    }

    this.handleDialogOpen();

    this.setState({
      userName: '',
      password: ''
    });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };

  render () {
    const classes = this.props;

    return (
      <div>
        <CustomInfoDialog
          open={this.state.dialogOpen}
          title={this.state.dialogTitle}
          message={this.state.dialogMessage}
          handleClose={this.handleDialogClose}
        />
        <Grid container justify="center">
          <Paper className={classes.loginFormPaper}>
            <Grid
            container
            alignItems="center"
            alignContent="center"
            justify="center"
            direction="column"
            spacing={24}>
                <Grid item>
                  <AccountCircle style={{ width: 100, height: 100 }}/>
                </Grid>
                <Grid item>
                  <Tooltip title="Insert your Login!" placement="right" enterDelay={300} leaveDelay={100}>
                  <TextField
                    id="userName"
                    label="Login"
                    value={this.state.userName}
                    onChange={this.handleChange('userName')}
                  />
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Insert your Password!" placement="right" enterDelay={300} leaveDelay={100}>
                  <TextField
                    id="password"
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                  />
                  </Tooltip>
                </Grid >
                <Grid item>
                  <Tooltip
                  title={(this.state.userName && this.state.password) ? "Login to Apple" : "Login Info missing!"}//"Login to Apple"
                  placement="right"
                  enterDelay={300}
                  leaveDelay={100}>
                    <div>
                      <Button
                      disabled={!(this.state.userName && this.state.password)}
                      raised
                      color="primary"
                      onClick={() => this.submitLogin()}>
                        Login
                      </Button>
                    </div>
                  </Tooltip>
                </Grid>
          </Grid>
        </Paper>
      </Grid>
      </div>
    );
  }
}

export default LoginForm;
