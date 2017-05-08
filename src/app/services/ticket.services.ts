import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/ticket.mock';

@Injectable()
export class TicketService {
	
	miVariableTicketglobal = "soy una variable global";

	getTicket(){
		return TICKETS;
	}

	getVariableGlobal():string{
		return this.miVariableTicketglobal;
	}

}