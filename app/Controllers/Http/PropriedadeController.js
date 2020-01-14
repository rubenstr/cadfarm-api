'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with propriedades
 */

const propriedade = use("App/Models/Propriedade")

class PropriedadeController {
  /**
   * Show a list of all propriedades.
   * GET propriedades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const listaPropriedades=await propriedade.all();
    response.send(listaPropriedades);
  }

  /**
   * Render a form to be used for creating a new propriedade.
   * GET propriedades/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new propriedade.
   * POST propriedades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data=request.all()
    const Propriedade=await propriedade.create(data);
    response.send(Propriedade)
  }

  /**
   * Display a single propriedade.
   * GET propriedades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const listaPropriedades=await propriedade.find(params.id);
    response.send(listaPropriedades);

  }

  /**
   * Render a form to update an existing propriedade.
   * GET propriedades/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update propriedade details.
   * PUT or PATCH propriedades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data=request.all();
    const atualizaPropriedade=await propriedade.find(params.id);
    atualizaPropriedade.merge(data);
    atualizaPropriedade.save();
    response.send({mensagem:'Atualizado com Sucesso!'})
  }

  /**
   * Delete a propriedade with id.
   * DELETE propriedades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const deletePropriedades=await propriedade.find(params.id);
    deletePropriedades.delete();
    response.send({mensagem:'Deletado com Sucesso!'})
  }
}

module.exports = PropriedadeController
