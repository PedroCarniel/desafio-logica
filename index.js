/**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/

let nomeHeroi = "Pedro";
let xpDoHeroi = 3057; // Pode mudar conforme queira variar o nivel.

let rankHeroi

if (xpDoHeroi < 1000) {
    rankHeroi = "Ferro";
} else if (xpDoHeroi <= 2000) {
    rankHeroi = "Bronze";
} else if (xpDoHeroi <= 5000) {
    rankHeroi = "Prata";
} else if (xpDoHeroi <= 7000) {
    rankHeroi = "Ouro";
} else if (xpDoHeroi <= 8000) {
    rankHeroi = "Platina";
} else if (xpDoHeroi <= 9000) {
    rankHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000) {
    rankHeroi = "Imortal";
} else if (xpDoHeroi >= 10001) {
    rankHeroi = "Radiante";
}
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${rankHeroi}`);


// git add.
// git commit -m "Descrição"
// git push -u origin main

