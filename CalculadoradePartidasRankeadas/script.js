const entrada = require('prompt-sync')({sigint: true});

let vitorias = entrada('Digite a quantidade de vitorias: ');
let derrotas = entrada('Digite a quantidade de derrotas: ');
let saldoVitorias = getSaldo(vitorias, derrotas);

function getSaldo(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

function getNivel(saldoVitorias) {
    switch (true) {
    case (saldoVitorias < 10):
        nivel = "Ferro";
        break;
    case (saldoVitorias >=11 && saldoVitorias <= 20):
        nivel = "Bronze";
        break;
    case (saldoVitorias >=21 && saldoVitorias <= 50):
        nivel = "Prata";
        break;
    case (saldoVitorias >=51 && saldoVitorias <= 80):
        nivel = "Ouro";
        break;
    case (saldoVitorias >=81 && saldoVitorias <= 90):
        nivel = "Diamante";
        break;
    case (saldoVitorias >=91 && saldoVitorias <= 100):
        nivel = "Lendário";
        break;
    case (saldoVitorias >=101):
        nivel = "Imortal";
        break;
    default:
        nivel = "Valor incorreto";
        break;
    }
        return nivel;
    }
    
console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias e está no rank ${getNivel(saldoVitorias)}`);