import { ISelectOption } from '@/common/components/Select/Select'
import { IBaseFilter } from '@/modules/SimpleCats/components/SimpleCatsFilters/interfaces'

export interface ISelectFilter extends IBaseFilter {
  type: 'select'
  value: ISelectOption['value'] | undefined
  onChange: (data: Record<string, ISelectOption['value']>) => void
  optionList?: ISelectOption[]
}
