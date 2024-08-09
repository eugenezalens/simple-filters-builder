'use client'

import { Box } from '@mui/material'
import React, { FC, useState } from 'react'

import { ICat } from '@/api/cats/models/Cat'
import { getCatList, IGetCatListRequest as IRequest } from '@/api/cats/utils'
import { IFiltersBuilderApplyFiltersHandler as IApplyFiltersHandler } from '@/common/builders/FiltersBuilder/interfaces'
import { CatList } from '@/common/components'
import { CatsFilters } from '@/modules/Cats/components'

const Cats: FC = () => {
  const [catList, setCatList] = useState<ICat[]>([])

  const applyFilters: IApplyFiltersHandler<IRequest> = (filters) => {
    const fetchedCatList = getCatList(filters)
    setCatList(fetchedCatList)
  }

  return (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <CatsFilters applyFilters={applyFilters} />
      <CatList catList={catList} />
    </Box>
  )
}

Cats.displayName = 'Cats'

export default Cats
