import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TA34-Calculadora';

  operacion_entera: string = "";
  numero_actual: string = "";

  resultado: string = "";

  clickC() {
    this.operacion_entera = "";
    this.numero_actual  = "";
  }

  clickCE() {
    this.operacion_entera = "";
  }

  clickDel() {
    this.numero_actual = this.numero_actual.substring(0, this.numero_actual.length - 1);
  }

  clickNumero(numero: string) {
    if(this.numero_actual == "0" || this.numero_actual == "") {
      this.numero_actual = numero;
    } else {
      this.numero_actual += numero;
    }
  }

  clickPunto() {
    if(!(this.numero_actual[this.numero_actual.length - 1] == ".")) {
      this.numero_actual += ".";
    }
  }

  clickOperacion(operador: string) {
    if(this.numero_actual[this.numero_actual.length - 1] == ".") {
      this.numero_actual = this.numero_actual.substring(0, this.numero_actual.length - 1);
    }
    this.operacion_entera = this.operacion_entera + this.numero_actual + operador;
    this.numero_actual = "0";
  }

  clickIgual() {
    if(this.numero_actual[this.numero_actual.length - 1] == ".") {
      this.numero_actual = this.numero_actual.substring(0, this.numero_actual.length - 1);
    }

    if(this.operacion_entera[this.operacion_entera.length - 1].match(/\s/)) {
      this.operacion_entera += this.numero_actual;
      this.resultado = eval(this.operacion_entera);
      this.numero_actual = this.resultado;
    }
  }

  clickPositivoNegativo() {
    if(this.numero_actual[0] == "-") {
      this.numero_actual = this.numero_actual.substring(1,);
    } else if(this.numero_actual !== "0" && this.numero_actual[0] !== "-" ){
      this.numero_actual = "-" + this.numero_actual;
    }
  }
}
