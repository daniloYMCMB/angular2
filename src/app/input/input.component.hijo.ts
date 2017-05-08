
import { Component, Input } from '@angular/core';

@Component({
    selector: 'input-component-hijo',
    template: ' {{ variableRecibida }} '
})

export class InputComponentHijo{
    @Input() variableRecibida: string;

    constructor(){

    }
}