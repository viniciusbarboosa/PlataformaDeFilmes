import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Rating, Chip } from '@mui/material';


const CardDeFilmes = ({ title, description, genre, rating, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
    <CardMedia
      component="img"
      height="140"
      image={imageUrl}
      alt={title}
    />
    <CardContent>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Box component="fieldset" borderColor="transparent">
        <Typography component="legend">Rating</Typography>
        <Rating name="read-only" value={rating} readOnly />
      </Box>
      <Chip label={genre} color="primary" />
    </CardContent>
  </Card>
  )
}

export default CardDeFilmes