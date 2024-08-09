'use client'

import { Box, SelectChangeEvent } from '@mui/material'
import React, { FC, useCallback } from 'react'

import { Select } from '@/common/components'
import { ISelectFilter } from '@/modules/SimpleCats/components/SimpleCatsFilters/components/SelectFilter/interfaces'

const SelectFilter: FC<ISelectFilter> = ({ id, label, value, onChange, optionList }) => {
  const handleChange = useCallback(
    (event: SelectChangeEvent<any>): void => {
      onChange({ [id]: event.target.value })
    },
    [onChange],
  )

  return (
    <Box sx={{ minWidth: 100 }}>
      <Select
        id={id as string}
        label={label}
        value={value ?? ''}
        onChange={handleChange}
        optionList={optionList ?? []}
      />
    </Box>
  )
}

SelectFilter.displayName = 'SelectFilter'

export default SelectFilter
