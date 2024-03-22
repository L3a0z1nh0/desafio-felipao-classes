class hero{
    constructor(nome, idade, tipo, ataque){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    this.ataque = ataque
    }
    
    escrever(){
        if (hero === heroGuerreiro)
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}`)
        else if(hero === heroMago)
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}`)
        else if(hero === heroMonge)
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}`)
        else (hero === heroNinja)
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}`)
    }

}


let heroGuerreiro = new hero('Acadio', '33', 'guerreiro', 'espada')
let heroMago = new hero('Stuart', '27', 'mago', 'magia')
let heroMonge = new hero('Dammer', '39', 'monge', 'artes marciais')
let heroNinja = new hero('Lee', '30', 'ninja', 'shuriken')


heroGuerreiro.escrever()
heroMonge.escrever()
