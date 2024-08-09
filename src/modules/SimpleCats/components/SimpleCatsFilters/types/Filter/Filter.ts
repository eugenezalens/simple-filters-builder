import { IBooleanFilter } from '@/modules/SimpleCats/components/SimpleCatsFilters/components/BooleanFilter/interfaces'
import { IInputFilter } from '@/modules/SimpleCats/components/SimpleCatsFilters/components/InputFilter/interfaces'
import { ISelectFilter } from '@/modules/SimpleCats/components/SimpleCatsFilters/components/SelectFilter/interfaces'

export type TFilter = IBooleanFilter | IInputFilter | ISelectFilter
