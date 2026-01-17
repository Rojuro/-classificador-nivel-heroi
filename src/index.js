// DIO - Desafio Classificador dos níveis dos Heróis
// Heróis inspirados em Clash Royale - SUPERCELL

let herois = [
    { nomeHeroi: "Goblinstein", xp: 985 },              // 1º Herói
    { nomeHeroi: "Pequeno Príncipe", xp: 1775 },        // 2º Herói
    { nomeHeroi: "Rainha Arqueira", xp: 2985 },         // 3º Herói
    { nomeHeroi: "Cavaleiro Dourado", xp: 3015 },       // 4º Herói
    { nomeHeroi: "Imperatriz Espiritual", xp: 15985 },  // 5º Herói
    { nomeHeroi: "Bruxa Sombria", xp: 6085 },           // 6º Herói
    { nomeHeroi: "Lava Hound", xp: 8985 },              // 7º Herói
    { nomeHeroi: "Dragão Elétrico", xp: 10985 },        // 8º Herói
];

// Laço de repetição + estrutura de decisão + Operadores Relacionais
for (let i = 0; i < herois.length; i++) {
    let xp = herois[i].xp;
    let nome = herois[i].nomeHeroi;
    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";                // 1º Nível
    } else if (xp <= 2000) {
        nivel = "Bronze";               // 2º Nível
    } else if (xp <= 5000) {
        nivel = "Prata";                // 3º Nível
    } else if (xp <= 7000) {
        nivel = "Ouro";                 // 4º Nível
    } else if (xp <= 8000) {
        nivel = "Platina";              // 5º Nível
    } else if (xp <= 9000) {
        nivel = "Ascendente";           // 6º Nível
    } else if (xp <= 10000) {
        nivel = "Imortal";              // 7º Nível
    } else {
        nivel = "Radiante";             // 8º Nível
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
