import { Somador } from './somador';

export class Calculadora {
  soma(num1: number, num2: number): number {
    if (num1 > 10) throw new Error('Numero 1 invalido')

    const somador = new Somador()

    const result = somador.execute(num1, num2)
    return result
  }
}
