import React from 'react'
import { TextField, Button } from '@material-ui/core'

export default function MovieForm(props) {
  const { values, onSubmit, onChange } = props

  return (
    <form type="submit" className="input-form" onSubmit={onSubmit}>
      <TextField
        id="title"
        label="Titel"
        value={values.title}
        onChange={onChange}
        margin="normal"
        name="title"
      />
      <TextField
        id="year"
        label="Jaar"
        value={values.year}
        onChange={onChange}
        margin="normal"
        name="year"
      />
      <TextField
        id="runtime"
        label="Speelduur"
        value={values.runtime}
        onChange={onChange}
        margin="normal"
        name="runtime"
      />
      <TextField
        id="grade"
        label="Cijfer"
        value={values.grade}
        onChange={onChange}
        margin="normal"
        name="grade"
      />
      <Button variant="contained" color="primary" type="submit">
        Opslaan
      </Button>
    </form>
  )
}
