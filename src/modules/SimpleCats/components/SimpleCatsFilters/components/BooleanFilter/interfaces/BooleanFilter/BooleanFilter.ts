import { IBaseFilter } from '@/modules/SimpleCats/components/SimpleCatsFilters/interfaces'

export interface IBooleanFilter extends IBaseFilter {
  type: 'boolean'
  value: boolean | undefined
  onChange: (data: Record<string, boolean>) => void
}
