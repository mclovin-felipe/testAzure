"use client"
import {Box, Drawer, List, ListItem, ListItemText, ListItemButton, Divider, Collapse } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import MenuItem from './menuItem';

const MenuLateral = ({handleMenuClick}) => {
    const Rutas = [
        ["Enviar Notificación", 0],
        ["Historial de Notificaciones", 1],
        ["Programar Notificación", 2],
      ];
    const list = () => (
        <Box
        sx={{
          width: 300,
          height: "100%",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        role="presentation"
      >
        <List sx={{ marginTop: 0 }}>
        <ListItem>
            <ListItemText sx={{textAlign:"center"}} primary="Tablero"></ListItemText>
        </ListItem>
        <Divider/>
          {Rutas.map((text, index) => (
            <MenuItem
                handleMenuClick={handleMenuClick}
                key={index} 
                text={text}
                subMenuItems={[
                    <ListItemButton
                        key={12}
                        text={"Suscritos a Tópico"}
                    >
                        <ListItemText primary="Suscritos a Tópico" />
                    </ListItemButton>,
                ]}
            />
          ))}
        </List>
      </Box>
    )
  return (
    <Drawer anchor="left" open={true} variant="permanent">
      {list()}
    </Drawer>
  );
};

export default MenuLateral;
