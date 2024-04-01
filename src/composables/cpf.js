export function gerarCPF() {
    let cpff;
    do {
        var n = 9;
        var n1 = Math.floor(Math.random() * n) + '';
        var n2 = Math.floor(Math.random() * n) + '';
        var n3 = Math.floor(Math.random() * n) + '';
        var n4 = Math.floor(Math.random() * n) + '';
        var n5 = Math.floor(Math.random() * n) + '';
        var n6 = Math.floor(Math.random() * n) + '';
        var n7 = Math.floor(Math.random() * n) + '';
        var n8 = Math.floor(Math.random() * n) + '';
        var n9 = Math.floor(Math.random() * n) + '';
        var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
        d1 = 11 - (d1 % 11);
        if (d1 >= 10) d1 = 0;
        var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
        d2 = 11 - (d2 % 11);
        if (d2 >= 10) d2 = 0;

        cpff = '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2;
    } while (!validarCPF(cpff));

    return cpff;
}

// Função para validar CPF
export function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,''); // Remove caracteres não numéricos
    if(cpf.length !== 11) return false; // Verifica o comprimento do CPF

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Calcula o primeiro dígito verificador
    var soma = 0;
    for (var i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var resto = soma % 11;
    var digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

    // Calcula o segundo dígito verificador
    soma = 0;
    for (var i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    var digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

    // Verifica os dígitos verificadores
    if (parseInt(cpf.charAt(9)) !== digitoVerificador1 || parseInt(cpf.charAt(10)) !== digitoVerificador2) {
        return false;
    }

    return true;
}


