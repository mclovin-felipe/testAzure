'use client'
import { Box, MenuItem, Select } from "@mui/material";
import { useState } from "react";
const Equipo = ({ equipo, setEquipo }) => {
    return (
        <Box width={'50%'} className={"m-10"}  >
            <Select fullWidth onChange={(e) => setEquipo(e.target.value)} value={equipo} >
                <MenuItem key={0} value={"Transversales"} >Transversales</MenuItem>
            </Select>
        </Box>
    );
}
export default Equipo;