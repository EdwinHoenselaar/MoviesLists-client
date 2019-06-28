import React from 'react'
import { TextField } from '@material-ui/core'

export default function MovieForm(props) {
  // const { values } = props

  return (
    <form type="submit">
      <TextField
        id="title"
        label="Titel"
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
      />
    </form>
  )
}
