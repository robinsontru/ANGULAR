import { Component } from '@angular/core';
import { EquipoService } from "../../SERVICES/equipo.service"
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private EquipoService:EquipoService ){}


ngOnInit():void{

}
}
