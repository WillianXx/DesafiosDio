// Entendendo o Desafio

// Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎

// Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.

// Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.

// Instruções para entrega
// # 3️⃣ Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada

// Bons estudos 😉

class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
       switch (this.tipo) {
           case "mago":
               console.log(`O ${this.tipo} ${this.nome} atacou usando magia`);
               break;
           case "guerreiro":
               console.log(`O ${this.tipo} ${this.nome} atacou usando espada`);
               break;
           case "monge":
               console.log(`O ${this.tipo} ${this.nome} atacou usando artes marciais`);
               break;
           case "ninja":
               console.log(`O ${this.tipo} ${this.nome} atacou usando shuriken`);
               break;
       }
    }
}

let heroi1 = new heroi("Felipe", 28, "mago");
let heroi2 = new heroi("VItor", 47, "guerreiro");
let heroi3 = new heroi("Paulo", 30, "monge");
let heroi4 = new heroi("Igor", 50, "ninja");


heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();