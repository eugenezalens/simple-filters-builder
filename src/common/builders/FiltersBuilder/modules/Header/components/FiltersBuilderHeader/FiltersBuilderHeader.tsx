'use client'

import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { FC, memo } from 'react'

import { IFiltersBuilderHeader as IHeader } from '@/common/builders/FiltersBuilder/modules/Header/interfaces'

const FiltersBuilderHeader: FC<IHeader> = ({ title }) => {
  return (
    <Box borderBottom={`1px solid ${grey[400]}`}>
      <Typography color={grey[700]} fontSize={18} fontWeight={'bold'} paddingBottom={1}>
        {title}
      </Typography>
    </Box>
  )
}

FiltersBuilderHeader.displayName = 'FiltersBuilderHeader'

export default memo(FiltersBuilderHeader)
