import { Somador } from './somador';

export class CalculadoraDI {
  constructor(
    private readonly somador: Somador
  ){}

  soma(num1: number, num2: number): number {
    if (num1 > 10) throw new Error('Numero 1 invalido')
    const result = this.somador.execute(num1, num2)
    return result
  }
}
