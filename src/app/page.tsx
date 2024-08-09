import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { NextPage } from 'next'
import Image from 'next/image'

import { Cats } from '@/modules'

import styles from './page.module.css'

const Home: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <Image width={60} height={60} src={'/assets/icons/logo.svg'} alt={'logo'} priority />
      </header>

      <main className={styles.main}>
        <Box minWidth={'920px'}>
          <Cats />
        </Box>
      </main>

      <footer className={styles.footer}>
        <Typography color={grey[600]} fontWeight={'bold'}>
          @eugenezalens
        </Typography>
      </footer>
    </>
  )
}

Home.displayName = 'Home'

export default Home
