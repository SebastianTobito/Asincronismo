const promesa = new Promise(function (resolve, reject) {
resolve('')
});
promesa.then

const vacas = 19;
const contadorVacas = new Promise(function (resolve, reject){
    if(vacas > 10){
        resolve(`Tenemos ${vacas} vacas que son suficientes para cubrir el pedido de leche`)}
        else{
            reject('no tenemos las suficientes vacas en la granja')
        }
})
contadorVacas.then((result)=> {
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log('completado'));


