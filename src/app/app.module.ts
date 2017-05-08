import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ConversorPipe } from './pipes/conversor.pipe';

//directives
import {  HighlightDirective } from './directives/highlight.directive'

//gigant
import {  GigantDirective } from './directives/gigant.directive'

//llamarlo 
import { InputComponent } from './input/input.component';
import { AsdfComponentComponent } from './asdf-component/asdf-component.component';
import { MyPipePipe } from './my-pipe.pipe';

//service
import { TicketService } from './services/ticket.services'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent, //declararlo
    ConversorPipe, AsdfComponentComponent, MyPipePipe,
    HighlightDirective,
    GigantDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
