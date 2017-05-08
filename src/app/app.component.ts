import { Component } from '@angular/core';

//importamos nuestro clase InputComponent
import {InputComponent} from './input/input.component';

//impórtamos nuestro clase InputComponent
import {TicketService} from './services/ticket.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  votacion = '';
  votacion1 = '';

  tickets:any;

  constructor(private ticketService : TicketService){
    this.tickets = ticketService.getTicket();
    console.log(this.tickets);
  }

  votos = [
    {title: 'opcion 1'},
    {title: 'opcion 2'},
    {title: 'opcion 3'},
    {title: 'opcion 4'}
  ];

  eleccion = [
    {el: 'eleccion 1'},
    {el: 'eleccion 2'},
    {el: 'eleccion 3'}
  ]

  addVoto(response:string){
    this.votacion = "usted eligio: " + response;
  }

   addVoto1(response:string){
    this.votacion1 = "usted eligio1: " + response;
  }

  cantidad = 5;
  factor= 1;

  onSubmit(form:any):void{
    console.log("El formulario tiene ", form);
  }

}

