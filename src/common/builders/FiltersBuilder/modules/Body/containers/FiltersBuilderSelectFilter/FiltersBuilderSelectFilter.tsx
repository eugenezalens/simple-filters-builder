'use client'

import { Box, SelectChangeEvent } from '@mui/material'
import React, { FC, useCallback, useEffect } from 'react'

import { useFiltersBuilderContext as useContext } from '@/common/builders/FiltersBuilder/context'
import { IFiltersBuilderSelectFilterConfig as ISelectFilterConfig } from '@/common/builders/FiltersBuilder/modules/Body/containers/FiltersBuilderSelectFilter/interfaces'
import { Select } from '@/common/components'

type TProps = { hasTheLastOrder: boolean } & ISelectFilterConfig<any>

const FiltersBuilderSelectFilter: FC<TProps> = ({ id, label, defaultValue, optionList, hasTheLastOrder }) => {
  const { appliedFilters, setAppliedFilters, initFilters } = useContext()

  useEffect(() => {
    setAppliedFilters((prev) => ({ ...prev, [id]: defaultValue }))
    if (hasTheLastOrder) initFilters()
  }, [])

  const value = (appliedFilters[id] as string) ?? ''

  const handleChange = useCallback(
    (event: SelectChangeEvent<any>): void => {
      setAppliedFilters((prev) => ({ ...prev, [id]: event.target.value }))
    },
    [setAppliedFilters],
  )

  return (
    <Box sx={{ minWidth: 100 }}>
      <Select id={id as string} label={label} value={value} onChange={handleChange} optionList={optionList ?? []} />
    </Box>
  )
}

FiltersBuilderSelectFilter.displayName = 'FiltersBuilderSelectFilter'

export default FiltersBuilderSelectFilter
