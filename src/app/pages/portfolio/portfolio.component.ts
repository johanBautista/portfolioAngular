import { Component, OnInit } from '@angular/core';
import { InfoProductosService } from '../../services/info-productos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor(public product: InfoProductosService) {}

  ngOnInit(): void {}
}
