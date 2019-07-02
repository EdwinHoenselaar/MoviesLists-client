import React, { useState, useEffect } from 'react'
import { Modal, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import request from 'superagent'

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
  button: {
    margin: theme.spacing(1),
  },
}))

export default function DeleteModal(props) {
  const [movie, setMovie] = useState({})
  const [open, setOpen] = useState(false)
  const [modalStyle] = useState(getModalStyle)

  const handleClose = () => {
    setOpen(false)
  }
  const classes = useStyles()
  const { id } = props
  console.log('id' , id)

  useEffect(() => {
    request
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        console.log('response', res)
        setMovie(res.body)
      })
    }, [id])
    
    console.log('movie', movie)
  return (
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
  )
}
