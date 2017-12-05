import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextFieldCustom from './common/TextFieldCustom';
import Typography from 'material-ui/Typography';
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Container from './Container';

//'default', 'inherit', 'primary', 'accent', 'contrast'
class TestCasePage extends React.Component {
  //, value2, value3;

  handleChange = () => {

  };

  render () {
    const listOne = [
			{ id: 1, text: "Item 1" },
			{ id: 2, text: "Item 2" },
			{ id: 3, text: "Item 3" }
    ];

    const listTwo = [
			{ id: 1, text: "Item 1" },
			{ id: 2, text: "Item 2" },
			{ id: 3, text: "Item 3" }
    ];

    return (
      <Grid container component={Paper}>
        <Grid item xs={12}>
          <Grid container alignItems='center'>
            <Grid item xs={6}>
              <TextFieldCustom
                id={"ProductId"}
                label={"Product"}
                //value={this.value1}
                onChange={this.handleChange}
                fullWidth={true}
              />
            </Grid>
            <Grid item>
              <Button color={'primary'} raised>
                {'New Product'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems='center'>
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
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems='center'>
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
              <Button color={'primary'} raised>
                {'New Module'}
              </Button>
            </Grid>
          </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="flex-start" alignItems='stretch'>
          <Grid item xs={12}>
            <Typography type="title">
                  Artifacts
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Container id={1} list={listOne} />
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item>
                <Container id={1} list={listTwo} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="flex-end" alignContent="flex-end">
        <Grid item xs={9}/>
          <Grid item xs={3}>
            <Button color={'primary'} raised>
              {'Save'}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    );
  }
}

export default TestCasePage;
