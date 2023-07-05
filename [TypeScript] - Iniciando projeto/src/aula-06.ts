const funcaoCallback = (): void => {
  console.log('Certo!');
};
const funcaoT = (v1: number, v2: number, callback: () => void) => {
  if (v1 > v2) {
    callback();
  }
  return 'Erro';
};

funcaoT(4, 2, funcaoCallback);
