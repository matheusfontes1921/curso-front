//TRY-CATCH-FINALLY
function calcular(valor) {
    if (valor === 0 ) {
        throw new Error('Não pode ser 0')
    }
    return valor / 2;
}

try{
    const resultado = calcular(0);
    console.log(resultado);

} catch (error) {
    console.log(error.message)
} finally {
    
}