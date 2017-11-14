import React from 'react';
//import {AccountCircle} from 'material-ui-icons';
import Dialog, {  
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import PropTypes from 'prop-types';

class CustomInfoDialog extends React.Component {  
  render () {    
    return (
      <div>
        <Dialog open={this.props.open} onRequestClose={this.props.handleClose}>
          <DialogTitle>{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.message}
            </DialogContentText>
          </DialogContent>
        </Dialog>        
      </div>
    );
  }
}
const { string, bool, func } = PropTypes;
CustomInfoDialog.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired,
  title: string.isRequired,
  message: string
};

export default CustomInfoDialog;
