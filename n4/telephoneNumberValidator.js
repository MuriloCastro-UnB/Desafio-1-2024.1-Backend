function ehDigito(caractere) {
  return "0123456789".includes(caractere);
}

function soDigitos(texto) {
  if (texto.length === 0) {
    return false;
  }
  for (let i = 0; i < texto.length; i++) {
    if (!ehDigito(texto[i])) {
      return false;
    }
  }
  return true;
}

function ehSeparador(caractere) {
  return caractere === " " || caractere === "-";
}

function telephoneCheck(str) {
  let quantidadeDigitos = 0;
  for (let i = 0; i < str.length; i++) {
    if (ehDigito(str[i])) {
      quantidadeDigitos++;
    }
  }

  let resto = str;

  if (quantidadeDigitos === 11) {
    if (resto[0] !== "1") {
      return false;
    }
    resto = resto.slice(1);
    if (resto[0] === " ") {
      resto = resto.slice(1);
    }
  } else if (quantidadeDigitos !== 10) {
    return false;
  }

  if (resto[0] === "(") {
    if (resto[4] !== ")" || !soDigitos(resto.slice(1, 4))) {
      return false;
    }
    resto = resto.slice(5);
  } else {
    if (!soDigitos(resto.slice(0, 3))) {
      return false;
    }
    resto = resto.slice(3);
  }

  if (ehSeparador(resto[0])) {
    resto = resto.slice(1);
  }

  if (!soDigitos(resto.slice(0, 3))) {
    return false;
  }
  resto = resto.slice(3);

  if (ehSeparador(resto[0])) {
    resto = resto.slice(1);
  }

  return resto.length === 4 && soDigitos(resto);
}
