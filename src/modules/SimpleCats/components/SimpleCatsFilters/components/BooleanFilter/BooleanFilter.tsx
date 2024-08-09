'use client'

import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { ChangeEvent, FC, useCallback, useMemo } from 'react'

import { Checkbox } from '@/common/components'
import { IBooleanFilter } from '@/modules/SimpleCats/components/SimpleCatsFilters/components/BooleanFilter/interfaces'

const BooleanFilter: FC<IBooleanFilter> = ({ id, label, value, onChange }) => {
  const formattedLabel = useMemo<string>(() => {
    if (value === undefined) return label

    return `${label} — ${value ? 'Да' : 'Нет'}`
  }, [label, value])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => {
      onChange({ [id]: checked })
    },
    [onChange],
  )

  return (
    <Box sx={{ minWidth: 100 }} borderRadius={1} border={`1px solid ${grey[400]}`} padding={'0 13px'}>
      <Checkbox value={value ?? false} onChange={handleChange} label={formattedLabel} />
    </Box>
  )
}

BooleanFilter.displayName = 'FiltersBuilderBooleanFilter'

export default BooleanFilter
