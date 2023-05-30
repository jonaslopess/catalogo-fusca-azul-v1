import { Component } from '@angular/core';

import { Peca } from '../pecas/peca';
import { PecaService } from '../pecas/peca.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pecas : Peca[]
  texto : string

  constructor(private pecaService : PecaService) {
    this.pecas = pecaService.getPecas
    this.texto = ''

  }

}
