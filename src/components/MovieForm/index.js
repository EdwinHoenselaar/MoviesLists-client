import React from 'react'
import { TextField, Button } from '@material-ui/core'

export default function MovieForm(props) {
  // const { values } = props

  return (
    <form type="submit" className="input-form">
      <TextField
        id="title"
        label="Titel"
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="year"
        label="Jaar"
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="runtime"
        label="Speelduur"
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="grade"
        label="Cijfer"
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
      />
      <Button variant="contained" color="primary">
        Opslaan
      </Button>
    </form>
  )
}
