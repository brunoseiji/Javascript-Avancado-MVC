class NegociacaoController {

    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        // '2019-11-15'
        let data = new Date(...this._inputData.value.split('-').map((item, index) => {
            if(index == 1) {
                return item - 1;
            }
            return item
        }));
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )

        console.log(negociacao);
    }

}