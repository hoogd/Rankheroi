// Calculando saldo vitórias de um herói
let saldoRank = rank(11, 0)
function rank(vitórias, derrotas){
  return vitórias - derrotas
}
// Condições e valores de saída
if (saldoRank <= 10){
    //variável de nível
  let f ="Ferro"
   console.log("O Herói tem de saldo " + saldoRank + " e está no nível de " + f)
}
if(saldoRank>= 11  && saldoRank <= 20){
     //variável de nível
    let b = "Bronze"
            console.log(" O Herói tem de saldo " + saldoRank + " e está no nível de " + b );
    }
     if (saldoRank >= 21 && saldoRank <= 50){
         //variável de nível
        let p = "Prata"
                console.log(" O Herói tem de saldo " + saldoRank + " e está no nível de " + p )
    }
    if(saldoRank >= 51 && saldoRank <= 80){
         //variável de nível
        let o = "Ouro"
                console.log(" O Herói tem de saldo " + saldoRank + " e está no nível de " + o )
    }
     if (saldoRank >= 81 && saldoRank <= 90){
         //variável de nível
        let d = "Diamante"
                console.log(" O Herói tem de saldo " + saldoRank + " e está no nível de " + d )
    }
      if (saldoRank >= 91 && saldoRank <= 100){
         //variável de nível
        let l = "Lendário"
                console.log(" O Herói tem de saldo " + saldoRank + " e está no nível de " + l )
    }
    if (saldoRank >= 101){
         //variável de nível
        let i = "Imortal"
                console.log(" O Herói tem de saldo " + saldoRank + " e está no nível de " + i )
    }