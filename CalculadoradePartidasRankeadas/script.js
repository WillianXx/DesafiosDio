const entrada = require('prompt-sync')({sigint: true});

function getValor(mensagem) {
    let valor = parseInt(entrada(mensagem));
    while(isNaN(valor) || valor < 0) {
        console.log("Digite um numero valido (maior ou igual a zero)");
        valor = parseInt(entrada(mensagem));
    }
    return valor;
}

const vitorias = getValor('Digite a quantidade de vitorias: ');
const derrotas = getValor('Digite a quantidade de derrotas: ');
const saldoVitorias = vitorias - derrotas;

function getNivel(saldoVitorias) {
    if (saldoVitorias < 10) return "Ferro";
    if (saldoVitorias <= 20) return "Bronze";
    if (saldoVitorias <= 50) return "Prata";
    if (saldoVitorias <= 80) return "Ouro";
    if (saldoVitorias <= 90) return "Diamante";
    if (saldoVitorias <= 100) return "Lendário";
    return "Imortal";
    }
    
console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias e está no rank ${getNivel(saldoVitorias)}`);