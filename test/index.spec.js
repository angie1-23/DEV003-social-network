import createUserWithEmailAndPassword from '../src/lib/imports.js'; // Tenemos que llamar a mocks
import RegisterForm from '../src/Views/loginEm.js';

jest.mock('../src/lib/imports.js');

describe('Los test del Registro', () => {
  test('El componente es una Funcion', () => {
    const result = RegisterForm();
    const buttonIngresar = result.querySelector('.btnSingIn');
    buttonIngresar.click();
    // buttonIngresar.dispatchEvent(new Event('click'));
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});
