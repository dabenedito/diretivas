import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {

  cursos: Array<string> = ["Angular 2"];
  mostrarCursos: boolean = this.cursos.length > 0

}
