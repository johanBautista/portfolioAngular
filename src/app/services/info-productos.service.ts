import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProducto } from '../interfaces/info-producto.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoProductosService {
  cargando = true;
  productos: InfoProducto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http
      .get('https://dev-johan.firebaseio.com/productos_idx.json')
      .subscribe((resp: InfoProducto[]) => {
        console.log(resp);
        this.productos = resp;
        // this.cargando = false;
      });
  }
}
