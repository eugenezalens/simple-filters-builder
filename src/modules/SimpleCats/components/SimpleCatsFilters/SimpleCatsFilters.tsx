import { Box, Button, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { FC, useEffect, useState } from 'react'

import { IGetCatListRequest as IRequest } from '@/api/cats/utils'
import { Filter } from '@/modules/SimpleCats/components/SimpleCatsFilters/components'

interface IProps {
  applyFilters: (appliedFilters: IRequest) => void
}

const SimpleCatsFilters: FC<IProps> = ({ applyFilters }) => {
  const [appliedFilters, setAppliedFilters] = useState<IRequest>({
    hasOwner: true,
  })

  useEffect(() => {
    applyFilters({
      hasOwner: true,
    })
  }, [])

  const handleApply = (): void => {
    applyFilters(appliedFilters)
  }

  const handleClear = (): void => {
    setAppliedFilters({})
    applyFilters({})
  }

  const handleChange = (data: Partial<IRequest>): void => {
    setAppliedFilters((prev) => ({ ...prev, ...data }))
  }

  return (
    <Box
      bgcolor={'white'}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
      padding={2}
      borderRadius={2}
      boxShadow={'0 2px 6px 0 rgba(0, 0, 0, 0.1)'}
    >
      <Box borderBottom={`1px solid ${grey[400]}`}>
        <Typography color={grey[700]} fontSize={18} fontWeight={'bold'} paddingBottom={1}>
          Котики
        </Typography>
      </Box>

      <Box display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} gap={1}>
        <Filter
          filter={{
            type: 'boolean',
            id: 'hasOwner',
            label: 'Есть хозяин?',
            value: appliedFilters?.hasOwner,
            onChange: handleChange,
          }}
        />

        <Filter
          filter={{
            type: 'input',
            id: 'name',
            label: 'По кличке',
            value: appliedFilters?.name,
            onChange: handleChange,
          }}
        />

        <Filter
          filter={{
            type: 'select',
            id: 'age',
            label: 'По возрасту',
            value: appliedFilters?.age,
            onChange: handleChange,
            optionList: [
              {
                label: '1 год',
                value: 1,
              },
              {
                label: '2 года',
                value: 2,
              },
              {
                label: '3 года',
                value: 3,
              },
              {
                label: '4 года',
                value: 4,
              },
            ],
          }}
        />
      </Box>

      <Box display={'flex'} justifyContent={'flex-end'}>
        <Box display={'flex'} gap={1}>
          <Button onClick={handleClear} variant={'contained'} color={'secondary'}>
            Очистить
          </Button>

          <Button onClick={handleApply} variant={'contained'}>
            Применить
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

SimpleCatsFilters.displayName = 'SimpleCatsFilters'

export default SimpleCatsFilters
