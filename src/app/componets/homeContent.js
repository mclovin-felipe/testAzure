import React from 'react';
import {Grid, Typography} from '@mui/material';

const HomeContent = () => {

  return (      
         <Grid container spacing={2} direction={"column"} sx={{alignContent:"center", alignItems:"center"}}>
            <Grid item xs={12} sx={{marginLeft:"5rem"}}>
                <Typography variant="h1">
                    Bienvenido al portal de notificaciones
                </Typography>
            </Grid>
        </Grid>
     

  );
};

export default HomeContent;
