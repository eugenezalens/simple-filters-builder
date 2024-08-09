import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { ChangeEvent, FC, memo } from 'react'

interface IProps {
  label: string
  value: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

const Checkbox: FC<IProps> = ({ label, onChange, value }) => {
  return (
    <FormControlLabel
      style={{ color: grey[700] }}
      control={<MuiCheckbox checked={value ?? false} onChange={onChange} size={'small'} />}
      label={label}
    />
  )
}

Checkbox.displayName = 'Checkbox'

export default memo(Checkbox)
