import React from 'react';
import { Flex } from '../../styles/Flex';
import { Card, CardContent, Typography } from '@mui/material';
import { ICard } from './../../interfaces/ICard';

export const Product = ({ id, name, race }: ICard) => {
  return (
    <Card raised={true} sx={{ bgcolor: 'background.paper' }}>
      <CardContent>
        <Flex
          width={'100%'}
          direction={'column'}
          style={{ width: '25vw' }}
          align={'flex-start'}
          justify={'space-between'}
        >
          <Typography gutterBottom variant="h5" component="div">
            {id}
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {race}
          </Typography>

          <Typography variant="body1"></Typography>

          <Typography variant="body2"></Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        </Flex>
      </CardContent>
    </Card>
  );
};
