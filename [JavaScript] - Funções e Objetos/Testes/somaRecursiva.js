const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const soma = (valor) => {
  if (valor < 0 || valor > 100) {
    throw new Error("Intervalo inválido");
  }
  if (valor === 0) {
    return 0;
  }
  return valor + soma(valor - 1);
}

try {
    console.log(soma(61));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Acabou!")
}

// rl.question('Digite um número: ', (data) => {
//   try {
//     console.log("soma:", soma(Number(data)));
//     rl.close();
//   } catch (error) {
//     console.log(error.message);
//     rl.close();
//   }
// });




