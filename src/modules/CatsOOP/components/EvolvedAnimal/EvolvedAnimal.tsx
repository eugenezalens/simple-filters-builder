import { Box } from '@mui/material'
import React, { FC } from 'react'

import { Animal } from '@/modules/CatsOOP/components'
import { IEvolvedAnimal } from '@/modules/CatsOOP/components/EvolvedAnimal/interfaces'

const EvolvedAnimal: FC<IEvolvedAnimal> = ({ onClick, ...animalProps }) => {
  return (
    <Box onClick={onClick} sx={{ cursor: 'pointer' }}>
      <Animal {...animalProps} />
    </Box>
  )
}

EvolvedAnimal.displayName = 'EvolvedAnimal'

export default EvolvedAnimal
