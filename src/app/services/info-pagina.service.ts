import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  constructor(private http: HttpClient) {
    console.log('lolo');
  }
}
