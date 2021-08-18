console.log("JC carregando")

function validaCpf(cpf) {
    if (cpf.length != 11){
        return false
    }else{

        //a partir de um ponto inicial e final ele retorna parte do texto, a partir do 0 pegará 9 caracteres
        let number = cpf.substring(0,9)
        let numberEnd = cpf.substring(9)
        console.log(number)
        
        //validacao do primeiro digito
        let soma = 0
        for(let i = 10; i > 1; i--){
            soma += number.charAt(10 - i) * i
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)

        if(resultado != numberEnd.charAt(0)){
            return false
        }

        //validacao 2 digito
        soma = 0;
    
        number = cpf.substring(0,10)
        for(let i = 11; i > 1; i--){
            soma += number.charAt(11 - i) * i
        }
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)

        if(resultado != numberEnd.charAt(1)){
            return false
        }
        return true

    }
}

function validator() {
    console.log("Iniciando a funcao")
    document.getElementById('success').style.display = 'none'
    document.getElementById('error').style.display = 'none'


    let cpf = document.getElementById('cpf_digitado').value

    let resultadoValidacao = validaCpf(cpf)
    
    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block'
    }else{
        document.getElementById('error').style.display = 'block'
    }
}