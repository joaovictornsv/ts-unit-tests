import { ISomador } from '../../main/somador';

export class SomadorFake implements ISomador {
  execute(num1: number, num2: number): number {
    return num1 + num2
  }
}