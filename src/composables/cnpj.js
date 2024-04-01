import {useRemoveMask} from '@/composables/utils'



 export const  generateCNPJ =()=> {
    var n = 9;
    var n1 = Math.round(Math.random() * n);
    var n2 = Math.round(Math.random() * n);
    var n3 = Math.round(Math.random() * n);
    var n4 = Math.round(Math.random() * n);
    var n5 = Math.round(Math.random() * n);
    var n6 = Math.round(Math.random() * n);
    var n7 = Math.round(Math.random() * n);
    var n8 = Math.round(Math.random() * n);
    var n9 = 0; // Dígito verificador 1
    var n10 = 0; // Dígito verificador 2
    var n11 = 0; // Dígito verificador 1
    var n12 = 1; // Dígito verificador 2

    var n13 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
    n13 = 11 - (n13 % 11);
    if (n13 >= 10) {
        n13 = 0;
    }

    var n14 = n13 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
    n14 = 11 - (n14 % 11);
    if (n14 >= 10) {
        n14 = 0;
    }

    let resp =  '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + '/' + n9 + n10 + n11 + n12 + '-' + n13 + n14;
    return resp
}
export const useToCNPJ = (value) => {
    if (!value) return ''
    if (value.length !== 14) return value
    let text = new String(value);
    let firstPart = text.slice(0, 2);
    let secondPart = text.slice(2, 5);
    let thirdPart = text.slice(5, 8);
    let fourthPart = text.slice(8, 12);
    let fifthPart = text.slice(-2);

    return firstPart
      .concat(".")
      .concat(secondPart)
      .concat(".")
      .concat(thirdPart)
      .concat("/")
      .concat(fourthPart)
      .concat("-")
      .concat(fifthPart);
  }





