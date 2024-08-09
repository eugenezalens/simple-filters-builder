'use client'

import { Box, Button } from '@mui/material'
import React, { FC } from 'react'

import { useFiltersBuilderContext as useContext } from '@/common/builders/FiltersBuilder/context'

const FiltersBuilderFooter: FC = () => {
  const { applyFilters, clearFilters } = useContext()

  return (
    <Box display={'flex'} justifyContent={'flex-end'}>
      <Box display={'flex'} gap={1}>
        <Button onClick={clearFilters} variant={'contained'} color={'secondary'}>
          Очистить
        </Button>

        <Button onClick={applyFilters} variant={'contained'}>
          Применить
        </Button>
      </Box>
    </Box>
  )
}

FiltersBuilderFooter.displayName = 'FiltersBuilderFooter'

export default FiltersBuilderFooter
