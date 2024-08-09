'use client'

import React, { FC, useMemo } from 'react'

import { IGetCatListRequest as IRequest } from '@/api/cats/utils'
import FiltersBuilder from '@/common/builders/FiltersBuilder/FiltersBuilder'
import { IFiltersBuilderApplyFiltersHandler as IApplyFiltersHandler } from '@/common/builders/FiltersBuilder/interfaces'
import { TFiltersBuilderFilterConfig as IFilterConfig } from '@/common/builders/FiltersBuilder/types'

interface IProps {
  applyFilters: IApplyFiltersHandler<IRequest>
}

const CatsFilters: FC<IProps> = ({ applyFilters }) => {
  const filterList = useMemo<IFilterConfig<IRequest>[]>(() => {
    return [
      {
        type: 'boolean',
        id: 'hasOwner',
        label: 'Есть хозяин?',
        defaultValue: true,
      },
      {
        type: 'input',
        id: 'name',
        label: 'По кличке',
      },
      {
        type: 'select',
        id: 'age',
        label: 'По возрасту',
        optionList: [
          {
            label: '1 год',
            value: 1,
          },
          {
            label: '2 года',
            value: 2,
          },
          {
            label: '3 года',
            value: 3,
          },
          {
            label: '4 года',
            value: 4,
          },
        ],
      },
    ]
  }, [])

  return <FiltersBuilder header={{ title: 'Котики' }} filterList={filterList} applyFilters={applyFilters} />
}

CatsFilters.displayName = 'CatsFilters'

export default CatsFilters
