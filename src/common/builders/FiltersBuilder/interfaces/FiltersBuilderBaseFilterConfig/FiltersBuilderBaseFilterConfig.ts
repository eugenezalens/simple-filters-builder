import { TFiltersBuilderAppliedFilters as TAppliedFilters } from '@/common/builders/FiltersBuilder/types'

export interface IFiltersBuilderBaseFilterConfig<F extends TAppliedFilters<F>> {
  id: keyof F
  label: string
}
