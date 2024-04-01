export function gerarCNH() {
    var n = 9;
    var cnh = '';
    for (var i = 0; i < 9; i++) {
        cnh += Math.floor(Math.random() * n);
    }
    return cnh;
}

// Função para gerar um número de CNH válido
export function gerarrCNH() {
    let cnh;
    do {
        cnh = '';
        for (let i = 0; i < 9; i++) {
            cnh += Math.floor(Math.random() * 10);
        }
        cnh += calcularDigito(cnh);
        console.log(cnh);
    } while (!validarCNH(cnh));

    return cnh;
}

// Função para validar um número de CNH
export function validarCNH(cnh) {
    cnh = cnh.replace(/[^\d]+/g,''); // Remove caracteres não numéricos
    if (cnh.length !== 11) return false; // Verifica o comprimento da CNH

    // Calcula o primeiro dígito verificador
    const soma1 = calcularSoma(cnh, 9);
    const digito1 = calcularDigito(soma1);

    // Calcula o segundo dígito verificador
    const soma2 = calcularSoma(cnh, 1);
    const digito2 = calcularDigito(soma2);

    // Verifica se os dígitos verificadores estão corretos
    if (parseInt(cnh.charAt(9)) !== digito1 || parseInt(cnh.charAt(10)) !== digito2) {
        return false;
    }

    return true;
}

// Função auxiliar para calcular a soma dos produtos dos dígitos pelos pesos
function calcularSoma(cnh, inicio) {
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cnh.charAt(i + inicio)) * (9 - i);
    }
    return soma;
}

// Função auxiliar para calcular o dígito verificador
function calcularDigito(soma) {
    let resto = soma % 11;
    return (resto < 2) ? 0 : 11 - resto;
}


