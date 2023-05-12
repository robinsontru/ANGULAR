import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
url='http://localhost:3001/api/';
  constructor(private http:HttpClient) { }


  //get equipos
getEquipos(){
  return this.http.get(this.url);
}

}
