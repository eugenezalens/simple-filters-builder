'use client'

import { Box } from '@mui/material'
import React, { FC } from 'react'

import { FiltersBuilderContextProvider as ContextProvider } from '@/common/builders/FiltersBuilder/context'
import { IFiltersBuilderApplyFiltersHandler } from '@/common/builders/FiltersBuilder/interfaces'
import { FiltersBuilderBody as Body } from '@/common/builders/FiltersBuilder/modules/Body/components'
import { FiltersBuilderFooter as Footer } from '@/common/builders/FiltersBuilder/modules/Footer/components'
import { FiltersBuilderHeader as Header } from '@/common/builders/FiltersBuilder/modules/Header/components'
import { IFiltersBuilderHeader as IHeader } from '@/common/builders/FiltersBuilder/modules/Header/interfaces'
import { TFiltersBuilderFilterConfig } from '@/common/builders/FiltersBuilder/types'

interface IProps {
  header: IHeader
  filterList: TFiltersBuilderFilterConfig<any>[]
  applyFilters: IFiltersBuilderApplyFiltersHandler<any>
}

const FiltersBuilder: FC<IProps> = ({ header, filterList, applyFilters }) => {
  return (
    <ContextProvider applyFilters={applyFilters}>
      <Box
        bgcolor={'white'}
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        padding={2}
        borderRadius={2}
        boxShadow={'0 2px 6px 0 rgba(0, 0, 0, 0.1)'}
      >
        <Header {...header} />
        <Body filterList={filterList} />
        <Footer />
      </Box>
    </ContextProvider>
  )
}

FiltersBuilder.displayName = 'FiltersBuilder'

export default FiltersBuilder
