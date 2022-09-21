import sinon from 'sinon'
import { expect } from 'chai';
import { Calculadora } from '../main/calculadora';
import { Somador } from '../main/somador';

describe('Calculadora', () => {
  const sandbox = sinon.createSandbox()
  const calculadora = new Calculadora()

  afterEach(() => sandbox.restore())

  describe('soma', () => {

    it('deve poder somar dois numeros', async () => {

      const somadorExecuteSpy = sandbox.spy(Somador.prototype, 'execute')

      const soma = calculadora.soma(1, 2)

      expect(soma).to.equal(3)
      expect(somadorExecuteSpy.calledOnce).to.equal(true)
      expect(somadorExecuteSpy.callCount).to.equal(1)
      expect(somadorExecuteSpy.args[0][0]).to.equal(1)
      expect(somadorExecuteSpy.args[0][1]).to.equal(2)
    });

    it('nao deve poder somar dois numeros se o primeiro deles for maior do que 10', async () => {
      try {
        calculadora.soma(11, 2)

      } catch (err: any) {
        expect(err.message).to.equal('Numero 1 invalido')
      }
    });
  });

});