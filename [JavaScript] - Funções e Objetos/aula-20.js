//FUNÇÃO RECURSIVA
const fat = (valor) => {
    if(valor === 1 || valor === 0) {
        return 1;
    } 
    return valor * fat(valor - 1);
     
}

console.log(fat(5));