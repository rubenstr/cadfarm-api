'use strict'

class CaffarmController {
    index(){
        return { greeting: 'teste hello word in JSON'}
    }
    show({request, response, params}){
        response.send({mensagem: 'retorno do show:' + params.id})
    }
    store({params, request, response}){
        const {titulo, corpo}=request.all()
        response.send({mensagem: 'retorno do store:' + params.id + 'titulo: ' + titulo + 'corpo: ' + corpo})
    }
    put({request, response, params}){
        response.send({mensagem: 'retorno do put:' + params.id})
    }
    destroy({request, response, params}){
        response.send({mensagem: 'retorno do delete:' + params.id})
    }
}

module.exports = CaffarmController
