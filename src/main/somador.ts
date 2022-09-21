export interface ISomador {
  execute(num1: number, num2: number): number 
}

export class Somador implements ISomador {
  execute(num1: number, num2: number): number {
    const soma = num1 + num2
    return soma;
  }
}