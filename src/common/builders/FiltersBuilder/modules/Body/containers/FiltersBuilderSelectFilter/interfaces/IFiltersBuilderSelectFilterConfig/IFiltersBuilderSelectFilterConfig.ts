import { IFiltersBuilderBaseFilterConfig as IBaseFilterConfig } from '@/common/builders/FiltersBuilder/interfaces'
import { TFiltersBuilderAppliedFilters as TAppliedFilters } from '@/common/builders/FiltersBuilder/types'
import { ISelectOption } from '@/common/components/Select/Select'

export interface IFiltersBuilderSelectFilterConfig<F extends TAppliedFilters<F>> extends IBaseFilterConfig<F> {
  type: 'select'
  defaultValue?: string
  optionList?: ISelectOption[]
}
