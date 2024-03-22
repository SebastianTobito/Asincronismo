function* generador() {
 yield 1;
 yield 30;
 yield 3;
};

const gen = generador();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function* iterador(array){
 for(let value of array)
 yield value
};

const it = iterador(['Enzo', 'Lola', 'Atenea', 'Sebas'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next());
console.log(it.next().value);
console.log(it.next());