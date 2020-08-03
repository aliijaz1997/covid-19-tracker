import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './globaldata';
import LocalDatas from './localdata';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    padding:'0%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  color: {
      backgroundColor: "light gray",
  },
}));

export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 style = {{color: '#20B2AA'}}>
        Covid-19 commonly known as Corona Virus is the type of virus which rapidly spreads through water from one human being to other. Wash your hand for 20 seconds and keep social distancing. Be aware of the situation of global as well as local level.
      </h2>
      <Grid container spacing={3}>
        <Grid item xs = "4">
          <Paper className={classes.paper}  style = {{fontWeight: 'bold', backgroundColor: "gainsboro" , color: "white"}}>Global Level
          <GlobalData/>
          </Paper>
        </Grid>
        <Grid item xs = "8">
          <Paper className={classes.paper} style = {{fontWeight: 'bold', backgroundColor: "gainsboro" , color: "white" }}>Local Data
          <LocalDatas/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}