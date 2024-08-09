import { TFiltersBuilderAppliedFilters as TAppliedFilters } from '@/common/builders/FiltersBuilder/types'

export interface IFiltersBuilderApplyFiltersHandler<F extends TAppliedFilters<F>> {
  (filters: F): void
}
