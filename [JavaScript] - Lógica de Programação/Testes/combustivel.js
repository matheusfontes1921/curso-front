let kmPorHoraMedia = 67;
let tempo = 22;
const consumo = 12;



console.log(calcularGasto(kmPorHoraMedia,tempo,consumo).toFixed(3));
function calcularGasto(kmPorHoraMedia, tempo, consumo){
    let kmTotal = tempo * kmPorHoraMedia;
    let litros = kmTotal / consumo;
    return litros;
}