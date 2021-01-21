class Resolving {
  faleMais = (time, taxa, plano) => {
    // calcula plano de acordo com o pedido
    if (time > plano) {
      let aux = time - plano;
      let tax = 0.1 * taxa * aux;
      let calcTempo = aux * taxa;
      let calcFinal = calcTempo + tax;
      return calcFinal;
    } else {
      return 0;
    }
  };

  returnTaxValue = (origem, destino) => {
    // calcula taxa de acordo com o ddd
    switch (origem) {
      case "ddd11":
        switch (destino) {
          case "ddd16":
            return 1.9;
          case "ddd17":
            return 1.7;
          case "ddd18":
            return 0.9;
          default:
            return 0;
        }
      case "ddd16":
        if (destino != 0) {
          return 2.9;
        } else {
          return 0;
        }
      case "ddd17":
        if (destino != 0) {
          return 2.7;
        } else {
          return 0;
        }
      case "ddd18":
        if (destino != 0) {
          return 1.7;
        } else {
          return 0;
        }
      default:
        return 0;
    }
  };
}

module.exports = new Resolving();
