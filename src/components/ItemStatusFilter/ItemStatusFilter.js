import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const ItemStatusFilter =()=>{
  return (
            <ButtonGroup
                variant="text"
                color= "default"
                component="div">
                <Button href="#">ALL</Button>
                <Button href="#">ACTIVE</Button>
                <Button href="#">DONE</Button>
            </ButtonGroup>
  );
};


export default ItemStatusFilter;
