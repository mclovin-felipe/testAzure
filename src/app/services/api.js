const axios = require('axios')


export const enviarInfoImportante = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_MOBILE_BASE_URL}/firebase/envioMasivoTopic`,
            data,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
              },
            }
          );
        return response
    } catch (error) {
        console.log(error)
    }
   
  };
  
export const enviarUltimaNoticia = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_MOBILE_BASE_URL}/firebase/envioMasivoNoticia`,
            data,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
              },
            }
          );
        return response
    } catch (error) {
        console.log(error)
    }

};

export const insertarNotificacion = async (data) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_NOTIFICACIONES_BASE_URL}/notificaciones/insertarNotificacion`,
            data,
            {
              headers: {
                'Content-Type': 'application/json'
              },
            }
          );
        return response
        
    } catch (error) {
        console.log(error)
    }

};

export const obtenerNotificacion = async (data) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_NOTIFICACIONES_BASE_URL}/notificaciones/obtenerNotificacion/${data}`,
            {
              headers: {
                'Content-Type': 'application/json'
              },
            }
          );
        return response
        
    } catch (error) {
        console.log(error)
    }

};