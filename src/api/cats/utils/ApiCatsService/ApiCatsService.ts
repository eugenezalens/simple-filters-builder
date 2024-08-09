import { ICat } from '@/api/cats/models/Cat'
import { MOCK_CAT_LIST } from '@/api/cats/utils/mock'

export interface IGetCatListRequest {
  name?: string
  age?: number
  hasOwner?: boolean
}

const filterCatList = ({ name, age, hasOwner }: IGetCatListRequest): ICat[] => {
  return MOCK_CAT_LIST.filter((cat) => {
    const conditionList: boolean[] = []

    if (name !== undefined) {
      const trimmedName = name.trim()

      if (!trimmedName) conditionList.push(true)
      else conditionList.push(cat.name.toLowerCase().includes(trimmedName.toLowerCase()))
    }

    if (age !== undefined) {
      conditionList.push(cat.age === age)
    }

    if (hasOwner !== undefined) {
      conditionList.push(cat.hasOwner === hasOwner)
    }

    if (!conditionList.length) return true

    return conditionList.every(Boolean)
  })
}

export const getCatList = (request: IGetCatListRequest): ICat[] => {
  const hasReq = !(Object.keys(request).length === 0)

  if (!hasReq) return MOCK_CAT_LIST

  return filterCatList(request)
}
