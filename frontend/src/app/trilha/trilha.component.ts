import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-trilha',
  templateUrl: './trilha.component.html',
  styleUrls: ['./trilha.component.scss']
})
export class TrilhaComponent implements OnInit {
  trilhaid!: string
  trilha!: any
  constructor( private route: ActivatedRoute, private clienteService: ClienteService ) {
    this.route.params.subscribe(params => this.trilhaid = params['id']);
    this.clienteService.getTrilha(this.trilhaid)
    .subscribe({
      next: response => {
        this.trilha = response.body
        console.log(this.trilha)

      },
      error: error => {
        console.log(error)
      },
    });

  }

  ngOnInit(): void {

  }
}
