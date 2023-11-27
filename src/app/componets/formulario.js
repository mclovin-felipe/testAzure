// components/Formulario.js
import React,{useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { Autocomplete, TextField,Divider, Typography, Button, Box, CircularProgress, Backdrop } from '@mui/material';
import Modal from './modal';
import {enviarInfoImportante,enviarUltimaNoticia, insertarNotificacion} from '../services/api'
const Formulario = ({ campos,selectedOption }) => {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        setValue,
        setError,
        reset,
        formState: { errors },
      } = useForm({
        defaultValues: {
          titulo:"",
          mensaje:"",
          imageUrl:"",
          json:""
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

  const toggleCamposOpcionales = () => {
    setMostrarCamposOpcionales(!mostrarCamposOpcionales);
  };

  const ValidacionesGLobales = {
    required: true,
    maxLength: 60,
    minLength: 1,
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
      { selectedOption == "0_0" && 
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
      {selectedTopic.id==1  ? <Divider sx={{padding:"5px"}}><Button variant="text" color="primary" onClick={toggleCamposOpcionales}>
        {mostrarCamposOpcionales ? 'Ocultar Campos Opcionales' : 'Mostrar Campos Opcionales'}
      </Button>
      </Divider>: null}
      {renderCamposOpcionales()}
      <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)} sx={{marginTop:"1rem"}}>
        Enviar
      </Button>
    </Box>

  );
};

export default Formulario;
