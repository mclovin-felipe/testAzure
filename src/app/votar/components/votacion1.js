'use client'
import { Box, Typography, Fade, Button, Stepper, Step, StepLabel, Paper, StepContent } from "@mui/material"
import { useState } from "react"
import * as React from 'react';
import Equipo from "./equipo";
import Companero from "./compañero";
import Resumen from "./resumen";
import Link from "next/link";
const Votacion1 = () => {
    const [open, setOpen] = useState(false);

    const [equipo, setEquipo] = useState("");
    const [companero, setCompanero] = useState("");
    const [resumen, seguirResumen] = useState({});
    const steps = [

        {
            label: 'Seleccionar compañero',
            description:
                'Elige a tu comapañero', children: <Companero setEquipo={setCompanero} equipo={companero} />
        },
        {
            label: 'Votar!',
            description: `Este es el resumen de tu votación, por favor asegurate de que no contenga errores`,
            children: <Resumen companero={companero} equipo={equipo} />
        },
    ];

    function VerticalLinearStepper() {
        const [activeStep, setActiveStep] = React.useState(0);

        const handleNext = () => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };

        const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };

        const handleReset = () => {
            setActiveStep(0);
        };

        return (
            <Box >
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={index}  >
                            <StepLabel
                                optional={
                                    index === 2 ? (
                                        <Typography variant="caption">Last step</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>

                                {step.children}
                                <Button
                                    onClick={handleNext}
                                    disabled={
                                        activeStep === 0 ? (companero === "" || companero === null) ? true : false : false
                                    }
                                    variant="outlined" sx={index === steps.length - 1 ? {
                                        borderRadius: 10, margin: 5, alignSelf: 'center'
                                    } : {}}
                                >
                                    {index === steps.length - 1 ? 'Votar' : 'Continuar'
                                    }
                                </Button>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {
                    activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>Felicitaciones, en el siguiente boton, podras seguir los resultados</Typography>
                            <Link href={'/resultados'} >
                                <Button onClick={handleReset} variant="outlined" sx={{ mt: 1, mr: 1 }}>
                                    Ir
                                </Button>
                            </Link>

                        </Paper>
                    )
                }
            </Box >
        );
    }
    return ([!open && <Button disabled={open} onClick={() => setOpen((prev) => !prev)} variant="outlined" sx={{ borderRadius: 1000, width: 100, height: 100, margin: 0, alignSelf: 'center' }} >COmenzar</Button>,
    <Fade in={open} >
        <Box width={"100%"} className=" p-5 rounded" >
            <VerticalLinearStepper />
        </Box>
    </Fade>]
    )
}



export default Votacion1