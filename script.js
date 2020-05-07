// apenas aviso de terminal
console.log("Javascript carregado");

// Função com as regras de validação real do CPF
function validaCPF(cpf) {
    console.log(cpf.length);
    //condicional de leitura dos caracteres 
    if(cpf.length != 11) {
        return false;
    }   else {
        //variáveis de separação de um número de CPF
        var numeros = cpf.substring(0,9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for(var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
            }
            console.log(soma);

            //variável que traz a mode de 11 por soma, caso seja
            //menor do que 2, atribui a zero, se não for, 11 menos o resultado de soma mode 11
            //ajuda para não escrever muito if/else
            var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

            //validação do primeiro digito
            if(resultado != digitos.charAt(0)) {
                return false;
            } 

            soma = 0;
            
        return true;
    }

}

//  conexão com o HTML para mostrar os alerts
function validacao() {

    // aviso de terminal
    console.log('Iniciando validação de CPF');

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidacao = validaCPF(cpf);

    //condicional para exibição da function validaCPF
    if(resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }
}