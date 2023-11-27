"use client"
import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import MenuLateral from '@/app/componets/menuLateral';
import Formulario from '@/app/componets/formulario';
import HomeContent from '@/app/componets/homeContent';
import HistorialNotificaciones from '@/app/componets/historalNotificaciones'

const Home = () => {
  const camposPorTopico = [
    { key: 0, title:"Título", value:"titulo", label: 'Titulo de la notificación' },
    { key: 1, title:"Mensaje", value:"mensaje", label: 'Cuerpo de la notificación' },
    { key: 2, title:"URL de la imagen", value:"imageUrl", label: 'Example: https://www.institutoncologicofalp.cl/wp-content/uploads/2023/03/LOGO-FALP-ok.png', optional:true },
    { key: 3, title:"JSON", value:"json", label: 'Example: "data":"jasonData","data":"jasonData","data":"jasonData"', optional:true},

  ];

    const [selectedOption, setSelectedOption] = useState(null);
    const renderContent = () => {
        switch (selectedOption) {
          case 1:
            return (
              <Container sx={{display:"flex", flexDirection:"column", alignItems:"center", alignContent:"center"}}>
                <Typography variant="h4" gutterBottom>
                  Historial de notificaciones
                </Typography>
                <HistorialNotificaciones/>
              </Container>
              )
          case 2:
            return <div>hola2</div>;
        case "0_0":
            return (
            <Container sx={{display:"flex", flexDirection:"column", alignItems:"center", alignContent:"center"}}>
              <Typography variant="h4" gutterBottom>
                Enviar notificación a todos los dispositivos
              </Typography>
              <Formulario campos={camposPorTopico} selectedOption={selectedOption}/>
          </Container>
          );
          default:
            return (
              <Container sx={{display:"flex", flexDirection:"column", alignItems:"center", alignContent:"center"}}>
                <HomeContent/>
              </Container>
            );
        }
      };
  return (
    <React.Fragment>
      <Grid container spacing={2} sx={{alignContent:"center", alignItems:"center"}}>
        <Grid item md={2}>
          <MenuLateral handleMenuClick={setSelectedOption}/>
        </Grid>
        <Grid item md={10} sx={{marginTop:"5rem"}} >
        {renderContent()}
        </Grid>
      </Grid>
   </React.Fragment>
    
  );
};

export default Home;