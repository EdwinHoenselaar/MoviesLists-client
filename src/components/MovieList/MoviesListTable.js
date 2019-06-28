import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

export default function MoviesListTable(props) {
  const { movieList } = props
  console.log(movieList)
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Titel</StyledTableCell>
            <StyledTableCell align="right">Jaar</StyledTableCell>
            <StyledTableCell align="right">Speelduur</StyledTableCell>
            <StyledTableCell align="right">Cijfer</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movieList.map(movie => (
            <StyledTableRow key={movie.title}>
              <StyledTableCell component="th" scope="row"><Link to={`/movieDetails/${movie._id}`}>
                {movie.title}
              </Link></StyledTableCell>
              <StyledTableCell align="right">{movie.year}</StyledTableCell>
              <StyledTableCell align="right">{movie.runtime}</StyledTableCell>
              <StyledTableCell align="right">{movie.grade}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}