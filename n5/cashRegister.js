function checkCashRegister(price, cash, cid) {
  const valores = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];

  let troco = Math.round(cash * 100) - Math.round(price * 100);

  let totalCaixa = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCaixa += Math.round(cid[i][1] * 100);
  }

  if (totalCaixa < troco) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCaixa === troco) {
    return { status: "CLOSED", change: cid };
  }

  const listaTroco = [];

  for (let i = cid.length - 1; i >= 0; i--) {
    let disponivel = Math.round(cid[i][1] * 100);
    let usado = 0;

    while (troco >= valores[i] && disponivel > 0) {
      troco -= valores[i];
      disponivel -= valores[i];
      usado += valores[i];
    }

    if (usado > 0) {
      listaTroco.push([cid[i][0], usado / 100]);
    }
  }

  if (troco > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: listaTroco };
}
