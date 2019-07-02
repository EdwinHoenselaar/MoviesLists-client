import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Paper, Modal, Typography, Button } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { Link } from 'react-router-dom'


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow)

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    top: 50,
    left: 50,
  },
}))

export default function MoviesListTable(props) {
  const [movie, setMovie] = useState({})
  const [open, setOpen] = useState(false)
  const [modalStyle] = useState(getModalStyle)

  const handleClose = () => {
    setOpen(false)
  }
  const { movieList } = props
  console.log(movieList)
  const classes = useStyles()

  function onDeleteClick (movie) {
    console.log("DELETE", movie)
    setMovie(movie)
    setOpen(true)
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Titel</StyledTableCell>
            <StyledTableCell align="right">Jaar</StyledTableCell>
            <StyledTableCell align="right">Speelduur</StyledTableCell>
            <StyledTableCell align="right">Cijfer</StyledTableCell>
            <StyledTableCell align="right">Verwijder</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movieList.map(movie => (
            <StyledTableRow key={movie.title}>
              <StyledTableCell component="th" scope="row">
                <Link to={`/movieDetails/${movie._id}`}>
                  {movie.title}
                </Link>
              </StyledTableCell>
              <StyledTableCell align="right">{movie.year}</StyledTableCell>
              <StyledTableCell align="right">{movie.runtime}</StyledTableCell>
              <StyledTableCell align="right">{movie.grade}</StyledTableCell>
              <StyledTableCell align="right" onClick={() => {onDeleteClick(movie)}}><DeleteForeverIcon/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h4" id="modal-title">
            {movie.title}
          </Typography>
          <Typography variant="h6">
            Weet je zeker dat je deze film permanent wilt verwijderen?
          </Typography>
          <Button variant="contained" color="secondary" className={classes.button}>YES</Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleClose}>NO</Button>
        </div>
      </Modal>

    </Paper>
  );
}