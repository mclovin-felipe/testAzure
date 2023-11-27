'use client'
import { Box, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { personas } from './person'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
const Equipo = ({ equipo, setEquipo }) => {
    console.log(personas)
    const equipoPersonas = personas.map(p => p.label.toLocaleUpperCase())
    return (
        <Box width={'50%'} className={"m-10"}  >
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={equipo}
                onChange={(event, newValue) => setEquipo(newValue)}
                options={equipoPersonas}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label={"Compañero"} />}
            />
        </Box>
    );
}
export default Equipo;