import { IFiltersBuilderBooleanFilterConfig as IBooleanConfig } from '@/common/builders/FiltersBuilder/modules/Body/containers/FiltersBuilderBooleanFilter/interfaces'
import { IFiltersBuilderInputFilterConfig as IInputConfig } from '@/common/builders/FiltersBuilder/modules/Body/containers/FiltersBuilderInputFilter/interfaces'
import { IFiltersBuilderSelectFilterConfig as ISelectConfig } from '@/common/builders/FiltersBuilder/modules/Body/containers/FiltersBuilderSelectFilter/interfaces'
import { TFiltersBuilderAppliedFilters as TAppliedFilters } from '@/common/builders/FiltersBuilder/types'

export type TFiltersBuilderFilterConfig<F extends TAppliedFilters<F>> =
  | IBooleanConfig<F>
  | ISelectConfig<F>
  | IInputConfig<F>
