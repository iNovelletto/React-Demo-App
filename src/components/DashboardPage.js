import React from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import Divider from 'material-ui/Divider';
import {Doughnut} from 'react-chartjs-2';



class DashboardPage extends React.Component {
    state = {
        value: 0,
        };

        handleChange = (event, value) => {
        this.setState({ value });
        };

    render () {
        const classes = this.props;

        const data = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };

        return (
        <div>
            <Grid container justify="center">
                <Paper className={classes.dashboardPaper}>
                    <Grid
                    container
                    alignItems="center"
                    alignContent="center"
                    justify="center"
                    direction="column"
                    spacing={24}>
                        <Grid item>
                            <Grid
                            container
                            alignItems="center"
                            alignContent="center"
                            justify="center"
                            direction="row"
                            spacing={24}>
                                <Grid item>
                                    <form noValidate>
                                        <TextField
                                            id="dateFrom"
                                            label="From"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{shrink: true}}
                                        />
                                    </form>
                                </Grid>
                                <Grid item>
                                    <form noValidate>
                                        <TextField
                                            id="dateTo"
                                            label="To"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{shrink: true}}
                                        />
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Divider style={{color: "white"}}/>
                        </Grid>
                        <Grid item>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                fullWidth
                                indicatorColor="primary"
                                textColor="primary"
                                >
                                <Tab icon={<PhoneIcon />} label="RECENTS" />
                                <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                                <Tab icon={<PersonPinIcon />} label="NEARBY" />
                            </Tabs>
                        </Grid>
                        <Grid item>
                            <Doughnut data={data} />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div>
        );
    }
}

export default DashboardPage;
