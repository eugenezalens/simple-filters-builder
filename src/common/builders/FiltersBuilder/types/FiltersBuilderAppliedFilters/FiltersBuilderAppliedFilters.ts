import { TFiltersBuilderAppliedFiltersValue as TValue } from '@/common/builders/FiltersBuilder/types'

export type TFiltersBuilderAppliedFilters<F> = Partial<Record<keyof F, TValue>>
