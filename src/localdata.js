import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 523,
  },
});

export default function LocalDatas() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
    const [globalData, setGlobalData] = React.useState([{}]);
    React.useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();
            setGlobalData(Object.values(Object.values(data.countryitems)[0]));
    //         console.log(Object.values(Object.values(data.countryitems)[0]))
        }
        getData();
    }, [])


  return (
  <Paper className={classes.root}>
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Country Name</TableCell>
            <TableCell align="right">Total Cases</TableCell>
            <TableCell align="right">Active Cases</TableCell>
            <TableCell align="right">Recovered</TableCell>
            <TableCell align="right">Deaths</TableCell>
         </TableRow>
      </TableHead>
                  <TableBody>
          {globalData.map((key , ind) => (
            <TableRow key={ind} style = {}>
              <TableCell component="td" scope="row" >
                {globalData[ind].title}
              </TableCell>
              <TableCell align="right">{globalData[ind].total_cases}</TableCell>
              <TableCell align="right">{globalData[ind].total_active_cases}</TableCell>
              <TableCell align="right">{globalData[ind].total_recovered}</TableCell>
              <TableCell align="right">{globalData[ind].total_deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={globalData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}