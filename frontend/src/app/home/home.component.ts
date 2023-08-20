import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cliente!: any

  constructor(private clienteService: ClienteService){}

  ngOnInit(): void {
    const ID_CLIENTE_MOCK = '772fde84-e8b4-4348-96e6-75a506bcaa5c'
    this.clienteService.getCliente(ID_CLIENTE_MOCK)
      .subscribe({
        next: response => {
          this.cliente = response.body

        },
        error: error => {
          console.log(error)
        },
      });
      console.log('teste', this.cliente)
  }
}
