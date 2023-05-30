import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], texto: string ): any[] {
    const resultado = []
    if(value.length === 0 || texto === ''){
      return value
    }
    for(const item of value){
      if(item.getLoja.getNome.toLowerCase().includes(texto.toLowerCase()) 
        || item.getTipo.toLowerCase().includes(texto.toLowerCase())){
        resultado.push(item)
      }
    }
    return resultado;
  }

}
