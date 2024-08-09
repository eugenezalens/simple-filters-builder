import { FormControl, InputLabel, Select as MuiSelect, MenuItem, SelectChangeEvent } from '@mui/material'
import React, { FC, memo, ReactNode } from 'react'

type TValue = string | number

export interface ISelectOption {
  label: string
  value: TValue
}

interface IProps {
  id: string
  label: string
  value: TValue
  optionList: ISelectOption[]
  onChange: (event: SelectChangeEvent<any>, child: ReactNode) => void
}

const Select: FC<IProps> = ({ id, label, value, optionList, onChange }) => {
  return (
    <FormControl fullWidth size={'small'}>
      <InputLabel id={id}>{label}</InputLabel>

      <MuiSelect labelId={id} value={value ?? ''} onChange={onChange} label={label}>
        {optionList?.map((o) => (
          <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

Select.displayName = 'Select'

export default memo(Select)
