import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PecaService } from '../../pecas/peca.service';
import { Peca } from '../../pecas/peca';
import { Loja } from 'src/app/pecas/loja';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent  implements OnInit {

  codigo : string = ''
  peca : Peca | undefined
  loja : Loja | undefined
  
  constructor(
    private pecaService: PecaService,
    private route: ActivatedRoute,
		private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( 
			(params) => {
				this.codigo = params['codigo'];
				this.peca = this.pecaService.getPeca(this.codigo);
				if(this.peca == undefined){
					this.router.navigate(['']);
				}
        this.loja = this.peca?.getLoja
			}
		)
  }

}
