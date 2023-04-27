function numberToLetter(number, currency, cents) {

  const letter = {
    0: "zéro",
    1: "un",
    2: "deux",
    3: "trois",
    4: "quatre",
    5: "cinq",
    6: "six",
    7: "sept",
    8: "huit",
    9: "neuf",
    10: "dix",
    11: "onze",
    12: "douze",
    13: "treize",
    14: "quatorze",
    15: "quinze",
    16: "seize",
    17: "dix-sept",
    18: "dix-huit",
    19: "dix-neuf",
    20: "vingt",
    30: "trente",
    40: "quarante",
    50: "cinquante",
    60: "soixante",
    70: "soixante-dix",
    80: "quatre-vingt",
    90: "quatre-vingt-dix",
  };

  let n, quotient, reste, nb;
  let result = '';
  if (number.toString().replace(/ /gi, "").length > 15) return "dépassement de capacité";
  if (isNaN(number.toString().replace(/ /gi, ""))) return "Nombre non valide";

  nb = parseFloat(number.toString().replace(/ /gi, ""));
  if (Math.ceil(nb) != nb) {
    nb = number.toString().split('.');
    return numberToLetter(nb[0]) + (currency ? " " + currency + " et " : " virgule ") + numberToLetter(nb[1]) + (cents ? " " + cents : "");
  }

  n = nb.toString().length;
  switch (n) {
    case 1:
      result = letter[nb];
      break;
    case 2:
      if (nb > 19) {
        quotient = Math.floor(nb / 10);
        reste = nb % 10;
        if (nb < 71 || (nb > 79 && nb < 91)) {
          if (reste == 0) result = letter[quotient * 10];
          if (reste == 1) result = letter[quotient * 10] + "-et-" + letter[reste];
          if (reste > 1) result = letter[quotient * 10] + "-" + letter[reste];
        } else result = letter[(quotient - 1) * 10] + "-" + letter[10 + reste];
      } else result = letter[nb];
      break;
    case 3:
      quotient = Math.floor(nb / 100);
      reste = nb % 100;
      if (quotient == 1 && reste == 0) result = "cent";
      if (quotient == 1 && reste != 0) result = "cent" + " " + numberToLetter(reste);
      if (quotient > 1 && reste == 0) result = letter[quotient] + " cents";
      if (quotient > 1 && reste != 0) result = letter[quotient] + " cent " + numberToLetter(reste);
      break;
    case 4 :
    case 5 :
    case 6 :
      quotient = Math.floor(nb / 1000);
      reste = nb - quotient * 1000;
      if (quotient == 1 && reste == 0) result = "mille";
      if (quotient == 1 && reste != 0) result = "mille" + " " + numberToLetter(reste);
      if (quotient > 1 && reste == 0) result = numberToLetter(quotient) + " mille";
      if (quotient > 1 && reste != 0) result = numberToLetter(quotient) + " mille " + numberToLetter(reste);
      break;
    case 7:
    case 8:
    case 9:
      quotient = Math.floor(nb / 1000000);
      reste = nb % 1000000;
      if (quotient == 1 && reste == 0) result = "un million";
      if (quotient == 1 && reste != 0) result = "un million" + " " + numberToLetter(reste);
      if (quotient > 1 && reste == 0) result = numberToLetter(quotient) + " millions";
      if (quotient > 1 && reste != 0) result = numberToLetter(quotient) + " millions " + numberToLetter(reste);
      break;
    case 10:
    case 11:
    case 12:
      quotient = Math.floor(nb / 1000000000);
      reste = nb - quotient * 1000000000;
      if (quotient == 1 && reste == 0) result = "un milliard";
      if (quotient == 1 && reste != 0) result = "un milliard" + " " + numberToLetter(reste);
      if (quotient > 1 && reste == 0) result = numberToLetter(quotient) + " milliards";
      if (quotient > 1 && reste != 0) result = numberToLetter(quotient) + " milliards " + numberToLetter(reste);
      break;
    case 13:
    case 14:
    case 15:
      quotient = Math.floor(nb / 1000000000000);
      reste = nb - quotient * 1000000000000;
      if (quotient == 1 && reste == 0) result = "un billion";
      if (quotient == 1 && reste != 0) result = "un billion" + " " + numberToLetter(reste);
      if (quotient > 1 && reste == 0) result = numberToLetter(quotient) + " billions";
      if (quotient > 1 && reste != 0) result = numberToLetter(quotient) + " billions " + numberToLetter(reste);
      break;
  }
  /*respect de l'accord de quatre-vingt*/
  if (result.substring(result.length - "quatre-vingt".length, "quatre-vingt".length) == "quatre-vingt") result = result + "s";

  return result;
}
