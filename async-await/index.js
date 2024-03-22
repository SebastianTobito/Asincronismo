const fnAsync = () =>{
    return new Promise ((resolve, reject)=>{
        (true) ? setTimeout(() => resolve('Async1'), 2000):reject(new Error('ErroR'));
    });
}

const otraFuncion = async()=>{
    const probandoAwait = await fnAsync();
    console.log(probandoAwait);
    console.log('probando');
}

console.log('antes de la funcion');
otraFuncion();
console.log('final');