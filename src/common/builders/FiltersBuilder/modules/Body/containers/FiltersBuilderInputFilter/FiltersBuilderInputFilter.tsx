'use client'

import { Box } from '@mui/material'
import React, { ChangeEventHandler, FC, useCallback, useEffect } from 'react'

import { useFiltersBuilderContext as useContext } from '@/common/builders/FiltersBuilder/context'
import { IFiltersBuilderInputFilterConfig as IInputFilterConfig } from '@/common/builders/FiltersBuilder/modules/Body/containers/FiltersBuilderInputFilter/interfaces'
import { Input } from '@/common/components'

type TProps = { hasTheLastOrder: boolean } & IInputFilterConfig<any>

const FiltersBuilderInputFilter: FC<TProps> = ({ id, label, defaultValue, hasTheLastOrder }) => {
  const { appliedFilters, setAppliedFilters, initFilters } = useContext()

  useEffect(() => {
    setAppliedFilters((prev) => ({ ...prev, [id]: defaultValue }))
    if (hasTheLastOrder) initFilters()
  }, [])

  const value = (appliedFilters[id] as string) ?? ''

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setAppliedFilters((prev) => ({ ...prev, [id]: event.target.value }))
    },
    [setAppliedFilters],
  )

  return (
    <Box sx={{ minWidth: 100 }}>
      <Input value={value} onChange={handleChange} label={label} />
    </Box>
  )
}

FiltersBuilderInputFilter.displayName = 'FiltersBuilderInputFilter'

export default FiltersBuilderInputFilter
