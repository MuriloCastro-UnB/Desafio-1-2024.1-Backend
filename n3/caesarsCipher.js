function rot13(str) {
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let resultado = "";

  for (let i = 0; i < str.length; i++) {
    const posicao = alfabeto.indexOf(str[i]);

    if (posicao === -1) {
      resultado += str[i];
    } else {
      resultado += alfabeto[(posicao + 13) % 26];
    }
  }

  return resultado;
}
