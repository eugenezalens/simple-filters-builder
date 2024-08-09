import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'

import { ICat } from '@/api/cats/models/Cat'

interface IProps {
  catList: ICat[]
}

const CatList: FC<IProps> = ({ catList }) => {
  return (
    <TableContainer component={Paper} style={{ boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.1)' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={'25px'} />
            <TableCell>Кличка</TableCell>
            <TableCell>Цвет</TableCell>
            <TableCell>Возраст</TableCell>
            <TableCell>Хозяин</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {catList.map((cat) => (
            <TableRow key={cat.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {cat.hasOwner ? (
                  <Image width={25} height={25} src={'/assets/icons/cat-face.svg'} alt={'cat-face'} />
                ) : (
                  <Image width={25} height={25} src={'/assets/icons/cat-in-the-circle.svg'} alt={'cat-in-the-circle'} />
                )}
              </TableCell>
              <TableCell>{cat.name}</TableCell>
              <TableCell>{cat.color}</TableCell>
              <TableCell>{cat.age}</TableCell>
              <TableCell>{cat.hasOwner ? 'Уже есть ^^' : 'Очень нужен :('}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

CatList.displayName = 'CatList'

export default CatList
