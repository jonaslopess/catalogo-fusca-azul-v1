export class Loja {
    private email : string
    private senha : string
    private nome_gerente : string
    private nome : string
    private CNPJ : string
    private telefone : string
    private endereço : string
    private coordenadas : string

    constructor(
        email : string,
        senha : string,
        nome_gerente : string,
        nome : string,
        CNPJ : string,
        telefone : string,
        endereço : string,
        coordenadas : string
    ){
        this.email = email
        this.senha = senha
        this.nome_gerente = nome_gerente
        this.nome = nome
        this.CNPJ = CNPJ
        this.telefone = telefone
        this.endereço = endereço
        this.coordenadas = coordenadas
    }

    
    public get getNome() : string {
        return this.nome
    }

    public get getCNPJ() : string {
        return this.CNPJ
    }
    
    public get getNomeGerente() : string {
        return this.nome_gerente
    }

    public get getEmail() : string {
        return this.email
    }

    public get getTelefone() : string {
        return this.telefone
    }

    public get getEndereco() : string {
        return this.endereço
    }

    public get getCoordenadas() : string {
        return this.coordenadas
    }

    
    
}