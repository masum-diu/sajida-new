import { Stack, Typography } from '@mui/material'
import React from 'react'

function ConteactItemCard({image,title,description}) {
  return (
  
      <Stack direction={{md:"row",xs:"column"}} spacing={3} justifyContent={{xs:"center",md:"flex-start"}} alignItems={"center"} >
        <img src={image} alt="Contact Item" width={94} />
        <Stack justifyContent="center" >
          <Typography fontWeight={"bold"} textAlign={{xs:"center",md:"left"}} fontSize={28} color='#fff'>{title}</Typography>
          <Typography fontSize={20} color='#fff' textAlign={{xs:"center",md:"left"}} maxWidth={{md:271}}>{description}</Typography>
        </Stack>
    </Stack>
  )
}
export default ConteactItemCard