import React, { FC } from 'react'

import {
  FiltersBuilderBooleanFilter as BooleanFilter,
  FiltersBuilderInputFilter as InputFilter,
  FiltersBuilderSelectFilter as SelectFilter,
} from '@/common/builders/FiltersBuilder/modules/Body/containers'
import { TFiltersBuilderFilterConfig as TFilterConfig } from '@/common/builders/FiltersBuilder/types'

type TProps = { hasTheLastOrder: boolean } & TFilterConfig<any>

const FiltersBuilderFilter: FC<TProps> = (props) => {
  switch (props.type) {
    case 'boolean':
      return <BooleanFilter {...props} />

    case 'input':
      return <InputFilter {...props} />

    case 'select':
      return <SelectFilter {...props} />

    default:
      return <></>
  }
}

FiltersBuilderFilter.displayName = 'FiltersBuilderFilter'

export default FiltersBuilderFilter
