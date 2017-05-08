//Hay que importar el componente y el decoration input
import { Component, Input, Output, EventEmitter  } from '@angular/core';

//Anotacion
@Component({
    selector: 'input-component', //selector html
    templateUrl: 'input.component.html', //donde esta el template
    styleUrls: ['input.component.css'] //estilos del template. Con , separamos las hojas de estilo
})

//clase para trabajar
export class InputComponent{

    //anotacion que nos da parametro de input
    @Input() voto:string;
    @Input() eleccion:string;

    @Output() addVoto = new EventEmitter<string>();

    constructor(){
        console.log("estoy entrando");
    }

    votar():void{
        this.addVoto.emit(this.voto);
    }

}