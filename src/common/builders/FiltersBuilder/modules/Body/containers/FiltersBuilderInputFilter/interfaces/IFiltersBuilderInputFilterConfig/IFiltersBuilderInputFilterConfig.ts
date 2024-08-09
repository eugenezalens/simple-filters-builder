import { IFiltersBuilderBaseFilterConfig as IBaseFilterConfig } from '@/common/builders/FiltersBuilder/interfaces'
import { TFiltersBuilderAppliedFilters as TAppliedFilters } from '@/common/builders/FiltersBuilder/types'

export interface IFiltersBuilderInputFilterConfig<F extends TAppliedFilters<F>> extends IBaseFilterConfig<F> {
  type: 'input'
  defaultValue?: string
}
