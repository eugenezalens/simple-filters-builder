import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { IFiltersBuilderApplyFiltersHandler as IApplyFiltersHandler } from '@/common/builders/FiltersBuilder/interfaces'
import { TFiltersBuilderAppliedFilters as TAppliedFilters } from '@/common/builders/FiltersBuilder/types'

interface IContextState {
  appliedFilters: TAppliedFilters<any>
  setAppliedFilters: Dispatch<SetStateAction<TAppliedFilters<any>>>
  applyFilters: () => void
  clearFilters: () => void
  initFilters: () => void
}

interface IProviderProps {
  applyFilters: IApplyFiltersHandler<any>
}

const Context = createContext<IContextState>({
  appliedFilters: {},
  setAppliedFilters: () => null,
  applyFilters: () => null,
  clearFilters: () => null,
  initFilters: () => null,
})

export const useFiltersBuilderContext = (): IContextState => {
  const context = useContext(Context)

  return context
}

export const FiltersBuilderContextProvider: FC<PropsWithChildren<IProviderProps>> = ({ applyFilters, children }) => {
  const [isInit, setIsInit] = useState<boolean>(false)
  const [appliedFilters, setAppliedFilters] = useState<TAppliedFilters<any>>({})

  useEffect(() => {
    if (!isInit) return

    applyFilters(appliedFilters)
    setIsInit(false)
  }, [isInit])

  const handleApply = useCallback<IContextState['applyFilters']>(() => {
    applyFilters(appliedFilters)
  }, [applyFilters, appliedFilters])

  const handClear = useCallback<IContextState['clearFilters']>(() => {
    setAppliedFilters({})
    applyFilters({})
  }, [applyFilters, setAppliedFilters])

  const handleInit = useCallback<IContextState['initFilters']>(() => {
    setIsInit(true)
  }, [setIsInit])

  const contextValue = useMemo<IContextState>(() => {
    return {
      appliedFilters,
      setAppliedFilters,
      applyFilters: handleApply,
      clearFilters: handClear,
      initFilters: handleInit,
    }
  }, [appliedFilters, handleApply, handClear, handleInit])

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
