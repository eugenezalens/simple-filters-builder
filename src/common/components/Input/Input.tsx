import { TextField } from '@mui/material'
import React, { ChangeEventHandler, FC, memo } from 'react'

interface IProps {
  label: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<IProps> = ({ label, onChange, value }) => {
  return <TextField value={value} onChange={onChange} label={label} size={'small'} fullWidth />
}

Input.displayName = 'Input'

export default memo(Input)
