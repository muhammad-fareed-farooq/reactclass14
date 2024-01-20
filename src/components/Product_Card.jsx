import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Product_Card = ({ data }) => {

    const param = useNavigate()

    // const Click_Hnadle =()=>{
    //     console.log( "click",param);
    // }


    const { title, price, description, images, category: { name, image } } = data
    return (
        <Card elevation={1} className=''>
            <CardMedia
                className='aspect-square w-full object-cover'
                image={images[0]}
                title={title}
            />
            <CardContent className='space-y-6'>


                <Stack>
                    <Typography noWrap gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.substring(0, 45)}...
                    </Typography>
                </Stack>


                <Stack flexDirection='row' alignItems='center' gap={1}>
                    <Avatar sx={{ width: 24, height: 24 }} alt={name} src={image} />
                    <Typography>
                        {name}
                    </Typography>
                </Stack>



                <Stack  >

                  
                 
                   <Link to={`/product/${title}`}>
                   <Typography variant="body" fontWeight='bold' className='text-3xl font-bold text-orange-400' >
                        ${price}
                    </Typography>
                    </Link>
                </Stack>



            </CardContent>

        </Card>
    )
}
