import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));
const useStylestypography = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500 ,
    },
  });

export default function GlobalData() {
  const classes = useStyles();
  const classestypography = useStylestypography();
  const [data , setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
      async function fetchData(){
          setLoading(true);
          const data1 = await fetch('https://api.thevirustracker.com/free-api?global=stats');
          const data2 = await data1.json();
          console.log(data2);
          setData(data2)
          setLoading(false);

        }
      fetchData();
  }, [])

  if (loading){
      return (
    <div className={classes.root}>
    <Paper elevation={3}>
<div className = {classestypography.root}>
<Typography variant="h4" component="h2" gutterBottom style = {{color: 'brown'}}>
                    Loading...
     </Typography>
    <Typography variant="Subtitle2" component="h2" gutterBottom style = {{color: 'brown'}}>
      Total cases
    </Typography>
</div>
    </Paper>
    <Paper elevation={3}>
    <div className = {classestypography.root}>
<Typography variant="h4" component="h2" gutterBottom style = {{color: 'yellow'}}>
                       Loading...
    </Typography>
    <Typography variant="Subtitle2" component="h2" gutterBottom style = {{color: 'yellow'}}>
      Active cases
    </Typography>
</div>
    </Paper>
    <Paper elevation={3}>
    <div className = {classestypography.root}>
<Typography variant="h4" component="h2" gutterBottom style = {{color: 'green'}}>
                       Loading...
             </Typography>
    <Typography variant="Subtitle2" component="h2" gutterBottom style = {{color: 'green'}}>
      Recovered
    </Typography>
</div>
    </Paper>
    <Paper elevation={3}>
    <div className = {classestypography.root}>
<Typography variant="h4" component="h2" gutterBottom style = {{color: 'red'}}>
                        Loading...
    </Typography>
    <Typography variant="Subtitle2" component="h2" gutterBottom style = {{color: 'red'}}>
      Deaths
    </Typography>
</div>
    </Paper>

  </div>
      )
  }

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
<div className = {classestypography.root}>
<Typography variant="h4" component="h2" gutterBottom style = {{color: 'brown'}}>
<NumberFormat value={data && data.results && data.results[0].total_cases} displayType={'text'} thousandSeparator={true} />
      </Typography>
      <Typography variant="Subtitle2" component="h2" gutterBottom style = {{color: 'brown'}}>
        Total cases
      </Typography>
</div>
      </Paper>
      <Paper elevation={3}>
      <div className = {classestypography.root}>
<Typography variant="h4" component="h2" gutterBottom style = {{color: 'orange'}}>
<NumberFormat value={data && data.results && data.results[0].total_active_cases} displayType={'text'} thousandSeparator={true} />
      </Typography>
      <Typography variant="Subtitle2" component="h2" gutterBottom style = {{color: 'orange'}}>
        Active cases
      </Typography>
</div>
      </Paper>
      <Paper elevation={3}>
      <div className = {classestypography.root}>
<Typography variant="h4" component="h2" gutterBottom style = {{color: 'green'}}>
<NumberFormat value= {data && data.results && data.results[0].total_recovered} displayType={'text'} thousandSeparator={true}/>
      </Typography>
      <Typography variant="Subtitle2" component="h2" gutterBottom style = {{color: 'green'}}>
        Recovered
      </Typography>
</div>
      </Paper>
      <Paper elevation={3}>
      <div className = {classestypography.root}>
<Typography variant="h4" component="h2" gutterBottom style = {{color: 'red'}}>
<NumberFormat value= {data && data.results && data.results[0].total_deaths} displayType={'text'} thousandSeparator={true}  />
      </Typography>
      <Typography variant="Subtitle2" component="h2" gutterBottom style = {{color: 'red'}}>
        Deaths
      </Typography>
</div>
      </Paper>
 
    </div>
  );
}