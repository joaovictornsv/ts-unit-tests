import sinon from 'sinon'
import { expect } from 'chai';
import { CalculadoraDI } from '../main/calculadora_di';
import { SomadorFake } from './fakes/somador';

describe('CalculadoraDI', () => {
  const sandbox = sinon.createSandbox()
  const somadorFake = new SomadorFake()
  const calculadoraDI = new CalculadoraDI(somadorFake)

  afterEach(() => sandbox.restore())

  describe('soma', () => {

    it('deve poder somar dois numeros', async () => {

      const somadorExecuteSpy = sandbox.spy(somadorFake, 'execute')

      const soma = calculadoraDI.soma(1, 2)

      expect(soma).to.equal(3)
      expect(somadorExecuteSpy.calledOnce).to.equal(true)
      expect(somadorExecuteSpy.callCount).to.equal(1)
      expect(somadorExecuteSpy.args[0][0]).to.equal(1)
      expect(somadorExecuteSpy.args[0][1]).to.equal(2)
    });

    it('nao deve poder somar dois numeros se o primeiro deles for maior do que 10', async () => {
      try {
        calculadoraDI.soma(11, 2)

      } catch (err: any) {
        expect(err.message).to.equal('Numero 1 invalido')
      }
    });
  });

});