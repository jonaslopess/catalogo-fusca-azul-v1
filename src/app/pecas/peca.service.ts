import { Injectable } from '@angular/core';

import { Peca } from './peca';
import { Loja } from './loja';

@Injectable({
  providedIn: 'root'
})
export class PecaService {

  pecas : Peca[]
  lojas : Loja[]

  constructor() {
    this.lojas = [
      new Loja('j@g.com','12321251ds','Joaquim Silva','Quim Peças','1211224000112','3534654125','Rua X, 45 - Centro - Anatricé/MG','41.40338, 2.17403'),
      new Loja('g@g.com','45fd4f5d','Geralda Santos','Autopeças Esmeralda','123654000145','3534652225','Rua Z, 54 - Centro - Conceição das Rochas/MG','41.60978, 1.99005')
    ]
    this.pecas = [
      new Peca('1215','Peça 1',150.50,'Tipo 1',120,this.lojas[0]),
      new Peca('5214','Peça 2',562.99,'Tipo 1',66,this.lojas[1]),
      new Peca('5844','Peça 3',25.50,'Tipo 2',24,this.lojas[0]),
      new Peca('3652','Peça 4',356.45,'Tipo 2',89,this.lojas[1])
    ]
  }
  
  public get getPecas() : Peca[] {
    return this.pecas
  }

  public getPeca(codigo : string) : Peca | undefined {
    for(let peca of this.pecas){
      if(peca.getCodigo == codigo){
        return peca
      }
    }
    return undefined
  }
}
