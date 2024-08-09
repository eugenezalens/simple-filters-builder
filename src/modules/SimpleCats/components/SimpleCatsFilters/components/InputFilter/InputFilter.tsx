'use client'

import { Box } from '@mui/material'
import React, { ChangeEventHandler, FC, useCallback, useEffect } from 'react'

import { Input } from '@/common/components'
import { IInputFilter } from '@/modules/SimpleCats/components/SimpleCatsFilters/components/InputFilter/interfaces'

const FiltersBuilderInputFilter: FC<IInputFilter> = ({ id, label, value, onChange }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      onChange({ [id]: event.target.value })
    },
    [onChange],
  )

  return (
    <Box sx={{ minWidth: 100 }}>
      <Input value={value ?? ''} onChange={handleChange} label={label} />
    </Box>
  )
}

FiltersBuilderInputFilter.displayName = 'FiltersBuilderInputFilter'

export default FiltersBuilderInputFilter
