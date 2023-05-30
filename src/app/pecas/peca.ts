import { Loja } from "./loja"

export class Peca {
    private codigo: string
    private descricao: string
    private preco : number
    private tipo : string
    private quantidadeDisponivel: number
    private loja : Loja

    constructor(
        codigo: string,
        descricao: string,
        preco: number,
        tipo : string,
        quantidadeDisponivel: number,
        loja: Loja
    ){
        this.codigo = codigo
        this.descricao = descricao
        this.preco = preco
        this.tipo = tipo
        this.quantidadeDisponivel = quantidadeDisponivel
        this.loja = loja
    }

    
    public get getCodigo() : string {
        return this.codigo
    }

    public get getDescricao() : string {
        return this.descricao
    }

    
    public get getPreco() : number {
        return this.preco
    }

    public get getTipo() : string {
        return this.tipo
    }
    
    public get getQuantidadeDisponivel() : number {
        return this.quantidadeDisponivel
    }
    
    
    public get getLoja() : Loja {
        return this.loja
    }
    

    

}