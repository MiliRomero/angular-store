import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';//Input es para recibir data del producto
import { Output, EventEmitter } from '@angular/core'; //se usa para emitir un evento para que cuando se haga click en le boton notify me, ProductListComponent pueda responder a eso


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

//la clase ProductAlertsComponent tiene funcionalidades del componente
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter(); //emite un evento cuando el valor de notify cambia
  
  constructor() { }

  ngOnInit() {
  }

}