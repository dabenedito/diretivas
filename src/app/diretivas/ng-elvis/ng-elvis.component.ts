import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-elvis',
  templateUrl: './ng-elvis.component.html',
  styleUrls: ['./ng-elvis.component.scss']
})
export class NgElvisComponent {
  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: {
      usuario: null
    }
  };


}
