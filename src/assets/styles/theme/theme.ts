'use client'

import { createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['latin'], display: 'swap' })

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2E8B57',
    },
    secondary: {
      main: '#CD5C5C',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})
