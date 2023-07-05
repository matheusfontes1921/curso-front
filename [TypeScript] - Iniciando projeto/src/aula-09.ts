type MarcaBicicleta = "Caloi" | "Teste" | "Bike";
/* type e enum são a mesma coisa */
interface Bicicleta {
    marca: MarcaBicicletaDois
}
enum MarcaBicicletaDois {
    CALOI = "Caloi",
    TESTE = "Teste",
    BIKE = "Bike",
}

const bicicleta: Bicicleta = {
    marca: MarcaBicicletaDois.CALOI,
}

if (bicicleta.marca === "Caloi") {
    console.log("é caloi")
}

if (bicicleta.marca === MarcaBicicletaDois.CALOI) {
    console.log("é caloi")
}
