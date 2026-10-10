function palindrome(str) {
  const permitidos = "abcdefghijklmnopqrstuvwxyz0123456789";
  const minusculo = str.toLowerCase();
  let limpo = "";

  for (let i = 0; i < minusculo.length; i++) {
    if (permitidos.includes(minusculo[i])) {
      limpo += minusculo[i];
    }
  }

  for (let i = 0; i < limpo.length / 2; i++) {
    if (limpo[i] !== limpo[limpo.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
