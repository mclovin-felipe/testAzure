import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import {Box,Divider} from '@mui/material';
import toolbar from './toolBar';
import { localtext } from '../services/localText';
import { obtenerNotificacion } from '../services/api';
import format from 'date-fns/format';

const HistorialNotificaciones =() =>{
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await obtenerNotificacion(1);
      if (response && response.status === 200) {
        setData(response.data.result); // Ajusta según la estructura de tu respuesta
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };
  useEffect(() => {
    // Llama a la función para obtener los datos al cargar el componente
    fetchData();
  }, []);

  const formatDate = (dateString) => format(new Date(dateString), 'dd-MM-yyyy');
  const formatTime = (dateString) => format(new Date(dateString), 'HH:mm:ss');
  const formatState = (dateString) => dateString == 1 ? "Enviado" : "Enviado";
    const columns = [
        { field: 'CORRELATIVO', headerName: 'ID', width: 10 },
        {field:'TITULO', headerName: 'TITULO', width: 130},
        {field:'DESCRIPCION', headerName: 'MENSAJE', width: 130},
        { field: 'TOPICO', headerName: 'TIPO', width: 130 },
        { field: 'FECHA_CREACION', headerName: 'F_REACION', width: 130, valueGetter: (params) => formatDate(params.row.FECHA_CREACION)},
        { field: 'HORA_CREACION', headerName: 'H_CREACION', width: 130, valueGetter: (params) => formatTime(params.row.FECHA_CREACION)},
        {field: 'FECHA_ENVIO', headerName: 'F_ENVIO', width: 130 , valueGetter: (params) => formatDate(params.row.FECHA_ENVIO)},
        { field: 'HORA_ENVIO', headerName: 'H_ENVIO', width: 130, valueGetter: (params) => formatTime(params.row.FECHA_ENVIO)},
        {
          field: 'USUARIO_CREA',
          headerName: 'CREADOR',
          sortable: false,
          width: 130,
        },
        {field:'ESTADO', headerName: 'ESTADO', width: 130, valueGetter: (params) => formatState(params.row.ESTADO)},
      ];
      return (
        <Box width={'90%'} >
          <DataGrid
            getRowId={(row) => row.CORRELATIVO}
            components={{
              Toolbar: toolbar,
            }}
            localeText={localtext}
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </Box>
      );
}



export default HistorialNotificaciones;