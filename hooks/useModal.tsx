import { useState } from 'react'

export const useModal = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return {
    open,
    handleClick,
    handleClose,
  }
}
