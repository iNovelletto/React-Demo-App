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
  handleChange = () => {

  };

  render () {
    const listOne = [
			{ id: 1, text: 'Banana', identifier: Math.floor(Math.random() * 100001) },
			{ id: 2, text: 'Avocado', identifier: Math.floor(Math.random() * 100001) },
			{ id: 3, text: 'Pineapple', identifier: Math.floor(Math.random() * 100001) }
    ];

    const listTwo = [
			{ id: 4, text: 'Apple', identifier: Math.floor(Math.random() * 100001) },
			{ id: 5, text: 'Orange', identifier: Math.floor(Math.random() * 100001) },
			{ id: 6, text: 'Blueberry', identifier: Math.floor(Math.random() * 100001) }
    ];

    return (
      <Grid container component={Paper}>
        <Grid item xs={12}>
          <Grid container alignItems='center'>
            <Grid item xs={6}>
              <TextFieldCustom
                id={'ProductId'}
                label={'Product'}
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
                id={'TestCaseNameId'}
                label={'Test Case Name'}
                //value={this.value1}
                fullWidth={true}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextFieldCustom
                id={'TestCaseIdentifierId'}
                label={'Test Case Identifier'}
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
                id={'ModuleId'}
                label={'Module'}
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
                <Container id={2} list={listTwo} />
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
