'use client'

import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { ChangeEvent, FC, useCallback, useEffect, useMemo } from 'react'

import { useFiltersBuilderContext as useContext } from '@/common/builders/FiltersBuilder/context'
import { IFiltersBuilderBooleanFilterConfig as IBooleanFilterConfig } from '@/common/builders/FiltersBuilder/modules/Body/containers/FiltersBuilderBooleanFilter/interfaces'
import { Checkbox } from '@/common/components'

type TProps = { hasTheLastOrder: boolean } & IBooleanFilterConfig<any>

const FiltersBuilderBooleanFilter: FC<TProps> = ({ id, label, defaultValue, hasTheLastOrder }) => {
  const { appliedFilters, setAppliedFilters, initFilters } = useContext()

  useEffect(() => {
    setAppliedFilters((prev) => ({ ...prev, [id]: defaultValue }))
    if (hasTheLastOrder) initFilters()
  }, [])

  const value = appliedFilters[id]

  const formattedLabel = useMemo<string>(() => {
    if (value === undefined) return label

    return `${label} — ${value ? 'Да' : 'Нет'}`
  }, [label, value])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => {
      setAppliedFilters((prev) => ({ ...prev, [id]: checked }))
    },
    [setAppliedFilters],
  )

  return (
    <Box sx={{ minWidth: 100 }} borderRadius={1} border={`1px solid ${grey[400]}`} padding={'0 13px'}>
      <Checkbox value={(value as boolean) ?? false} onChange={handleChange} label={formattedLabel} />
    </Box>
  )
}

FiltersBuilderBooleanFilter.displayName = 'FiltersBuilderBooleanFilter'

export default FiltersBuilderBooleanFilter
