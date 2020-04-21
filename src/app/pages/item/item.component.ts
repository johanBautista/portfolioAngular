import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((parametro) => {
      // console.log(parametro['id']);
      this.productoService
        .getProducto(parametro['id'])
        .subscribe((producto: ProductoDescripcion) => {
          console.log(producto.producto);
        });
    });
  }
}
