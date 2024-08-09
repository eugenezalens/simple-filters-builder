'use client'

import { Box } from '@mui/material'
import React, { FC } from 'react'

import { FiltersBuilderFilter as Filter } from '@/common/builders/FiltersBuilder/modules/Body/components'
import { TFiltersBuilderFilterConfig } from '@/common/builders/FiltersBuilder/types'

interface IProps {
  filterList: TFiltersBuilderFilterConfig<any>[]
}

const FiltersBuilderBody: FC<IProps> = ({ filterList }) => {
  return (
    <Box display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} gap={1}>
      {filterList.map((filter, i) => (
        <Filter key={filter.id as string} {...filter} hasTheLastOrder={i === filterList.length - 1} />
      ))}
    </Box>
  )
}

FiltersBuilderBody.displayName = 'FiltersBuilderBody'

export default FiltersBuilderBody
