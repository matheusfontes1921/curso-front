type MarcaBicicleta = "Caloi" | "Teste" | "Bike";

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

if (bicicleta.marca === "Caloi") {
    console.log("é caloi")
}
