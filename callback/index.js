function suma(num1, num2){
 return num1 + num2;
};
function call(num1, num2, callback){
 return callback(num1, num2);
};
console.log(call(2, 4, suma));


setTimeout(function(){
  console.log("hola js");
},5000) 

function saludo(nombre){
  console.log(`hola ${nombre}`);
}

setTimeout(saludo,5000,"sebas");