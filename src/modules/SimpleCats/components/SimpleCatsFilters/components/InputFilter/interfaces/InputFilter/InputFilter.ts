import { IBaseFilter } from '@/modules/SimpleCats/components/SimpleCatsFilters/interfaces'

export interface IInputFilter extends IBaseFilter {
  type: 'input'
  value: string | undefined
  onChange: (data: Record<string, string>) => void
}
