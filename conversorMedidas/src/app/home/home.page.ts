import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  seccionActiva: string = "distancia"; // Sección inicial
  distancia = { valor: 0, origen: 'km', destino: 'm', resultado: '' };
  peso = { valor: 0, origen: 'kg', destino: 'g', resultado: '' };
  temperatura = { valor: 0, origen: 'C', celsius: false, fahrenheit: false, kelvin: false, resultado: '' };

  constructor() {}

  // Conversión de Distancia
  convertirDistancia() {
    const factores: Record<string, number> = { km: 1000, m: 1, cm: 0.01, mm: 0.001 };
    let resultado = (this.distancia.valor * factores[this.distancia.origen]) / factores[this.distancia.destino];
    this.distancia.resultado = `${this.distancia.valor} ${this.distancia.origen} = ${resultado.toFixed(2)} ${this.distancia.destino}`;
  }

  // Conversión de Peso
  convertirPeso() {
    const factores: Record<string, number> = { ton: 1000000, kg: 1000, lb: 453.592, g: 1 };
    let resultado = (this.peso.valor * factores[this.peso.origen]) / factores[this.peso.destino];
    this.peso.resultado = `${this.peso.valor} ${this.peso.origen} = ${resultado.toFixed(2)} ${this.peso.destino}`;
  }

// Conversión de Temperatura
convertirTemperatura() {
  let resultado = "";
  let valor = this.temperatura.valor;

  if (this.temperatura.origen === "C") {
    if (this.temperatura.fahrenheit) resultado += `Fahrenheit: ${(valor * 9/5 + 32).toFixed(2)}°F\n`;
    if (this.temperatura.kelvin) resultado += `Kelvin: ${(valor + 273.15).toFixed(2)}K\n`;
  }
  if (this.temperatura.origen === "F") {
    if (this.temperatura.celsius) resultado += `Celsius: ${((valor - 32) * 5/9).toFixed(2)}°C\n`;
    if (this.temperatura.kelvin) resultado += `Kelvin: ${(((valor - 32) * 5/9) + 273.15).toFixed(2)}K\n`;
  }
  if (this.temperatura.origen === "K") {
    if (this.temperatura.celsius) resultado += `Celsius: ${(valor - 273.15).toFixed(2)}°C\n`;
    if (this.temperatura.fahrenheit) resultado += `Fahrenheit: ${((valor - 273.15) * 9/5 + 32).toFixed(2)}°F\n`;
  }

  if (!this.temperatura.celsius && !this.temperatura.fahrenheit && !this.temperatura.kelvin) {
    resultado = "Seleccione al menos una unidad a convertir";
  }

  this.temperatura.resultado = resultado;
}
}