'use client'

import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import Image from 'next/image'
import React, { FC, useState } from 'react'

import { IAnimal } from '@/modules/CatsOOP/components/Animal/interfaces'

const Animal: FC<IAnimal> = ({ name, skin, width, height, soundText }) => {
  const [isShowSoundText, setIsShowSoundText] = useState<boolean>(false)

  const handleMouseOver = (): void => {
    setTimeout(() => {
      setIsShowSoundText(true)

      setTimeout(() => {
        setIsShowSoundText(false)
      }, 1500)
    }, 350)
  }

  return (
    <Box display={'flex'} flexDirection={'column'} position={'relative'}>
      {isShowSoundText ? (
        <Box
          position={'absolute'}
          bgcolor={'white'}
          borderRadius={2}
          padding={2}
          boxShadow={'0 2px 6px 0 rgba(0, 0, 0, 0.1)'}
        >
          <Typography fontWeight={'bold'} align={'center'}>
            {soundText}
          </Typography>
        </Box>
      ) : null}

      <Typography color={grey[600]} fontWeight={'bold'} align={'center'}>
        {name}
      </Typography>

      <Image width={width} height={height} src={skin} alt={'animal'} onMouseOver={handleMouseOver} />
    </Box>
  )
}

Animal.displayName = 'Animal'

export default Animal
