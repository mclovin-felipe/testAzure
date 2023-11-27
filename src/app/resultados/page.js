'use client'
import { Box, TextField, Typography, Grid, CardContent, CardActionArea } from "@mui/material";
import Card from '@mui/material/Card';
import { useState } from "react";
const Page = () => {
    const [busqueda, setBusqueda] = useState("");
    const equipos = [
        'Transversales',
        'Casa',
        'Oficina',
        'Transversales',
        'Casa',
        'Oficina', 'Transversales',
        'Casa',
        'Oficina', 'Transversales',
        'Casa',
        'Oficina'
        , 'Transversales',
        'Casa',
        'Oficina'
    ]
    return (
        <div className="flex flex-col space-y-3 p-3" >
            <h2 className="text-5xl font-bold  " >Resultados</h2>
            <Box p={5} >
                <Typography>Aca podras seguir los resultados</Typography>
                <TextField label="Equipo" variant="standard" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
                <Grid container p={5} spacing={2}>
                    {equipos.filter((item, index) =>
                        item.toLowerCase().includes(busqueda.toLowerCase())).map((item, index) =>
                            <Grid item sm={12} xs={12} md={3}  >
                                <Card className="bg-blue-100" >
                                    <CardActionArea onClick={() => console.log("buenas")} >
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                {item}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Equipo
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>)}

                </Grid>
            </Box>
        </div>
    )
}
export default Page;