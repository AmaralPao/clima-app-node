const axios = require('axios');

const getClima = async (lat, lng) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a0d091f8e487eb8cde885dd901529c48&units=metric`)
    return res.data.main.temp;
}

module.exports = {
    getClima
}