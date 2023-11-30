// components/Formulario.js
import React,{useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { Autocomplete, TextField,Divider, Typography, Button, Box, CircularProgress, Backdrop, Stack} from '@mui/material';
import Modal from './modal';
import {enviarInfoImportante,enviarUltimaNoticia, insertarNotificacion} from '../services/api'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'; 
import { isValid } from 'date-fns';

const Formulario = ({ campos,selectedOption }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('America/Santiago');
  const today = new Date();
  const fechaEnvio = dayjs().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
  const defaultTime = dayjs(today).set('hour', 8).set('minute', 0);
const shouldDisableTime = (value, view) => {
  const currentDateTime = dayjs();
 // Si la fecha seleccionada es la misma que la fecha actual y la hora ya ha pasado
  if (selectedDate.isSame(currentDateTime, 'day') && selectedDate.hour() < currentDateTime.hour()) {
    return true;
  }

  // Si la fecha seleccionada es antes de la fecha actual, deshabilitar todas las horas
  if (selectedDate.isBefore(currentDateTime, 'day')) {
    return true;
  }

  // Si la hora seleccionada está fuera del rango de trabajo (8 am a 6 pm)
  if (view === 'hours') {
    return selectedDate.hour() <8 || selectedDate.hour() >= 19;
  }

  return false;
};

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        setValue,
        setError,
        reset,
        formState: { errors},
      } = useForm({
        defaultValues: {
          titulo:"",
          mensaje:"",
          imageUrl:"",
          json:"",
        },
       
      });
  const onSubmit = async (data) => {
    if(selectedOption == "0_0" && selectedTopic.id == 1){
        try {
            const transformedData = {
                titulo: data.titulo || '', // Asegúrate de manejar valores nulos o indefinidos
                mensaje: data.mensaje || '',
                imageUrl: data.imageUrl || '',
                json: {
                  data: data.json || '',
                },
                topic: selectedTopic?.label
              };
            const dataToInsert ={
              topico:selectedTopic?.label,
              fechaEnvio:fechaEnvio,
              usuarioCrea:"manualTest",
              titulo:data.titulo,
              descripcion:data.mensaje,
              estado:1
            }
            setIsLoading(true)
            const response = await enviarInfoImportante(transformedData)
            if (response.status === 200) {
                    if (response.data){
                        setResponse(response.data)
                        if(response.data.codigoRespuesta == 0){
                          reset();
                          const response = await insertarNotificacion(dataToInsert)
                          if(response.data.result == "NOTIFICACION INGRESADA"){
                            setBackdrop(false)
                            console.log(response.data)
                          }
                        }
                    }
            }
          } catch (error) {
            console.error('Error inesperado:', error);
          }
    }else if(selectedOption == "0_0" && selectedTopic.id == 2){
      try {
        const transformedData = {
          };
        setIsLoading(true)
        const response = await enviarUltimaNoticia(transformedData)
        if (response.status === 200 && response.data.info) {
          const dataToInsert ={
            topico:selectedTopic?.label,
            usuarioCrea:"manualTest",
            titulo:response.data.info.title,
            descripcion:response.data.info.description,
            estado:1
          }
            setResponse(response.data)
            if(response.data.codigoRespuesta == 0){
              const responseInsert = await insertarNotificacion(dataToInsert)
              if(responseInsert.data.codigoRespuesta == 0){
                 setBackdrop(false)
                 reset();
              }


            }
        }
      } catch (error) {
        console.error('Error inesperado:', error);
      }
    }else if(selectedOption == 2 && selectedTopic.id ==1){
      try {
        const dataToInsert ={
          topico:selectedTopic?.label,
          fechaEnvio:selectedDate.format(),
          usuarioCrea:"manualTest",
          titulo:data.titulo,
          descripcion:data.mensaje,
          estado:0
        }
        setIsLoading(true)
        reset();
        const response = await insertarNotificacion(dataToInsert)
        if(response){
          setResponse(response.data)
        }
        if(response.data.result){
          setBackdrop(false)
        }

      } catch (error) {
        console.error('Error inesperado:', error);
      }
    }else if(selectedOption == 2 && selectedTopic.id == 2){

    }
  };

  const topics = [
    { label: 'informacionImportante', id: 1 },
    { label: 'noticiasRecientes', id: 2 },
  ];

  const [mostrarCamposOpcionales, setMostrarCamposOpcionales] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [isLoading, setIsLoading] = useState(false)
  const [backdrop, setBackdrop] = useState(true)
  const [response,setResponse] = useState(null)
  const [selectedDate, setSelectedDate] = useState(defaultTime);
  const validateDateTime = (value) => {
    const selectedDateTime = selectedDate;
    const currentDateTime = dayjs();
  
    // Validación personalizada: No permitir fechas y horas en el pasado
    if (selectedDateTime.isBefore(currentDateTime)) {
      return false;
    }
    return true; // Retorna true si la validación pasa
  };
  const toggleCamposOpcionales = () => {
    setMostrarCamposOpcionales(!mostrarCamposOpcionales);
  };

  const ValidacionesGLobales = {
    required: true,
    maxLength:100,
    minLength: 10,
  };

  const renderCamposRequeridos = () => {
    return campos
      .filter((campo) => !campo.optional)
      .map((campo) => (
        <Box sx={{ width: '100%' }} key={campo.key} mb={2}>
        <Typography mb={1}>{campo.title}</Typography>
          <TextField
            {...register(campo.value, { ...ValidacionesGLobales })}
            label={campo.label}
            variant="outlined"
            fullWidth
            error={!!errors[campo.value]}
            helperText={errors[campo.value]?.message}
          />

        </Box>
      ));

  };

  const renderCamposOpcionales = () => {
    if (!mostrarCamposOpcionales) {
      return null;
    }

    return campos
      .filter((campo) => campo.optional)
      .map((campo) => (
        <Box sx={{ width: '100%' }} key={campo.key} mb={2}>
        <Typography mb={1}>{campo.title}</Typography>
          <TextField
            {...register(campo.value)}
            label={campo.label}
            variant="outlined"
            fullWidth
          />
        </Box>
      ));
  };

  const handleOkClick = () => {
    setIsLoading(false)
    setBackdrop(false)
  };

const disableButtonProgramar = watch("titulo")=="" || watch("mensaje")=="" || !validateDateTime(selectedDate)
const disableButtonEnviar= watch("titulo")=="" || watch("mensaje")==""
  return (
    
    <Box width={'40%'} height={'80vh'} mt={2}>
          {isLoading && <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={backdrop}
            >
            <CircularProgress color="inherit" />
            </Backdrop>}
            {isLoading == true && 
            backdrop == false && 
            response != null && <Modal response={response} onOkClick={handleOkClick}/>}
      {selectedTopic.id==1 ? renderCamposRequeridos():null}
      <Typography mb={1}> Tópico</Typography>
      { (selectedOption == "0_0" || selectedOption == 2) && 
      <Autocomplete
      disablePortal
      disableClearable
      value={selectedTopic}
      onChange={(event, newValue) => setSelectedTopic(newValue)}
      id="combo-box-demo"
      options={topics}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="" />}
      />}
      {selectedOption == 2 &&
      <Box>
      <Typography mb={1} mt={2}> Fecha y hora de envío</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} sx={{ minWidth: 305 }}>
        <DateTimePicker
        {...register('selectedDate', {
          required: true,
          validate: validateDateTime
        })}
        shouldDisableTime={shouldDisableTime}
        skipDisabled
        value={selectedDate}
        format="DD-MM-YYYY HH:mm"
        minDate={dayjs(today)}
        minutesStep={60}
        onChange={setSelectedDate}
        ampm={false}
        minTime={dayjs('2022-04-17T08:00')}
        maxTime={dayjs('2022-04-17T18:30')}
        />
      </Stack>
    </LocalizationProvider>
    </Box>     }
      {selectedTopic.id==1  ? <Divider sx={{padding:"5px"}}><Button variant="text" color="primary" onClick={toggleCamposOpcionales}>
        {mostrarCamposOpcionales ? 'Ocultar Campos Opcionales' : 'Mostrar Campos Opcionales'}
      </Button>
      </Divider>: null}
      {renderCamposOpcionales()}
      {selectedOption == "0_0" ? 
      <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)} disabled={disableButtonEnviar} sx={{marginTop:"1rem"}}>
        Enviar
      </Button> : 
      <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)} disabled={disableButtonProgramar} sx={{marginTop:"1rem"}}>
        Programar
      </Button>     
}

    </Box>

  );
};

export default Formulario;
