import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
    overflow: "scroll",
    height: 450,
  },
});

export default function LocalDatas() {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState([{}]);

  useEffect(() => {
    async function getData() {
        const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
        let data = await response.json();

        setGlobalData(Object.values(Object.values(data.countryitems)[0]));
        console.log(Object.values(Object.values(data.countryitems)[0]))
    }
    getData();
}, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Country Name</StyledTableCell>
            <StyledTableCell align="right">Total Cases</StyledTableCell>
            <StyledTableCell align="right">Active Cases</StyledTableCell>
            <StyledTableCell align="right">Recovered</StyledTableCell>
            <StyledTableCell align="right">Deaths</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {globalData.map((key , ind) => (
            <StyledTableRow key={ind}>
              <StyledTableCell component="th" scope="row">
                {globalData[ind].title}
              </StyledTableCell>
              <StyledTableCell align="right">{globalData[ind].total_cases}</StyledTableCell>
              <StyledTableCell align="right">{globalData[ind].total_active_cases}</StyledTableCell>
              <StyledTableCell align="right">{globalData[ind].total_recovered}</StyledTableCell>
              <StyledTableCell align="right">{globalData[ind].total_deaths}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
