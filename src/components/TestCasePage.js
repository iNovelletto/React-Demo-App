import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextFieldCustom from './common/TextFieldCustom';

//'default', 'inherit', 'primary', 'accent', 'contrast'
class TestCasePage extends React.Component {
  //, value2, value3;

  handleChange = () => {

  };

  render () {
    return (
      <Grid justify={'center'} alignContent={'center'} container component={Paper}>
        <Grid item xs={6}>
          <TextFieldCustom
            id={"ProductId"}
            label={"Product"}
            //value={this.value1}
            onChange={this.handleChange}
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={3}>
          <Button color={'default'} raised>
            {'New Product'}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextFieldCustom
            id={"TestCaseNameId"}
            label={"Test Case Name"}
            //value={this.value1}
            fullWidth={true}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextFieldCustom
            id={"TestCaseIdentifierId"}
            label={"Test Case Identifier"}
            //value={this.value1}
            fullWidth={true}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextFieldCustom
            id={"ModuleId"}
            label={"Module"}
            //value={this.value1}
            fullWidth={true}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={3}>
        <Button color={'default'} raised>
          {'New Module'}
        </Button>
      </Grid>
      </Grid>
    );
  }
}

export default TestCasePage;
