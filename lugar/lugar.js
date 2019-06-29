const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': '0f7bd933b3msh237ffcb0361868ap1a8213jsncda68ec355a2' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = respuesta.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        dir,
        lat,
        lng
    }
}
module.exports ={
    getLugarLatLng
}