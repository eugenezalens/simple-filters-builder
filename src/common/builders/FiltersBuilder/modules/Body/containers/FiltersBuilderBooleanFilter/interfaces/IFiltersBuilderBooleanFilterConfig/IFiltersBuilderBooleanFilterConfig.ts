import { IFiltersBuilderBaseFilterConfig as IBaseFilterConfig } from '@/common/builders/FiltersBuilder/interfaces'
import { TFiltersBuilderAppliedFilters as TAppliedFilters } from '@/common/builders/FiltersBuilder/types'

export interface IFiltersBuilderBooleanFilterConfig<F extends TAppliedFilters<F>> extends IBaseFilterConfig<F> {
  type: 'boolean'
  defaultValue?: boolean
}
