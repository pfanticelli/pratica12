var par = 0;
var impar = 0;
// Implementar comando de repetição (de 1 até 20)
for (var i = 1; i <= 20; i++) {
  var i2 = i * i;

// Implementar os comandos de decisão para verificar números quadrados pares ou ímpares
  if (i % 2 === 0){
   par += i2;
  }else{
    impar += i2;
  }

  console.log(i2);
}

console.log("A soma dos quadrados pares: " + par);

console.log("A soma dos quadrados ímpares: " + impar);
