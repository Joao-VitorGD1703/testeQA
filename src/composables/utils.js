import router from '@/routes/index.js'

export const useToCPF = (value) => {
    if (!value) return ''
    if (value.length !== 11) return value
    let text = new String(value);
    let firstPart = text.slice(0, 3);
    let secondPart = text.slice(3, 6);
    let thirdPart = text.slice(6, 9);
    let fourthPart = text.slice(-2);

    return firstPart
      .concat(".")
      .concat(secondPart)
      .concat(".")
      .concat(thirdPart)
      .concat("-")
      .concat(fourthPart);
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
export const useGoTo = (path) => {
    router.push(path);
  }

  
  export  const useRemoveMask = (string) => {
    if (!string) return string
    return string.replace(/\D/g, '')
  }