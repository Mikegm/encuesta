import { Component, ContentChildren } from '@angular/core';
import { Texto } from './texto';
@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'templateA',
    templateUrl: './templateA.component.html'
})
export class TextoComponent {
    public texto: Texto;

    constructor() {
        this.texto = new Texto ('');
    }
}
