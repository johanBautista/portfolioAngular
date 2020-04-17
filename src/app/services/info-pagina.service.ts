import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';
// import { InfoEquipo } from '../interfaces/info-equipo.interfaces';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {

  info: InfoPagina ={};
  cargada = false;

  equipo: any[] = [];
  // equipo: InfoEquipo = {};

  constructor(private http: HttpClient) {
    // console.log('lolo');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json').subscribe((resp:InfoPagina) => {
    this.cargada = true;
    this.info = resp;
    // console.log(resp);
    });
  }

  private cargarEquipo() {
    this.http.get('https://dev-johan.firebaseio.com/equipo.json').subscribe((resp: any[]) => {
      this.equipo = resp;
      console.log(resp);
    });
  }

  
}





