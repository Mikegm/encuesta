import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class="container">
  <div class="bg-gray">
    <div class="row bg-blue">
      <div class="col-md-4">
          <button (click)="texto = !texto">{{show ? 'texto()' : 'texto()'}}</button>
      </div>
      <div class="col-md-4">
          <button (click)="casilla = !casilla">{{show ? 'Casilla()' : 'Casilla()'}}</button>
      </div>
        <div class="col-md-4">
            <button (click)="desplega = !desplega">{{show ? 'Desplegable()' : 'Desplegable()'}}</button>
        </div>
    </div>
    <div class="row bg-white">
        <div class="col-12">
        <h1>
            {{ title }}
         </h1>
         <div *ngIf="texto; else elseBlock">
        <form #formTexto="ngForm">
            <ng-template #elseBlock></ng-template>
            <label>Describe sus aptitudes</label>
            <input type="text" placeholder="Escriba aquí">
        </form>

      </div>
          <div *ngIf="casilla; else elseBlock">
            <form #formCasilla="ngForm">
                 <h2>{{ opciones }}</h2>
                 <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Opción 1</label>
                  </div>
            </form>
            </div>
            <div *ngIf="desplega; else elseBlock">
            <form #formDesplegable="ngForm">
                <h2>{{ opciones }}</h2>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Opciones</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
            </form>
            </div>
         </div>
    </div>
  </div>
</div>
   `
})
export class AppComponent {
  title = 'Escriba el título aquí';
  opciones = 'Elija una de las siguientes opciones';
}



