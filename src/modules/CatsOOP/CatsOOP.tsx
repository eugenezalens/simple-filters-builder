'use client'

import { Box } from '@mui/material'
import React, { FC, useState } from 'react'

import { Animal, EvolvedAnimal } from '@/modules/CatsOOP/components'

const CatsOOP: FC = () => {
  const [isShowAnimal, setIsShowAnimal] = useState<boolean>(true)
  const [firstCat, setFirstCat] = useState<string>('/assets/icons/cat-sitting.svg')
  const [secondCat, setSecondCat] = useState<string>('/assets/icons/cat-lying-down.svg')

  const handleAnimalClick = (): void => {
    setFirstCat('/assets/icons/cat-pissed.svg')
    setSecondCat('/assets/icons/cat-scared.svg')

    setIsShowAnimal(false)
  }

  const handleSecondCatClick = (): void => {
    setSecondCat('/assets/icons/cat-play.svg')
  }

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      {isShowAnimal ? (
        <EvolvedAnimal
          name={'Нечто'}
          skin={'/assets/icons/cat-eyes.svg'}
          width={200}
          height={200}
          soundText={'Бу-бу-бу'}
          onClick={handleAnimalClick}
        />
      ) : null}

      <Animal name={'Кот'} skin={firstCat} width={200} height={200} soundText={'Мяу'} />

      <EvolvedAnimal
        name={'Кошка'}
        skin={secondCat}
        width={200}
        height={200}
        soundText={'Мяу-мяу'}
        onClick={handleSecondCatClick}
      />
    </Box>
  )
}

CatsOOP.displayName = 'CatsOOP'

export default CatsOOP
