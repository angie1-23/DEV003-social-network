// importamos la funcion que vamos a testear

jest.mock('../src/lib/imports.js');

describe('Los test del Registro', () => {
  test('El componente es una Funcion', () => {
    expect().toBe('function');
  });
});