import React, { FC } from 'react'

import { BooleanFilter, InputFilter, SelectFilter } from '@/modules/SimpleCats/components/SimpleCatsFilters/components'
import { TFilter } from '@/modules/SimpleCats/components/SimpleCatsFilters/types'

interface IProps {
  filter: TFilter
}

const Filter: FC<IProps> = ({ filter }) => {
  switch (filter.type) {
    case 'boolean':
      return <BooleanFilter {...filter} />

    case 'input':
      return <InputFilter {...filter} />

    case 'select':
      return <SelectFilter {...filter} />

    default:
      return <></>
  }
}

Filter.displayName = 'Filter'

export default Filter
