import { Dialog, DialogTitle, DialogContent, TextField } from '@material-ui/core'
import React, { FC, useContext } from 'react'
import { SimulatorContext } from '../../../state/context'
import { editResource } from '../../../state/reducer'

export interface IModalResourceProps {
  open: boolean
  title: string
  data: object[]
  handleClose: () => void
  handleSave: () => void
}

export const Modal: FC<IModalResourceProps> = ({ open, data, title, handleClose, handleSave }) => {
  const { dispatch } = useContext(SimulatorContext)
  const handleTextFieldChange = (field: string, e: any) => {
    const value = field !== 'title' ? parseInt(e.target.value) : e.target.value
    dispatch(editResource(value, field))
  }

  return (
    data && (
      <>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            {data.map((field: any, id) => {
              return (
                <TextField
                  key={id}
                  margin="dense"
                  id={field.title}
                  label={field.title}
                  type="text"
                  value={field.value}
                  onChange={(e) => handleTextFieldChange(field.field, e)}
                  fullWidth
                />
              )
            })}
          </DialogContent>
          {}
        </Dialog>
      </>
    )
  )
}
