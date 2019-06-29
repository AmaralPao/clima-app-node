
const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

// lugar.getLugarLatLng(argv.direccion)
// .then((res)=>console.log(res));

// clima.getClima( 40.750000, -74.000000 )
// .then(res=>{
//     console.log(res);
// }).catch(error=>{
//     console.log(error);
// });


// const getInfo = async (direccion) => {
//     let lugar1 = await lugar.getLugarLatLng(direccion);
//     if(lugar1 === undefined){
//         throw new Error(`No se pudo encontrar el lugar ${direccion}`);
//     }

//     let clima1 = await clima.getClima(lugar1.lat,lugar1.lng);
//     if(clima1 === undefined){
//         throw new Error(`No se pudo encontrar el clima de ${direccion}`);
//     }
//     //salida
//     return {
//         clima1
//     }


// }

// getInfo(argv.direccion)
//     .then(resp=>{
//         console.log(`El clima de ${argv.direccion} es de ${resp.clima1}`)
//     })
//     .catch(error=>{
//         console.log(error)
//         console.log(`No se pudo encontrar el clima de ${argv.direccion}`);
//     })


const getInfo = async (direccion) => {
    
    try{
        let lugar1 = await lugar.getLugarLatLng(direccion);
        let clima1 = await clima.getClima(lugar1.lat,lugar1.lng);
        return `El clima de ${direccion} es ${clima1}`;
    }catch(e){
        return "No se pudo determinar"
    }
}

getInfo(argv.direccion)
    .then(resp=>{
        console.log(resp)
    })
    .catch(error=>{
        console.log(error)
        
    })