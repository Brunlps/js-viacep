function buscarEndereco(cep) {

    if (validarCEP(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)

            // Trantando os dados com OK e Status
            .then(resposta => resposta.json())
            .then(json => {

                if (json.error) {
                    alert("CEP inválido")
                    return;
                }

                let logradouro = document.querySelector('#logradouro')
                let bairro = document.querySelector('#bairro')
                let localicao = document.querySelector('#localicao')
                let estado = document.querySelector('#estado')

                logradouro.value = json.logradouro;
                bairro.value = json.bairro;
                localicao.value = json.localicao;
                estado.value = json.estado;

            })
            .catch(error(alert("CEP inválido!"))
            )
    };




}
/** Função que valida o ce
 * 
 * @param {Strind} cep 
 * @returns 
 */

function validarCEP(cep) {
    let regex = /^\d{8}/;
    // const regex = /^\d{8}/;
    return regex.test(cep)
}
// .then e catch fazem o tratamento de erro, são irmões
// .then:
// .catch: 